import React, { Component } from 'react';
import serializeForm from 'form-serialize';
import { Link } from 'react-router-dom'
import Notes from './Notes';

class Login extends Component {
  
  loginUser = (e) => {
    e.preventDefault();
    const values = serializeForm(e.target, { hash: true})
    const x = document.querySelector('.oko')
        x.style.backgroundColor ='#000'
    // fetch('http://40.115.96.228:8080/login',{
    fetch('http://localhost:8080/login',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
        
      }).then(res => {
        console.log('poszło')
        
       return res.json()})
      .then((data) => {
        console.log(data.notes)
        if(data.login){

          this.props.setUser(data);
          this.props.addAllNotes(data.notes)
          // this.setState({user:data})
        }
        const x = document.querySelector('.oko')
        x.style.backgroundColor ='#fff'
        console.log(data)
        
      })
      .catch(err => {
      
        console.log(err)
      })
  }

  render () {

    const { login, minusDay, addDay, notes, dateToString, user} = this.props;
    return (
      <div>
        {login?
        <Notes
          minusDay={minusDay}
          addDay={addDay}
          notes={notes}
          dateToString={dateToString}
          login={login}
          user={user}
          />:
        (<form method="POST" onSubmit={this.loginUser}>
          email:<input type="text" name="email"/>
          passw:<input type="password" name="password"/>
          <button className="login-button">Login</button>
        </form>)
        
        }
        <div className="oko">XXXXXXXXXXXXXXXX</div>
      </div>
    )
  }
}

export default Login