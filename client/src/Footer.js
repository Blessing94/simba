import React, { Component } from 'react'
import './Footer.css';
import { FiPhone } from "react-icons/fi";
import { AiOutlineMail, AiOutlineTwitter, AiOutlineInstagram, AiOutlineYoutube, AiOutlineFacebook } from "react-icons/ai";
import { Link } from 'react-router-dom';

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
                    <h2> Quick Links</h2>
                
                    <ul>
                        <li> <Link to = '/Events'>Events</Link> </li>
                        <li> <Link to = '/Campuses'>Compuses</Link></li>
                        <li> <Link to = '/Teachers'>Teachers</Link></li>
                        <li> <Link to = '/Jobs'>Jobs</Link></li>
                        <li> <Link to = '/Enrolment'>Enrolment</Link></li>
                    </ul>
                </div>

                
              </div>

            <div className='copyright'><p>&copy; Simba Academy 2023 | Developed by Blessing Mutero</p></div>
            </div>  
            
        ) 
    }
}

export default Footer
