
import React from 'react';
import { Link } from 'react-router-dom';

function ResearchCardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>

            <img
              className='cards__item__img'
              alt='Travel Image'
              src={props.src}
            />
              <div class="top-leftTitle">{props.title}</div>
             <div class="top-leftDescription">{props.Description}</div>
  
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default ResearchCardItem;