
import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>

            <img
              className='cards__item__img'
              alt='Travel Image'
              src={props.src}
            />
             
  
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.title}</h5>

          </div>
          <br></br>


      <h3 className='cards__item__text'><br></br><br></br>{props.Description}</h3>
             
        </Link>
      </li>
    </>
  );
}

export default CardItem;