import React, { Component } from 'react';


class Contact extends Component {
  handleClick(e){
    e.preventDefault();
    this.props.store2.dispatch({
      name: 'DELETE_BAND',
      contact: this.props.contact.name
    });
  }
  render(){
    return(
      <div>
        <li>{this.props.contact.name}</li>
        <button onClick={ (event) => this.handleClick(event) }>Delete</button>
      </div>
    );
  }
}

export default Contact;
