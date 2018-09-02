import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Notes from './Notes'

class StartPanel extends Component {
  render () {
    const {login, minusDay, addDay, notes, dateToString} = this.props;
    return(
      
      <div>
        

        {login?
          (
            <Notes
            minusDay={minusDay}
            addDay={addDay}
            notes={notes}
            dateToString={dateToString}
            login={login}
            
          />

          ):
          (
            <div>
            <header className="App-header">
              <h1>Oh Note</h1>
              {login?(<div>ZALOGOWANY</div>):(<div>NIEZALOGOWANY</div>)}
            </header>
            <h2>Welcome to Oh-Note</h2>
            <Link 
              to="/login"
              className="login-button"
            >LOGIN</Link>
            <Link 
              to="/register"
              className="login-button"
            >REGISTER</Link>
            </div>
          )
          
        }

      </div>
    )
  }
}

export default StartPanel