import React from 'react';
import './Explore.css';

function Explore() {
  return (
    <section className='explore-section'>
        <div className='explore-container'>
            <div className='left-explore'>
                <div className='explore-desc'>
                    <p>Travel to Your Dream Destinations with Ease.</p>
                    <h1>Explore the World: Your Next Adventure Awaits</h1>
                </div>
                <div className='explore-btn'>
                    <button className='btn-started'>Get started</button>
                </div>
            </div>
            <div className='right-explore'>
                <div className='wrap-rightexplore'>
                    <figure className='explore-fig'>
                        <img src='/images/img-9.jpg' />
                    </figure>
                    <figure className='explore-fig'>
                        <img src='/images/img-10.jpg' />
                    </figure>
                    <figure className='explore-fig'>
                        <img src='/images/img-11.jpg' />
                    </figure>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Explore