import React, { Component } from 'react';
import serializeForm from 'form-serialize';
import { Link } from 'react-router-dom'
import Notes from './Notes';

class Login extends Component {
  state = {
    user: {}
  }
  loginUser = (e) => {
    e.preventDefault();
    const values = serializeForm(e.target, { hash: true})
    fetch('http://40.115.96.228:8080/login',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      }).then(res => res.json())
      .then((data) => {
        console.log(data.login)
        if(data.login){

          this.props.setUser(data);
          this.setState({user:data})
        }
        console.log(data)
        
      })
      .catch(err => {
      
        console.log(err)
      })
  }

  render () {

    const { login, minusDay, addDay, notes, dateToString} = this.props;
    return (
      <div>
        {login?
        <Notes
          minusDay={minusDay}
          addDay={addDay}
          notes={notes}
          dateToString={dateToString}
          login={login}
          user={this.state.user}
          />:
        (<form method="POST" onSubmit={this.loginUser}>
          user:<input type="text" name="user"/>
          passw:<input type="password" name="password"/>
          <button className="login-button">Login</button>
        </form>)
        
        }
      </div>
    )
  }
}

export default Login