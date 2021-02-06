import React, { Component } from 'react'
import { FiPhone } from "react-icons/fi";
import { BsEnvelopeOpen } from "react-icons/bs";
import { AiOutlineMail, AiOutlineTwitter, AiOutlineInstagram, AiOutlineYoutube, AiOutlineFacebook } from "react-icons/ai";

export class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            massege: ''        
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handlemassegeChange = (event) => {
        this.setState({
            massege: event.target.value
        })
    }
    handleChange(event) {
        this.setState({value: event.target.value});
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
                    <h2 className='footerText'>Simba <span>English</span></h2>
                    <p> Simba English is a world class english training center that ensures that the education of kids is of hisghest standards</p>
                    <div className='footerContact'>
                    <p> <FiPhone className='phoneIcon'/> &nbsp; 123-456-789-10</p>
                    <p> <AiOutlineMail className='emailIcon'/> &nbsp; info@SimbaEnglish.com</p>
                    </div>
                    <div className='socials'>
                      <a href='https//www.facebook.com'><p> <AiOutlineFacebook className='facebookIcon'/> </p></a>
                      <a href='https//www.facebook.com'><p> <AiOutlineYoutube className='facebookIcon'/> </p></a>
                      <a href='https//www.facebook.com'><p> <AiOutlineInstagram className='facebookIcon'/> </p></a>
                      <a href='https//www.facebook.com'><p> <AiOutlineTwitter className='facebookIcon'/> </p></a>
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
                       
                      <input className='nameInput' type="text" value={this.state.value} onChange={this.handleChange} placeholder='Write your Name here...!'/>
                      </label>
                      </div>
                      <div>
                      <label className='massegeLabel'>
                       
                       <textarea className='massegeInput' type="text" value={this.state.massege} onChange={this.handlemassegeChange} placeholder='Write your massege here...!'/>
                       </label>
                      </div>
                       <button className='footerSubmitBtn' type="submit" value="Submit" > <BsEnvelopeOpen className='submitIcon' /> Send </button>
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
