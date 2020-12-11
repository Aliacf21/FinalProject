
import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
            <img
              className='cards__item__img'
              src={props.src}
            />
             
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.title}</h5>
          </div>
          
          <p style= {{ lineHeight: "150%", fontSize: "26px"}} className='cards__item__text'><br></br>{props.Description}</p>
             
        </Link>
      </li>
    </>
  )
}

export default CardItem;