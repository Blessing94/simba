import React, { Component } from 'react';
import { styled } from '@mui/system';  // Updated import for styled
import { List, ListItem, ListItemText } from '@mui/material';  // Updated import
import Button from '@mui/material/Button';  // Updated import
import axios from 'axios';

const BackButton = styled(Button)({
    background: '#57c4e5',
    border: '1px solid black',
    borderRadius: 3,
    color: 'white',
    height: 48,
    padding: '0 30px',
    margin: '20px 5px',
  });
  const NextButton = styled(Button)({
    background: '#060b26',
    border: 0,
    borderRadius: 3,
    color: 'white',
    height: 48,
    padding: '0 30px',
    margin: '20px 5px',
  });

export class Confirm extends Component {
  constructor(props) {
    super(props);
this.state = {
  fullName: this.props.values.fullName,
  dob: this.props.values.dob, 
  city: this.props.values.city, 
  address: this.props.values.address, 
  guardianFullName: this.props.values.guardianFullName, 
  relationship: this.props.values.relationship, 
  email: this.props.values.email, 
  phoneNumber: this.props.values.phoneNumber
}
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const {fullName, dob, city, address, guardianFullName, relationship, email, phoneNumber} = this.state;
        const enroll = {fullName, dob, city, address, guardianFullName, relationship, email, phoneNumber}
    alert('A form was submitted: ' + this.state);
    axios.post("http://localhost:5000/enrollment", enroll, { crossdomain: true }).then(response => {
      console.log(response)  
      console.log(
          `--SUBMITTING--
          Name: ${this.state.fullName}
          coverletter: ${this.state.dob}
          Email: ${this.state.email}
          resume: ${this.state.address}
          option: ${this.state.city}
          Email: ${this.state.relationship}
          resume: ${this.state.phoneNumber}
          `
        ) 
      }
      )
    }
  
      continue = e => {
        e.preventDefault();
        // PROCESS FORM //
        this.props.nextStep();
      };
    
      back = e => {
        e.preventDefault();
        this.props.prevStep();
      };
    render() {
        const {
            values: { fullName, dob, city, address, guardianFullName, relationship, email, phoneNumber  }
          } = this.props;
        return (
            <MuiThemeProvider >
        <>
            <List>
              <ListItem>
                <ListItemText primary="Full Name" secondary={fullName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Date Of Birth" secondary={dob} />
              </ListItem>
              <ListItem>
                <ListItemText primary="City" secondary={city} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Address" secondary={address} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Guardian's Full Name" secondary={guardianFullName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Relationship with Student" secondary={relationship} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Email" secondary={email} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Phone Number" secondary={phoneNumber} margin="normal"/>
              </ListItem>
            </List>
            <br />
            <BackButton
              color="secondary"
              variant="contained"
              onClick={this.back}
            >Back</BackButton>

            <NextButton
              color="primary"
              variant="contained"
              onClick={this.handleSubmit}
              onSubmit={this.handleSubmit}
            >Confirm </NextButton>
         
        </>
      </MuiThemeProvider>
        )
    }
}

export default Confirm
