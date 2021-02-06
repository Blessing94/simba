import React, { Component } from 'react'
import '../Account.css'
import '../index.css'
import { Link } from 'react-router-dom';


var emailRegex = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;

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

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      formErrors: {
        firstName: "",
        lastName: "",
        email: "",
        password: ""

      }
    };
    
  }
 
  handleSubmit = e => {
    //e.preventDefault();

 
        if(formValid(this.state)) {
      console.log(
        `--SUBMITTING--
        First Name: ${this.state.firstName}
        Last Name: ${this.state.lastName}
        Email: ${this.state.email}
        Password: ${this.state.password}`
      )
      
    }else {
      alert('FILL IN ALL REQURED INFORMATION')
    }
  };


  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
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
  };
  render() {

    const { formErrors} = this.state;
    return (
      <div className="wrapper"> 
        <div className="form-wrapper">
          <h1> Create Account</h1>
          <form className='accountForm' onSubmit={this.handleSubmit} noValidate>
            <div className ="firstName">
              <label className='accountLabels' htmlFor="firstName"> First Name</label>
              <input id='accountsInput'
              className ={formErrors.firstName.length > 0 ? "error" : null}
              placeholder = "first name"
              type = "text"
              name = "firstName"
              noValidate
              onChange={this.handleChange}
              />
              {formErrors.firstName.length > 0 && (
              <span className="errorMessage">{formErrors.firstName}</span>
            )}
            </div>
            

            <div className ="lastName">
              <label className='accountLabels' htmlFor="lastName"> Last Name</label>
              <input type="text" id='accountsInput'
              className ={formErrors.lastName.length > 0 ? "error" : null}
              placeholder = "last name"
              name = "lastName"
              noValidate
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
              noValidate
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
              noValidate
              onChange={this.handleChange}
              />
              {formErrors.password.length > 0 && (
              <span className="errorMessage">{formErrors.password}</span>
            )}
            </div>
            
             <div className="createAccount">
               <button type="submit" onClick={this.continue}>create Account</button>
               <Link style={linkStyle}to ='/LogIn'>
               <small>Already have an account?</small>
               </Link>
             </div>
             


          </form>
        </div>
      </div>
    )
      
      
    
      }
  }
  
  
     
  


export default SignUp;




