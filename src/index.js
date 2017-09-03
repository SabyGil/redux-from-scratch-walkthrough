import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// We need to import createStore which is going to have our getState and dispatch methods
import createStore from './createStore';
// Requiring the Reducer
import manageBand from './reducers/manageBand';

// We are use the reducer inside of our createStore method.
// Now when we call getState or dispatch, its going to look into this reducer called manageBand.
const store = createStore(manageBand);


// We're passing in store as a property so that all the children components
// have access to the current state and also to make state changes.
// The function itself being passed through makes it easy to make and retrieve
// states and state changes.
function render(){
  ReactDOM.render(
    <App store={ store }/>,
    document.getElementById('root')
  );
}

// We are exporting the wrapped ReactDom Function method so it can be used
// in our createStore.js file.


export const renderer = { render: render };

store.dispatch({ type: 'start' });
