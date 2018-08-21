import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Notes extends Component {
  render () {

    const { notes, dateToString, addDay, minusDay } = this.props
    return (
      <div>
        <header className="App-header">
            <h1>Oh Note</h1>
        </header>
        <ol>
          {notes.map(note => 
            <li key={note.id} className="notes-list">
              <div className="note" style={{background: note.color, left:note.id*200+'px'}} >
                {dateToString(note)}

                <div>Title: {note.title}</div>
                <div>Content: {note.content}</div>
                <div className="change-deadline-container">
                  <div className="plus" onClick={() => {addDay(note); console.log(notes)}} >
                    
                  </div>
                  <div className="minus" onClick={() => {minusDay(note); console.log(notes)}} >
                    
                  </div>

                </div>
                <div>Deadline: {note.deadLine.getDate()}</div>
              </div>
            </li>
          )}
        </ol>
        <Link
          to="/new"
          className="add-note-button"
        ></Link>

      </div>
      
      
    )
  }
}

export default Notes