import React from 'react';
import { Link } from 'react-router-dom'
import { IoLocationSharp } from 'react-icons/io5'

function CardItem(props) {
  return (
    <li className='card-item'>
        <Link className='card-item-link'>
          <div className='data-category'>
              <IoLocationSharp className='loc-icon' size={20} /> {props.loc}
          </div>
            <figure className='card-item-pic'>
                <img src={props.src} alt="" />
            </figure>
            <div className='card-text-wrapper'>
                <h1>{props.dest}</h1>
                <p>{props.desc}</p>
               
            </div>
        </Link>
    </li>
  )
}

export default CardItem;
