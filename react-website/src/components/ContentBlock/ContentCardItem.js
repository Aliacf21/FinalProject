import React from 'react';
import { Link } from 'react-router-dom';

function ContentCardItem(props) {
  return (
    <>
      <li className='cards__item2'>
        <div className='cards__item__link2'>

          
           <div className='cards__item__info2'>
            <h6 className='cards__item__text2'>{props.Description}</h6>
          </div>

             
        </div>
      </li>
    </>
  );
}

export default ContentCardItem;