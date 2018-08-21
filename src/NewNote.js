import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import serializeForm from 'form-serialize'

class NewNote extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    const values = serializeForm(e.target, { hash: true})
    
   this.props.addNote(values)
  }
  render () {
    return (
      <div>
        <Link className="close-new-note-button" to="/">Close</Link>
        <form onSubmit={this.handleSubmit} className="create-new-note-form">
          <div className="new-note-details">
            <input type="text" name="title" placeholder="Title"/>
            <input type="text" name="content" placeholder="content"/>
            <input type="checkbox" name="done" value="true"/>
            <input type="date" name="dline"/>
            <button>Send</button>
          </div>
        
        </form>
      </div>
    )
  }
}

export default NewNote