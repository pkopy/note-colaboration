import React, { Component } from 'react';
import Notes from './Notes'
import logo from './logo.svg';
// import './App.css';

class App extends Component {
  state = {
    notes:[
      {
        id:0,
        title: 'test',
        date: new Date(),
        content: 'to jest jakiś tekst',
        color: '#222',
        done: false,
        deadLine: new Date()
      
      },
      {
        id:1,
        title: 'test',
        date: new Date(),
        content: 'to jest jakiś tekst',
        color: '#999',
        done: false,
        deadLine: new Date()
      },

    ]
  }
  addNote = (newNote) => {
    let arr = this.state.notes;
    newNote.id = arr.length;
    newNote.color = `rgb(${Math.floor(Math.random() *255)}, ${Math.floor(Math.random() *255)}, ${Math.floor(Math.random() *255)}`
    
    arr.push(newNote)
    this.setState({notes: arr})
  }
  addDay = (note) => {
    note.deadLine.setDate(note.deadLine.getDate() + 1)
    this.changeNote(note)
  }

  minusDay =(note) => {
    note.deadLine.setDate(note.deadLine.getDate() - 1)
    this.changeNote(note)
  }

  changeNote = (note) => {
    let arr =this.state.notes.filter((n) => n.id !== note.id)
    arr.push(note)
    this.setState({notes: arr})
  }
  dateToString = (note) => {
    
    return `${note.date.getDate()} - ${note.date.getMonth() + 1} - ${note.date.getFullYear()}
            Deadline: ${note.deadLine.getDate()}`;

  }
  render() {

    const { notes } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <h1>Oh Note</h1>
        </header>
        <Notes 
          minusDay={this.minusDay}
          addDay={this.addDay}
          notes={notes}
          dateToString={this.dateToString}
        />
        <div className="add-note-button" onClick={() => {
            this.addNote({
              
              title: 'new',
              date: new Date(),
              done: false,
              deadLine: new Date()

            });
            console.log(this.state.notes)

          }
        }>

        </div>

      </div>
    );
  }
}

export default App;
