import React, { Component, useState } from 'react'
import Select from 'react-select'
import axios from 'axios';



const options = [
    { value: 'Science Teacher', label: 'Science Teacher' },
    { value: 'Gym Teacher', label: 'Gym Teacher' },
    { value: 'Support Services', label: 'PYP Teacher' }
  ]

export class Jobs extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
          Name: null,
          email: null,
          coverletter: null,
          resume: null,  
          option: null
    }}
    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value,});
  }
  handleselect = (option) =>{
    this.setState({option}, () =>
    console.log(`option selected`, this.state.option)
    );
  };
    handleSubmit = (event) => {
        event.preventDefault();
        const {Name, email, coverletter, resume, option } = this.state;
        const signup = {Name, email, coverletter, resume, option}
        alert('A form was submitted: ' + this.state);
        axios.post("http://localhost:5000/jobapplications", signup, { crossdomain: true }).then(response => {
          console.log(response)  
          console.log(
              `--SUBMITTING--
              Name: ${this.state.Name}
              coverletter: ${this.state.coverletter}
              Email: ${this.state.email}
              resume: ${this.state.resume}
              option: ${this.state.option.value}`
            ) 
          })
        }
  
    render() {
           const {option} = this.state;
        return (
            <div className="wrapper">
                 <div className="form-wrapper">
                <h1>Job Application</h1>
                <form onSubmit={this.handleSubmit}>
                <Select options={options} value={option} type = "text" name = "option" onChange={this.handleselect}/>
                <div className ="firstName">
                    <label  className='accountLabels'> Full Name</label>
                    <input placeholder = "Name" type = "text" id='accountsInput' name = "fullName" value={this.state.value} onChange={this.handleChange}></input>
                    </div>
                    <div className ="lastName">
                    <label  className='accountLabels' htmlFor="lastName"> cover letter</label>
                    <input placeholder = "Cover Letter" type = "text" id='accountsInput' name = "coverletter" value={this.state.value} onChange={this.handleChange}></input>
                    </div>
                    <div className ="email">
                    <label  className='accountLabels'> Email</label>
                    <input placeholder = "Email" type = "email" id='accountsInput' name = "email" value={this.state.value} onChange={this.handleChange}></input>
                    </div>
                    <div className ="password">
                    <label  className='accountLabels'> Attach CV</label>
                    <input  type = "file" name = "resume" value={this.state.value} onChange={this.handleChange}></input>
                    </div>
                    <div className="createAccount">
                    <button> Apply </button>
                    </div>
                    
                </form>
            </div>    
            </div>  
        )
        }
    }

export default Jobs;
    