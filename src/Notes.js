import React, { Component } from 'react';

class Notes extends Component {
  render () {

    const { notes, dateToString, addDay, minusDay } = this.props
    return (
      <ol>
        {notes.map(note => 
          <li key={note.id} className="notes-list">
            <div className="note" style={{background: note.color, left:note.id*200+'px'}} >
              {dateToString(note)}
              <div className="change-deadline-container">
                <div className="plus" onClick={() => {addDay(note); console.log(notes)}} >
                  
                </div>
                <div className="minus" onClick={() => {minusDay(note); console.log(notes)}} >
                  
                </div>

              </div>
            </div>
          </li>
        )}
      </ol>
      
      
    )
  }
}

export default Notes