import React, { useState }from 'react'
import './Account.css';
import './Navbar.css';
import { FaBars } from "react-icons/fa";
import { GiCancel } from "react-icons/gi";
import { Link } from 'react-router-dom';
import SidebarData from './components/SidebarData';



function Nav() {
  const navStyle = {
      color: 'white' 
  };
        const [sidebar, setSidebar] = useState(false);
        const showSidebar = () => setSidebar(!sidebar);
        
        return (
<>
        <div className='navbar'>
          <Link to='#' className='menu-bars'  onClick={showSidebar}>
         <p style={navStyle}> <FaBars /></p>
          </Link>
          <ul className = 'nav-Links'>
          <Link style={navStyle} to='/'>
                    <button className='home'>Home</button>
                   
                    </Link>
          <Link style={navStyle} to='/SignUp'>
                    <button className='signup' >Sign Up</button>
                    </Link>        
          </ul>
        </div>
        
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}> 
           
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
              <p style={navStyle}> <GiCancel/></p>
            </Link>
            </li>
            
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        
    </>
        )
    }
  

export default Nav
