import React, { Component } from 'react';
import Notes from './Notes'
import NewNote from './NewNote';
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
// import logo from './logo.svg';
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
      {
        id:2,
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
    let maxId = this.state.notes.reduce((prev, cur) => {
      console.log(`cur: ${cur.id} prev: ${prev.id}`)
      return (cur.id > prev.id)?cur:prev
    })

    console.log(maxId)
    newNote.id = maxId.id+1;
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
        
        <Route exact path="/" render={() =>(
          <Notes 
            minusDay={this.minusDay}
            addDay={this.addDay}
            notes={notes}
            dateToString={this.dateToString}
          />
          

        )}/>

        <Route path="/new" component={NewNote}/>
        {/* <div className="add-note-button" onClick={() => {
            this.addNote({
              
              title: 'new',
              date: new Date(),
              done: false,
              deadLine: new Date()

            });
            
            console.log(this.state.notes)

          }}
        >

        </div> */}
        <Link
          to="/new"
          className="add-note-button"
        ></Link>

      </div>
    );
  }
}

export default App;
