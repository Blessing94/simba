import React, { Component } from 'react';
import { styled } from '@mui/system'; // Updated import for styled
import { TextField, Button } from '@mui/material';  // Updated imports
import { ThemeProvider } from '@mui/material/styles';

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
export class FormPersonalDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
      };
    
      back = e => {
        e.preventDefault();
        this.props.prevStep();
      };
    render() {
        const { values, handleChange } = this.props;
        return (
            <ThemeProvider>
           <React.Fragment>
         <h1> <light>Guardian's Info</light></h1>
            
            <TextField
              placeholder="Guardian's Full Name"
              label="Full Name"
              onChange={handleChange('guardianFullName')}
              defaultValue={values.guardianFullName}
              margin="normal"
            />

            <br />
            <TextField
              placeholder="Relationship with Student"
              label="Relationship"
              onChange={handleChange('relationship')}
              defaultValue={values.relationship}
              margin="normal"
            />

            <br />
            <TextField
              placeholder="Enter Your email"
              label="email"
              onChange={handleChange('email')}
              defaultValue={values.email}
              margin="normal"
            />
            <br />

            <TextField
              placeholder="Enter Your Phone Number"
              label="Phone Number"
              onChange={handleChange('phoneNumber')}
              defaultValue={values.phoneNumber}
              margin="normal"
            />
            <br />

            <BackButton
             color="primary"
             variant="contained"
              onClick={this.back}
            >Back</BackButton>

            <NextButton
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Continue</NextButton>
         
          </React.Fragment>
      </ThemeProvider>
        )
    }
}

export default FormPersonalDetails
