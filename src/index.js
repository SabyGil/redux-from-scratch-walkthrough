import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import createStore from './createStore';
import manageBand from './reducers/manageBand';
import manageContacts from './reducers/manageContacts';


const store = createStore(manageBand);
const store2 = createStore(manageContacts);

function render(){
ReactDOM.render(
  <App store={ store } store2={ store2 }/>,
   document.getElementById('root')
 );
}
// registerServiceWorker();

export const renderer = { render: render };

store.dispatch({
  type: 'start'
});

store2.dispatch({
  type: 'start'
});

//
