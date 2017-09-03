import React, { Component } from 'react';
import BandInput from './components/BandInput';
import Bands from './components/Bands';


class App extends Component{
  // We have to continue passing in the function store into children
  // components.
  render(){
    return(
      <div>
      <h1>Enter a name of a band</h1>
        <BandInput store={this.props.store} />
        <Bands store={this.props.store} />
      </div>
    )
  }
}

export default App;
