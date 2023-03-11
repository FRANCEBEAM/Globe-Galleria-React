import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import "./Navbar.css";
import { FaTypo3 } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";


function Navbar() {
  
  const [click, setClick] = useState(false)

  const handleClick = () => setClick (!click)
  const closeMobileMenu = () =>setClick(false)

  return (
    <>
    <IconContext.Provider value={{ color: '#fff'}}>
      <nav className='navbar'>
        <div className='navbar-container container'>
            <Link to ="/" className='navbar-logo' onClick ={closeMobileMenu}>
                <FaTypo3 className='navbar-icon' size={32}/>
                Globe Galleria
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li className='nav-item' onClick ={closeMobileMenu}>
                   <NavLink to='/' className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")}>
                        Home
                   </NavLink>
                </li>
                <li className='nav-item' onClick ={closeMobileMenu}>
                   <NavLink to='/destinations' className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")}>
                        Destinations
                   </NavLink>
                </li>
                <li className='nav-item' onClick ={closeMobileMenu}>
                   <NavLink to='/toursActivities' className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")}>
                        Tours & Activities
                   </NavLink>
                </li>
                <li className='nav-item' onClick ={closeMobileMenu}>
                   <NavLink to='/about' className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")}>
                        About
                   </NavLink>
                </li>
                <li className='nav-item' onClick ={closeMobileMenu}>
                   <NavLink to='/contact' className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")}>
                        Contact Us
                   </NavLink>
                </li>

                <div className='cta-container'>
                  <li className='nav-item' onClick ={closeMobileMenu}>
                     <NavLink to='/contact' className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")}>
                           Sign in
                     </NavLink>
                  </li>

                  <li className='nav-item' onClick ={closeMobileMenu}>
                     <NavLink to='/contact' className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")}>
                     <div className='cta'>
                           <Link to='' className='booknow-btn'>
                              Book now
                           </Link>
                     </div>
                     </NavLink>
                  </li>
               </div>
        
            </ul>
        </div>
      </nav>
    </IconContext.Provider>
    </>
  )
}

export default Navbar
