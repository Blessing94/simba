import React, { useState }from 'react'
import './Account.css';
import './Navbar.css';
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom';
import SidebarData from './components/SidebarData';
import logo from './img/home.png';



function Nav() {
  const navStyle = {
      color: 'white' 
  };
        const [sidebar, setSidebar] = useState(false);
        const showSidebar = () => setSidebar(!sidebar);
        
        return (
<>
        <div className='navbar'>
        <div className='homeLogo'>
          <Link to='#' className='menu-bars'  onClick={showSidebar}>
         <p style={navStyle}> <AiOutlineMenu /></p>
          </Link>

<Link style={navStyle} to='/'>
          <img className = 'nav_logo' src = {logo} alt='Home' />
           <AiOutlineHome/> 
                    </Link>  
</div>
          
        

          <ul className = 'nav-Links'>
          <Link style={navStyle} to='/SignUp'>
                    <button className='signup'>Sign Up</button>
                    </Link>        
          </ul>
        </div>
        
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}> 
           
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
              <p style={navStyle}> <AiOutlineClose/></p>
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
