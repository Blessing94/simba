import React, { Component } from 'react';
import './app.css';
import './homepage.css';
import Nav from './Nav';
import Footer from './Footer';
import HomePageContent from './components/HomePageContent';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import Reports from './components/Reports';
import Products from './components/Products';
import Team from './components/Team';
import Messages from './components/Messages';
import Support from './components/Support';
import { BrowserRouter as Router, Switch, Route } from  'react-router-dom';



function App() {
 
    return (
      
      <Router>
      <div className='App'>
      <Nav />
      
      <Switch>
        <Route path="/" exact component={HomePageContent} />
        <Route path="/SignUp" component={SignUp} />
        <Route path="/LogIn" component={LogIn} />
        <Route path="/Reports" component={Reports} />
        <Route path="/Team" component={Team} />
        <Route path="/Products" component={Products} />
        <Route path="/Messages" component={Messages} />
        <Route path="/Support" component={Support} />
     </Switch>
   
     <Footer />
     </div>
     </Router>
      
    );
  }


  

export default App
