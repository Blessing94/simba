import React, { Component } from 'react'
import './Footer.css';
import { FiPhone } from "react-icons/fi";
import { BsEnvelopeOpen } from "react-icons/bs";
import { AiOutlineMail, AiOutlineTwitter, AiOutlineInstagram, AiOutlineYoutube, AiOutlineFacebook } from "react-icons/ai";

export class Footer extends Component {
    constructor(props) {
       super(props);
        this.state = {name: ''};
        this.state = {email: ''};
        this.state = {message: ''}
           
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this); 

      }

    handleChange(event) {
        this.setState({name: event.target.value});
        this.setState({email: event.target.value});
        this.setState({messege: event.target.value});
    }

    handleSubmit(event) {
        alert('We will get back to you soon ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div className='footerCover'>
              <div className='footerContent'>
                <div className ='footerAbout'>
                    <h2 className='footerText'>READY TO BE<span>INSPIRED?</span></h2>     
                    <div className='socials'>
                      <a href='https//www.facebook.com'><p> <AiOutlineFacebook className='facebookIcon'/> </p></a>
                      <a href='https//www.facebook.com'><p> <AiOutlineYoutube className='facebookIcon'/> </p></a>
                      <a href='https//www.facebook.com'><p> <AiOutlineInstagram className='facebookIcon'/> </p></a>
                      <a href='https//www.facebook.com'><p> <AiOutlineTwitter className='facebookIcon'/> </p></a>
                    </div>               
                    <div className='footerContact'>
                      <h3> SIMBA ACEDEMY ENGLISH SCHOOL</h3>
                      <p>555 Tingyue Xi Road, Wumian Town, Qing Pu District, Shanghai, PRC, 701555   |   TEL: +86 55 555 555</p>
                    <p> <AiOutlineMail className='emailIcon'/> &nbsp; info@SimbaEnglish.com</p>
                    <p> <FiPhone className='phoneIcon'/> &nbsp; 123-456-789-10</p>
                    </div>
                   
                </div>

                <div className='footerLinks'>
                    <h2> Quick <span>Links</span></h2>
                
                    <ul>
                        <li>Events</li>
                        <li>Campuses</li>
                        <li>Teachers</li>
                        <li>Jobs</li>
                        <li>Account</li>
                        <li>Enrolment</li>
                    </ul>
                </div>

                <div className='footerContactForm'>
                    <h2> Contact <span>Us</span></h2>
                   <div className='contactCover'>
                    
                    <form className='footerForm' onSubmit={this.handleSubmit}>
                      <div>
                      <label className='nameLabel'>
                      <input className='nameInput' type="text" value={this.state.value} onChange={this.handleChange} placeholder='FIRST NAME'/>
                      </label>
                      </div>
                      <div>
                      <label className='lastNameLabel'>
                       <textarea className='massegeInput' type="text" value={this.state.value} onChange={this.handleChange} placeholder='LAST NAME'/>
                       </label>
                       </div>
                      <div>
                      <label className='emailLabel'>
                      <input className='emailInput' type="email" value={this.state.value} onChange={this.handleChange} placeholder='EMAIL'/>
                      </label>
                      </div>
                       <button className='footerSubmitBtn' type="submit" value="Submit" > Send </button>
                      </form>
                </div>
                </div>
              </div>
            <div className='copyright'><p>&copy; Simba English 2020 | Designed by Bless Inc</p></div>
            </div>  
            
        ) 
    }
}

export default Footer
