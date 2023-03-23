import React, { Component } from 'react';
import "./termsForm.css";
import store from './store/store';
import { agreementChanged } from './store/actions';

class TermsForm extends Component {
  state = { 
    name: "",
    age: 13,
    agree: false,
    disabled: false,
  } 
  render() { 
    return (
      <div className="form-container">
        <form onSubmit={this.onSubmit}>
          <div className="form-item">
            <label htmlFor="name">Name</label>
            <input 
              className="input" 
              value={this.state.name} 
              id="name" 
              type="text" 
              name="name"
              required
              onChange={this.handleChangeName}/>
          </div>
          
          <div className="form-item">
            <label htmlFor="age">Age</label>
            <input 
              className="input" 
              value={this.state.age} 
              id="age" 
              type="number" 
              min="13" 
              name="age"
              required
              onChange={this.handleChangeAge}/>
          </div>

          <div className="form-item">
            <label htmlFor="agree">Agree</label>
            <input 
              type="checkbox" 
              id="agree" 
              name="agree"
              onChange={this.handleChangeAgree}/>
          </div>
          

          <button className="form-button" type="submit" disabled={!store.getState()}>Confirm</button>
        </form>
      </div>
    );
  }

  onSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.name, this.state.age, this.state.agree);
  }

  handleChangeName = (event) => {
    this.setState({name: event.target.value});
  }

  handleChangeAge = (event) => {
    this.setState({age: event.target.value});
  }

  handleChangeAgree = (event) => {
    this.setState({agree: event.target.checked});
    store.dispatch(agreementChanged());
  }
}
 
export default TermsForm;