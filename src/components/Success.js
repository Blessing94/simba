import React, { Component } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';

export class Success extends Component {
  

  render() {
    return (
      <MuiThemeProvider>
        <>
          
            <h1> Success </h1>
            <h1>Thank You For Your Submission</h1>
            <p>You will get an email with further instructions.</p>
         
        </>
      </MuiThemeProvider>
    );
  }
}

export default Success;