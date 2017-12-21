import React from "react";
import AddressBook from './AddressBook';
import { Button, FormGroup, Label, Input, Form  } from 'reactstrap';

//class based Parent component
class AddContact extends React.Component {
  constructor(){
    super();
    this.state={
      name: ""
    }
  }

  handleChange(e){
    e.preventDefault();
    this.setState({
      name: e.target.value
    });
  }

// Below we are going to be using the dispatch function from createStore.js in order
// to change our state. We are sending in the tyoe and then the band data as an object.
handleSubmit(e){
  e.preventDefault();
  this.props.store.dispatch({
    name: 'ADD_BAND',
    band: {
      name: this.state.name,
    },
  });

}

// We are rendering the AddressBook Child Component
  render(){
    return (
      <div>
      <h1>Add Contact </h1>
        <Form>
         <FormGroup>
           <Label for="Name">Name: </Label>
           <Input
              type="text"
              name="name"
              placeholder="with a placeholder"
              value= {this.state.name}
              onChange={ this.handleChange }
          />
         </FormGroup>
         <FormGroup>
           <Label for="Number">Number: </Label>
           <Input
              type="text"
              number="number"
              id="examplePassword"
              placeholder="number placeholder"
              value= {this.state.number}
              onChange={ this.handleChange }
           />
         </FormGroup>
         <FormGroup>
           <Label for="Address">Address: </Label>
           <Input
              type="address"
              address="address"
              id="examplePassword"
              placeholder="address placeholder"
              value={ this.state.address }
              onChange={ this.handleChange }
             />
         </FormGroup>
         <Button
          onClick={this.handleSubmit}>
            Submit
         </Button>
        </Form>
        <br />

        <AddressBook
          name={this.state.name}
          number={this.state.number}
          address={this.state.address}
        />
      </div>
    )
  }
}

export default AddContact;
