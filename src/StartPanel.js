import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class StartPanel extends Component {
  render () {
    const {login} = this.props;
    return(
      
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
}

export default StartPanel