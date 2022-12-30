import React, { Component } from 'react';
import { styled } from '@material-ui/core/styles';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';

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
              onClick={this.continue}
            >Confirm </NextButton>
         
        </>
      </MuiThemeProvider>
        )
    }
}

export default Confirm
