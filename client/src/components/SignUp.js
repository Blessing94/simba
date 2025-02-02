import React, { Component, useState } from 'react'
import '../Account.css'
import '../index.css'
import { Link } from 'react-router-dom';
import axios from 'axios';

var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


const formValid = ({formErrors, ...rest}) => {
  let valid = true;
  Object.values(formErrors).forEach( val => {val.length > 0 &&
     (valid = false)
    });
    Object.values(rest).forEach(val => {
      val === null && (valid = false);
    });
    return valid;
}
const linkStyle ={
    width: '100%'
};

class SignUp extends React.Component {
  constructor(props) {
      super(props);
      this.state = { firstName: null,
        lastName: null,
        email: null,
        password: null,
        formErrors: {
          firstName: "",
           lastName: "",
           email: "",
           password: ""
         }
        
  }}

  handleChange = (event) => {
      this.setState({[event.target.name]: event.target.value,});
      
      //Error handling
      const { name, value } = event.target;
    let formErrors = this.state.formErrors;
    switch (name) {
      case "firstName": formErrors.firstName = 
      value.length < 3 ?
      "minimum 3 characters required": "";
    break;

      case "lastName": formErrors.lastName = 
      value.length < 3  ?
      "minimum 3 characters required": "";
    break;

    case "email": formErrors.email = 
     emailRegex.test(value)  ?
      "": "invalid email";
    break;

    case "password": formErrors.password = 
      value.length < 6  ?
      "passord not strong enough": "";
    break;
    default:
    break;
  }
  this.setState({formErrors, [name]: value }, () => console.log(this.state))
}

  handleSubmit = (event) => {
      event.preventDefault();
      const {firstName, lastName, email, password} = this.state;
      const signup = {firstName, lastName, email, password}
      alert('A form was submitted: ' + this.state);
      axios.post("http://localhost:5000/students", signup, { crossdomain: true }).then(response => {
        console.log(response)
          
        if(formValid(this.state)) {
          console.log(
            `--SUBMITTING--
            First Name: ${this.state.firstName}
            Last Name: ${this.state.lastName}
            Email: ${this.state.email}
            Password: ${this.state.password}`
          ) } else {
          alert('FILL IN ALL REQURED INFORMATION')}
        })
      }
      //************* CODE THAT GOT CHANGED **************/
      /*fetch('http://localhost:5000/store-data',  {
          method: 'POST',
          // We convert the React state to JSON and send it as the POST body
          body: JSON.stringify(this.state)
          
      }).then(function(response) {
          console.log(response)
          return response.json();
          
      });
    */
      
     
  


  render() {
    const { formErrors} = this.state;
      return (
        
      //************* CODE THAT GOT CHANGED **************/
         /* <form onSubmit={this.handleSubmit}>
              <label>
                  Name:
                  <input type="text" value={this.state.value} name="name" onChange={this.handleChange} />
              </label>
              <input type="submit" value="Submit" />
          </form>*/

<div className="wrapper">
        <div className="form-wrapper">
          <h1> Create Account</h1>
          <form  onSubmit={this.handleSubmit} className='accountForm'  >
            <div className ="firstName">
              <label className='accountLabels' htmlFor="firstName"> First Name</label>
              <input id='accountsInput'
              placeholder = "first name"
              type = "text"
              name = "firstName"
              value={this.state.value}
              onChange={this.handleChange}
              className ={formErrors.firstName.length > 0 ? "error" : null}
              />
              {formErrors.firstName.length > 0 && (
              <span className="errorMessage">{formErrors.firstName}</span>)}
            </div>
            

            <div className ="lastName">
              <label className='accountLabels' htmlFor="lastName"> Last Name</label>
              <input type="text" id='accountsInput'
              className ={formErrors.lastName.length > 0 ? "error" : null}
              placeholder = "last name"
              name = "lastName"
              value={this.state.value}
              onChange={this.handleChange}
              />
             {formErrors.lastName.length > 0 && (
              <span className="errorMessage">{formErrors.lastName}</span>
            )}
            </div>
            

            <div className ="email">
              <label className='accountLabels' htmlFor="email"> email</label>
              <input id='accountsInput'
              className ={formErrors.email.length > 0 ? "error" : null}
              placeholder = "email"
              type = "email"
              name = "email"
              value={this.state.value}
              onChange={this.handleChange}
              />
              {formErrors.email.length > 0 && (
              <span className="errorMessage">{formErrors.email}</span>
            )}
            </div>

            <div className ="password">
              <label className='accountLabels' htmlFor="password"> password</label>
              <input id='accountsInput' 
              className ={formErrors.password.length > 0 ? "error" : null}
              placeholder = "password"
              type = "password"
              name = "password"
              value={this.state.value}
              onChange={this.handleChange}
              />
             {formErrors.password.length > 0 && (
              <span className="errorMessage">{formErrors.password}</span>
            )}
            </div>
            
             <div className="createAccount">
               <button >ccreate Account</button>
               <Link style={linkStyle}to ='/LogIn'>
               <small>Already have an account?</small>
               </Link>
             </div>
          </form>
        </div>
      </div>
   
      );
  }
}

export default SignUp;








