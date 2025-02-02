import React, { Component } from 'react';
import { ThemeProvider } from '@mui/material/styles'; // Updated import

export class Success extends Component {
  

  render() {
    return (
      <ThemeProvider>
        <>
          
            <h1> Success </h1>
            <h1>Thank You For Your Submission</h1>
            <p>You will get an email with further instructions.</p>
         
        </>
      </ThemeProvider>
    );
  }
}

export default Success;