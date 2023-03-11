import React from 'react';
import './Popular.css'
import PopularItem from './PopularItem'

function Popular() {
  return (
    <section className='popular-section'>
        <div className='popular-container'>
            <div className='head-content'>
                <h1>Most Popular Tours</h1>
                <p>Browse our destinations that you're looking for a relaxing beach vacation, an immersive cultural experience, or an adrenaline-pumping adventure, we've got you covered.</p>
                {/* <div className='linebreak'></div> */}
            </div>

            <div className='location-card'>
                <div className='location-wrapper'>
                    <PopularItem className="popular-item"
                        place="Brandenburg Gate"
                        placeName="Grand classical archway & city divide"
                        placeImg="./images/img-5.jpg"
                        placeDesc="Lorem ipsum dolor sit amet consectetur. Vitae velit ut turpis est. Vitae faucibus iaculis in habitant. Diam sit lectus tellus neque molestie convallis. Dolor sit ipsum ut quisque integer ac ut."
                        rate="4.5"
                        visit="(201, 310)"
                    />
                    <PopularItem 
                        place="La Sagrada Familia"
                        placeName="Gaudí-designed landmark church"
                        placeImg="./images/img-6.jpg"
                        placeDesc="Lorem ipsum dolor sit amet consectetur. Vitae velit ut turpis est. Vitae faucibus iaculis in habitant. Diam sit lectus tellus neque molestie convallis. Dolor sit ipsum ut quisque integer ac ut."
                        rate="4.7"
                        visit="(201, 311)"
                    />
                    <PopularItem 
                        place="Buckingham Palace"
                        placeName="Home of British monarch & State Rooms"
                        placeImg="./images/img-7.jpg"
                        placeDesc="Lorem ipsum dolor sit amet consectetur. Vitae velit ut turpis est. Vitae faucibus iaculis in habitant. Diam sit lectus tellus neque molestie convallis. Dolor sit ipsum ut quisque integer ac ut."
                        rate="4.6"
                        visit="(148, 489)"
                    />
                </div>
            </div>
        </div>

    <div className='button-wrapper'>
        <button className='btn-more'>Explore more</button>
    </div>

    </section>
  )
}

export default Popular