import React from 'react';
import './Hero.css';
import { IoLocationOutline } from 'react-icons/io5';
import { FaSearch } from "react-icons/fa";

function Hero() {
  return (
  <section className='home-section'>
    <div className='home-container'>
      <div className='hero-content'>
        <h1 className='title'>WELCOME TO GLOBE GALLERIA, YOUR PASSPORT TO ADVENTURE!</h1>
        <p className='sub-title'>
        Are you dreaming of your next adventure? Let us help you plan the trip of a lifetime with our expert travel services. We believe that every journey is unique and should be tailored to your individual needs and preferences.  
        </p>
      </div>
      {/* <h1 className='title'>WELCOME TO GLOBE GALLERIA, YOUR PASSPORT TO ADVENTURE!</h1>
      <p className='sub-title'>
      Are you dreaming of your next adventure? Let us help you plan the trip of a lifetime with our expert travel services. We believe that every journey is unique and should be tailored to your individual needs and preferences.  
      </p> */}

      <div className='search-field'>
        <form action=''>
          <IoLocationOutline className='location-logo'/>
          <input placeholder=' What are you looking for?' />
          <button className='btn-search' type="button"><FaSearch className='search-icon'/> Search</button>
        </form>
      </div>
    </div>
  </section>
  )
}

export default Hero
