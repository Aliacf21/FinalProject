import React from 'react';
import { Link } from 'react-router-dom';

//Returns a research card item. Research card items are slightly smaller than project cards
function ResearchCardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link1' to={props.path}>
            <img
              className='cards__item__img'
              alt='Travel Image'
              src={props.src}
            />
           <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.title}</h5>
          </div>
          <br></br>
           <p style= {{ lineHeight: "150%", fontSize: "26px", marginRight: "10px"}} className='cards__item__text'><br></br>{props.Description}</p> 
        </Link>
      </li>
    </>
  );
}

export default ResearchCardItem;