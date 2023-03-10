import React from 'react';
import CardItem from './CardItem';
import './Cards.css'
import { IoLocationSharp } from 'react-icons/io5'




function Cards() {
  return (
    <div className='card-container'>
        <div className="card-wrapper">
            <ul className='card-items'>
                <CardItem 
                    loc='Paris, France'
                    src='images/img-1.jpg'
                    dest='Europe'
                    desc='With its iconic landmarks, romantic ambiance, and rich history and culture, Paris is a must-visit destination for travelers from around the world.'
                />
                <CardItem 
                    loc='Sydney, Australia'
                    src='images/img-2.jpg'
                    dest='Australia'
                    desc='One of the most famous landmarks in Sydney is the Sydney Opera House, with its iconic sails that are recognized around the world.'
                />
                <CardItem 
                    loc='Tokyo, Japan'
                    src='images/img-3.jpg'
                    dest='Japan'
                    desc="A towering structure that offers breathtaking views of the city. The iconic landmark that showcases the country's rich history and culture."
                />
                <CardItem 
                    loc='São Paulo, Brazil'
                    src='images/img-4.jpg'
                    dest='South America'
                    desc="São Paulo is also known for its vibrant nightlife and music scene, with countless bars, clubs, and live music venues throughout the city."
                />
            </ul>
        </div>
    </div>
  )
}

export default Cards;
