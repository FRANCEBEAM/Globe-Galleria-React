import React from 'react';
import './PopularItem.css'
import {Link} from 'react-router-dom'
import { FaStar } from 'react-icons/fa'


function PopularItem(props) {
  return (
    <div className='location-item-container'>
    <Link className='location-item'>
        <div className='location-left'>
          <div className='head-location'>
              <h1>{props.place}</h1>
              <p>{props.placeName}</p>
          </div>
        </div>

        <div className='location-right'>
          <div className='content-location'>
            <div className='desc-location'>
              <p>{props.placeDesc}</p>
            <div className='rating-location'>
              <p className='rate'>{props.rate}</p>
                <div className='stars-review'>
                  <FaStar className='star-icon' />
                  <FaStar className='star-icon' />
                  <FaStar className='star-icon' />
                  <FaStar className='star-icon' />
                  <FaStar className='star-icon' />
                </div>
              <p className='visit'>{props.visit}</p>
            </div>
            </div>
          </div>
          <figure className='map-place'>
                <img src={props.placeImg} alt="" />
             </figure>
        </div>
          
          {/* <div className='linebreak'></div> */}
    </Link>
    </div>
  )
}

export default PopularItem;