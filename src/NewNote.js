import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class NewNote extends Component {
  render () {
    return (
      <div>
        <Link className="close-new-note-button" to="/">Close</Link>
        <form className="create-new-note-form">
          <div className="new-note-details">
            <input type="text" name="title" placeholder="Title"/>
            <input type="text" name="content" placeholder="content"/>
            <input type="checkbox" name="done" value="false"/>
            <input type="date" name="dline"/>
            <button>Send</button>
          </div>
        
        </form>
      </div>
    )
  }
}

export default NewNote