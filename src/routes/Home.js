import React from 'react';
// import { IoLocationOutline } from 'react-icons/io5';
// import { FaSearch } from "react-icons/fa";
import Hero from '../components/Hero';
import Discover from '../components/Discover';
import Cards from '../components/Cards';
import Popular from '../components/Popular';
import About from '../components/About';
import Explore from '../components/Explore';
import Footer from '../components/Footer';


function Home() {
  return (
    <div className="home-wrapper">
        <Hero />
        <Discover />
        <Cards />
        <Popular />
        <About />
        <Explore />
        <Footer />
    </div>
  )
}

export default Home;
