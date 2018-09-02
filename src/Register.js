import React, { Component } from 'react';
import serializeForm from 'form-serialize';

class Register extends Component {

  registerUser = (e) => {
    e.preventDefault();
    const values = serializeForm(e.target, { hash: true})
    fetch('http://40.115.96.228/register',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      }).then(res => res.json())
      .then((data) => {
        
        
        console.log(data)
        
      })
      .catch(err => {
      
        console.log(err)
      })
  }

  render () {
    return (
      <div>
        <form  method="POST" onSubmit={this.registerUser}>
          user:<input type="text" name="user"/>
          email:<input type="email" name="email"/>
          passw:<input type="password" name="password"/>
          <button className="login-button">Register</button>
        </form>

      </div>
    )
  }
}

export default Register