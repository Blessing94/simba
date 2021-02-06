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

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
      formErrors: {
        email: "",
        password: ""

      }
    };
    
  }
 
  handleSubmit = e => {
    e.preventDefault();

 
        if(formValid(this.state)) {
      console.log(
        `--SUBMITTING--
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
          <h1> Log Into Your Account</h1>
          <form onSubmit={this.handleSubmit} noValidate>
           
            <div className ="email">
              <label className='accountLabels' htmlFor="email"> Email</label>
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
               <button type="submit" >Log Into Account</button>
               <Link style={linkStyle}to ='/SignUp'>
               <small>Don't have an account?</small>
               </Link>
             </div>
             </form>
        </div>
      </div>
    )
      
      
    
      }
  }
  
export default LogIn
