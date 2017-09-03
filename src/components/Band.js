import React, { Component } from 'react';


class Band extends Component {

// When we are handing the click, we would ideally want to change our current
// state to remove this item.  We need to call our dispatch function and include a DELETE
// type so we can impliment logic later in our manageBand.js.
  handleClick(e){
    e.preventDefault();
    this.props.store.dispatch({
      type: "DELETE_BAND",
      id: this.props.band.id
    })
  }
  render(){
    return(
      <div>
        <li>{this.props.band.text}</li>
        <button onClick={(event)=>this.handleClick(event)}>Delete</button>
      </div>
    )
  }
}

export default Band;
