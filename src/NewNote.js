import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import serializeForm from 'form-serialize'

class NewNote extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    const values = serializeForm(e.target, { hash: true})
    console.log(values)
    if(!values.title){
      values.title = 'New NOte'
    }
    this.props.addNote(values)
  }
  render () {
    return (
      <div style={{marginTop:'2em'}}>
        <form onSubmit={this.handleSubmit} className="create-new-note-form">
          <div className="new-note-details">
            <input type="text" name="title" placeholder="Title"/><br/>
            <textarea  name="content" placeholder="content"/><br/>
            <input type="checkbox" name="done" value="true"/><br/>
            <input type="date" name="dline"/><br/>
            <Link className="close-new-note-button" to="/">Close</Link><br/>
            <button className="add-note-button"></button>
          </div>
        
        </form>
      </div>
    )
  }
}

export default NewNote