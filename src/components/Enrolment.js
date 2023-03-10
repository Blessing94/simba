import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';

export class Enrolment extends Component {
    state = {
        step: 1,
        fullName: '',
        dob: '',
        city: '',
        address: '',
        guardianFullName: '',
        relationship: '',
        email: '',
        phoneNumber: '',
    }
    // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };
  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };
  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };
    render() {
        const { step } = this.state;
        const { fullName, dob, city, address, guardianFullName, relationship, email, phoneNumber} = this.state;
        const values = { fullName, dob, city, address, guardianFullName, relationship, email, phoneNumber };
       
        switch (step) {
            case 1:
              return (
                <FormUserDetails
                  nextStep={this.nextStep}
                  handleChange={this.handleChange}
                  values={values}
                />
              );
              case 2:
        return (
          <FormPersonalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
        case 3:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
        case 4:
        return <Success />;
      default:
        
    }
  }
}
 
export default Enrolment
