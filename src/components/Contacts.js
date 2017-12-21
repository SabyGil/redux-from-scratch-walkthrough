import React, { Component } from 'react';
import Contact from './Contact';


class Contacts extends Component {

  render(){
    const contacts = this.props.store2.getState().contacts.map((contact, index) => {
      return <Contact key={index} contact={contact} store2={this.props.store2} />
    });
    return(
      <ul>
        {contacts}
      </ul>
    );
  }
};

export default Contacts;
