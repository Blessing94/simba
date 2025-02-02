import React, { Component } from 'react';
import { styled } from '@mui/system'; // Updated import for styled
import { TextField, Button } from '@mui/material';  // Updated imports
import { ThemeProvider } from '@mui/material/styles'; // Updated import

const NextButton = styled(Button)({
    background: '#060b26',
    border: 0,
    borderRadius: 3,
    color: 'white',
    height: 48,
    padding: '0 30px',
    margin: '20px 5px',
    
  });

export class FormUserDetails extends Component {
   
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
      };

      
    render() {
        const { values, handleChange } = this.props;
        return (
            <ThemeProvider>
        <>
        <h1> <light>Applicant's Infor</light></h1>
            <TextField
              placeholder="Student's Full Name"
              label="Full Name"
              onChange={handleChange('fullName')}
              defaultValue={values.fullName}
              margin="normal"
              />
            
            <br />
            <TextField
              placeholder="DD-MM-YY"
              label="Date Of Birth"
              onChange={handleChange('dob')}
              defaultValue={values.dob}
              margin="normal"
              />
            
            <br />
            <TextField
              placeholder="Current City"
              label="City"
              onChange={handleChange('city')}
              defaultValue={values.city}
              margin="normal"
              />
           
            <br />
            <TextField
              placeholder="Current Address"
              label="Address"
              onChange={handleChange('address')}
              defaultValue={values.address}
              margin="normal"
              />
           
            <br />
            <NextButton
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Continue</NextButton>
        </>
      </ThemeProvider>
                
        )
    }
}

export default FormUserDetails
