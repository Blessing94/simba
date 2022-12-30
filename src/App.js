import React, { Component } from 'react';
import './App.css';
import './homepage.css';
import Nav from './Nav';
import Footer from './Footer';
import HomePageContent from './components/HomePageContent';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import Jobs from './components/Jobs';
import Enrolment from './components/Enrolment';
import Teachers from './components/Teachers';
import Compuses from './components/Compuses';
import Events from './components/Events';
import { BrowserRouter as Router, Switch, Route } from  'react-router-dom';



function App() {
 
    return (
      <Router>
      <Nav />
     
      <div className='App'>
      
      <Switch>
        <Route path="/" exact component={HomePageContent} />
        <Route path="/SignUp" component={SignUp} />
        <Route path="/Enrolment" component={Enrolment} />
        <Route path="/LogIn" component={LogIn} />
        <Route path="/Teachers" component={Teachers} />
        <Route path="/Events" component={Events} />
        <Route path="/Jobs" component={Jobs} />
        <Route path="/Compuses" component={Compuses} />
        
     </Switch>
    
     </div>
     <Footer />
      </Router> 
    );
  }


  

export default App
