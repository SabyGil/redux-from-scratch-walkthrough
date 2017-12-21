import React, { Component } from 'react';
import BandInput from './components/BandInput';
import Bands from './components/Bands';
import AddContact from './components/AddContact';
import Contacts from './components/Contacts';



class App extends Component{
  // We have to continue passing in the function store into children
  // components.
  render(){
    debugger

    return(
      <div>
        <BandInput store={this.props.store} />
        <Bands store={this.props.store} />
        <AddContact store2={this.props.store2} />
        <Contacts store2={this.props.store2} />

      </div>
    )
  }
}

export default App;
