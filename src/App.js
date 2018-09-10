import React, { Component } from 'react';
import Notes from './Notes'
import NewNote from './NewNote';
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import StartPanel from './StartPanel'
import Login from './Login'
import Register from './Register'
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  state = {
    notes:[
      
    ],
    list: true,
    user: {
      login: false
    }
  }

  changeToList = () => {
    this.state.list?this.setState({list: false}):this.setState({list: true})
    
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
    if(newNote.dline) {
      newNote.deadLine.setDate(newNote.dline.slice(8)) 

    }
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

  setUser = (data) => {
    
    console.log(data)
     this.setState({user: data})
     this.render()

  }

  track = (e) => {
    window.addEventListener('click', (e) => {
      console.log(e)
    })
  }
  unTrack = (e) => {
    window.addEventListener('mousemove', (e) => {
      console.log(e)
    })
  }
  render() {

    const { notes, user} = this.state
    return (
      <div className="App">
        
        <Route exact path="/" render={() =>(
          // <Notes 
          //   minusDay={this.minusDay}
          //   addDay={this.addDay}
          //   notes={notes}
          //   dateToString={this.dateToString}

          // />
          
          <StartPanel
            login={user.login}
            minusDay={this.minusDay}
            addDay={this.addDay}
            notes={notes}
            dateToString={this.dateToString}
            user={user}
          />
          
        )}/>

        <Route path="/new" render={({ history }) =>(
          
          <NewNote 
          addNote={(note) => {
            this.addNote(note);
            history.push('/notes')
          }}
          login={user.login}
          list={this.state.list}
          changeToList={this.changeToList}
          /> 
        )}/>

        <Route path="/login" render={({ history }) => (
          <Login 
            setUser={(data) => {
              this.setUser(data);
              history.push('/notes')
            }}
            minusDay={this.minusDay}
            addDay={this.addDay}
            notes={notes}
            dateToString={this.dateToString}
            login={user.login}
            user={user}
            track={this.track()}
          />
        )}/>

        <Route path="/register" render={() => (
          <Register />
        )}
        />

        <Route path="/notes" render={({ history }) => (
          <Notes 
          login={user.login}
          minusDay={this.minusDay}
          addDay={this.addDay}
          notes={notes}
          dateToString={this.dateToString}
          user={user}
          unTrack={this.unTrack()}
          
          />
        )}
        />

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
