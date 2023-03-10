import React from 'react';
import { Link } from 'react-router-dom'
import { IoLocationSharp } from 'react-icons/io5'

function CardItem(props) {
  return (
    <li className='card-item'>
        <Link className='card-item-link'>
            <figure className='card-item-pic' data-category={props.loc}>
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
