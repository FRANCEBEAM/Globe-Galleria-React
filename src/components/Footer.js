import React from 'react'
import { Link } from 'react-router-dom'
import { FaTypo3 } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import './Footer.css';

function Footer() {
  return (
    <footer className='footer-section'>
      <div className='footer-container'>
        <div className='footer-wrapper'>
            <div className='footer-row1'>

            
            <ul className='col1-items'>
            <li className='col1-item'>
              <div className='logo-gg'>
                <FaTypo3 size={30}/>
                <h1>Globe Galleria</h1>
              </div>
            </li>
            <li className='col1-item'>
                <p>Globe Galleria is a leading travel company that helps adventure seekers and curious travelers explore the world's most exciting destinations.</p>
            </li>
            </ul>

            <ul className='col2-items'>
                <li className='col2-item'>
                    <h1>Explore Our Destinations</h1>
                </li>
                <li className='col2-item'>
                    <Link className="item-link" to={'/'}>Paris</Link>
                </li>
                <li className='col2-item'>
                    <Link className="item-link" to={'/'}>Rome</Link>
                </li>
                <li className='col2-item'>
                    <Link className="item-link" to={'/'}>Sydney</Link>
                </li>
                <li className='col2-item'>
                    <Link className="item-link" to={'/'}>Tokyo</Link>
                </li>
                <li className='col2-item'>
                    <Link className="item-link" to={'/'}>London</Link>
                </li>
                <li className='col2-item'>
                    <Link className="item-link" to={'/'}>New York</Link>
                </li>
            </ul>

            <ul className='col3-items'>
                <li className='col3-item'>
                    <h1>Travel Resources</h1>
                </li>
                <li className='col3-item'>
                    <Link className="item-link" to={'/'}>About Us</Link>
                </li>
                <li className='col3-item'>
                    <Link className="item-link" to={'/'}>Contact Us</Link>
                </li>
                <li className='col3-item'>
                    <Link className="item-link" to={'/'}>FAQ</Link>
                </li>
                <li className='col3-item'>
                    <Link className="item-link" to={'/'}>Blog</Link>
                </li>
            </ul>

            <ul className='col4-items'>
                <li className='col4-item'>
                    <h1>Subscribe to Our Newsletter</h1>
                </li>
                <li>
                    <div className='email-form'>
                        <form>
                            <input className="email-field" placeholder='Email'/>
                            <button className='btn-sub'>Subscribe</button>
                        </form>
                    </div>
                    
                    
                </li>
            </ul>
          </div>
          <div className='footer-row2'>
            <div className='row2-items'>
                <smail>Copyright © 2023 Globe Galleria. All rights reserved.</smail>
                    <div className='socials'>
                        <Link to="/" className='social-link'>
                            <FaFacebookF className='social-icon' size={30}/>
                        </Link>

                        <Link to="/" className='social-link'>
                            <FaInstagram className='social-icon' size={30}/>
                        </Link>

                        <Link to="/" className='social-link'>
                            <FaTwitter className='social-icon' size={30}/>
                        </Link>

                        <Link to="/" className='social-link'>
                            <FaYoutube className='social-icon' size={30}/>
                        </Link>
                    </div>
            </div>
          </div>
        </div>
      </div>
      
    </footer>
  )
}

export default Footer