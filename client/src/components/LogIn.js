import React, { Component } from 'react'
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

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
      firstname: null,
      lastname: null,
      datar: [],
      formErrors: {
        email: "",
        password: "",
      }
    };
  }
 
  handleSubmit = e => {
    e.preventDefault();
    const {email, password, datar} = this.state;
      const login = {email, password}
      alert('A form was submitted: ' + this.state.email);
      axios.post("http://localhost:5000/login", login, { crossdomain: true }).then(response => {
      if (response){
        this.state.datar = response.data.result[0];
        this.setState({lastname : response.data.result[0].firstname })
        console.log(`data racho: ${this.state.lastname}`)
        console.log(response.data.result[0])
      }
      else {
        this.setState({datar : response.data.message})
      }
     /* if(formValid(this.state)) {
      console.log(
        `--SUBMITTING--
        Email: ${this.state.email}
        Password: ${this.state.password}
        data: ${this.state.datar.lastname}`
      )
    }else {
      alert('FILL IN ALL REQURED INFORMATION')}*/
      })
  };
 
  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = this.state.formErrors;

    switch (name) {
    case "email": formErrors.email = 
     emailRegex.test(value)  ?
      "": "invalid email";
    break;
    case "password": formErrors.password = 
      value.length < 6  ?
      "minimum 3 characters required": "";
    break;
    default:
    break;
    }
    this.setState({formErrors, [name]: value }, () => console.log(this.state))
  };
  render() {
    const { formErrors} = this.state;
    return (
      <div className="wrapper"> 
        <div className="form-wrapper">
          <h1> Log Into Your Account </h1>
         
          <form onSubmit={this.handleSubmit} >
           
            <div className ="email">
              <label className='accountLabels' htmlFor="email"> Email</label>
              <input id='accountsInput'
              className ={formErrors.email.length > 0 ? "error" : null}
              placeholder = "email"
              type = "email"
              name = "email"
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
              onChange={this.handleChange}
              />
              {formErrors.password.length > 0 && (
              <span className="errorMessage">{formErrors.password}</span>
            )}
            </div>
            
             <div className="createAccount">
               <button type="submit" >Log Into Account</button>
               <Link style={linkStyle}to ='/SignUp'>
               <small>Don't have an account?</small>
               </Link>
             </div>
             </form>
        </div>
        <div className='form-wrapper'>
        <h1>Login To View Your Grades</h1>
             <h3>Full Name: {this.state.datar.firstname} {this.state.datar.lastname}</h3>
             <h3>Course Name: {this.state.datar.coursename}</h3>
             <h3>Final Grade: {this.state.datar.grade}</h3>
             </div>
      </div>
    )
      }
  }
  
export default LogIn
