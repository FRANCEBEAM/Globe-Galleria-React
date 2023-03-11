import React from 'react';
// import { IoLocationOutline } from 'react-icons/io5';
// import { FaSearch } from "react-icons/fa";
import Hero from '../components/Hero';
import Discover from '../components/Discover';
import Cards from '../components/Cards';
import Popular from '../components/Popular';


function Home() {
  return (
    <div className="home-wrapper">
        <Hero />
        <Discover />
        <Cards />
        <Popular />
    </div>
  )
}

export default Home;
