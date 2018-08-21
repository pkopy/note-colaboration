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
      

    ]
  }
  addNote = (newNote) => {
    let arr = this.state.notes;
    let maxId = {id:-1}
    if(arr.length !== 0){
      maxId = this.state.notes.reduce((prev, cur) => {
        console.log(`cur: ${cur.id} prev: ${prev.id}`)
        return (cur.id > prev.id)?cur:prev
      })
      
    }

    console.log(maxId)
    newNote.id = maxId.id+1;
    newNote.date =new Date();
    newNote.deadLine = new Date();
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
    
    return `${note.date.getDate()} - ${note.date.getMonth() + 1} - ${note.date.getFullYear()}`;

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

        <Route path="/new" render={({ history }) =>(
          <NewNote 
          addNote={(note) => {
            this.addNote(note);
            history.push('/')
          }}
          /> 
        )}/>
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
        

      </div>
    );
  }
}

export default App;
