import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import serializeForm from 'form-serialize'
import App from './App'

class NewNote extends Component {
  state = {
    itemsList: [
      {
        title:'First TODO'
      },
      {
        title: 'Second TODO'
      }
    ]
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const values = serializeForm(e.target, { hash: true})
    console.log(values)
    if(!values.title){
      values.title = 'New NOte'
    }
    this.props.addNote(values)
  }

  adjustTextArea = (e, ata) =>{
    // A fixed number lets say 20 to add for no clumsyness
    if(e.keyCode === 13) {
      ata.style.height = `${ata.scrollHeight}px`;

    }
}

  render () {

    const  { list, changeToList,login } = this.props
    return (
      
      <div style={{marginTop:'2em'}}>
      {login? 
      
        (<form onSubmit={this.handleSubmit} className="create-new-note-form">
          <div className="new-note-details">
            <input type="text" name="title" placeholder="Title"/><br/>
    {list?(<textarea onKeyUp={(e)=> this.adjustTextArea(e, document.querySelector('textarea'))} name="content" placeholder="content"/>):
            (<ol>
              {this.state.itemsList.map((item, indx) =>(
                <li key={indx} className="list-item">{item.title}<input type="checkbox" name="done" value="true"/></li>
              ))}
            </ol>)
            
            }
            
            <input type="checkbox" name="list" value="true" onClick={() => changeToList()}/><br/>
            <input type="date" name="dline"/><br/>
            <Link className="close-new-note-button" to="/">Close</Link><br/>
            <button className="add-note-button"></button>
          </div>
        
        </form>):<Link to="/">You must to login first</Link>
      }
      </div>
    )
  }
}

export default NewNote