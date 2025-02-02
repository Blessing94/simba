import React from 'react';
import './App.css';
import './homepage.css';
import HomePageContent from './components/HomePageContent';
import Nav from './Nav';
import Footer from './Footer';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import Jobs from './components/Jobs';
import Enrolment from './components/enrolment/Enrolment';
import Teachers from './components/Teachers';
import Campuses from './components/Campuses';
import Events from './components/Events';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
 
    return (
      <Router>
      <Nav />
      <div className='App'>
        <Routes>
          <Route path="/" element={<HomePageContent />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Enrolment" element={<Enrolment />} />
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="/Teachers" element={<Teachers />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/Jobs" element={<Jobs />} />
          <Route path="/Campuses" element={<Campuses />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}


  

export default App
