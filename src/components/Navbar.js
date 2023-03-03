import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import "./Navbar.css";
import { FaArchway } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";


function Navbar() {
  
  const [click, setClick] = useState(false)

  const handleClick = () => setClick (!click)
  const closeMobileMenu = () =>setClick(false)

  return (
    <>
    <IconContext.Provider value={{ color: '#fff'}}>

    </IconContext.Provider>
      <nav className='navbar'>
        <div className='navbar-container container'>
            <Link to ="/" className='navbar-logo'>
                <FaArchway className='navbar-icon' onClick ={closeMobileMenu}/>
                Globe Galleria
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li className='nav-item'>
                   <NavLink to='/home' className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")} onclick={closeMobileMenu}>
                        Home
                   </NavLink>
                </li>
                <li className='nav-item'>
                   <NavLink to='/destinations' className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")} onclick={closeMobileMenu}>
                        Destinations
                   </NavLink>
                </li>
                <li className='nav-item'>
                   <NavLink to='/toursActivities' className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")} onclick={closeMobileMenu}>
                        Tours & Activities
                   </NavLink>
                </li>
                <li className='nav-item'>
                   <NavLink to='/about' className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")} onclick={closeMobileMenu}>
                        About
                   </NavLink>
                </li>
                <li className='nav-item'>
                   <NavLink to='/contact' className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")} onclick={closeMobileMenu}>
                        Contact Us
                   </NavLink>
                </li>

                <li className='nav-item'>
                   <NavLink to='/contact' className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")} onclick={closeMobileMenu}>
                   <div className='cta-container'>
                        <Link to='' className='booknow-btn'>
                            Book now
                        </Link>
                    </div>
                   </NavLink>
                </li>

        
            </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
