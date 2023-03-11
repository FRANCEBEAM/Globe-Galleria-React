import React from 'react'
import { IoCompassOutline } from 'react-icons/io5';
import { FaRegAddressBook } from 'react-icons/fa';
import { TiWeatherPartlySunny } from 'react-icons/ti'
import { FiLoader } from 'react-icons/fi'

import './About.css'

function About() {
  return (
    <div className='about-section'>
        <div className='about-container'>
            <div className='left-about'>
                <div className='about-img'>
                    
                </div>
            </div>
            <div className='right-about'>
              <div className='about-head'>
                <p>Providing you with the highest level of service and support.</p>
                <h1>loved by over million travellers</h1>
              </div>
              <div className='about-desc'>
                <p>Our team of experienced travel designers is dedicated to providing you with the highest level of service and support. From personalized itinerary planning to 24/7 on-trip support, we are committed to making your journey as seamless and stress-free as possible.</p>
              </div>
              <div className='about-function'>
                <div className='functonalities'>
                  <IoCompassOutline size={26}/> 
                  <p>Destination search</p>
                </div>
                <div className='functonalities'>
                  <FaRegAddressBook size={26}/> 
                  <p>Flight and hotel booking</p>
                </div>
                <div className='functonalities'>
                  <TiWeatherPartlySunny size={26}/> 
                  <p>Local weather forecast</p>
                </div>
                <div className='functonalities'>
                  <FiLoader size={26}/> 
                  <p>Real-time updates</p>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default About