import React from 'react';
import { Link } from 'react-router-dom';

function ContentCardItem(props) {
  if (props.Section == "Contact") {
    const email = "mailto: " + props.Description
  return (
    <>
      <li className='cards__item2'>
        <div className='cards__item__link2'>
           <div className='cards__item__info2'>
            <p className='cards__item__text2' style={{ color: "black"}}><a href ={email} style = {{ color: "black", textDecoration: "none" }}>Email</a> | <a href={props.Link1} style = {{ color: "black", textDecoration: "none" }}>LinkedIn</a> | <a href={props.Link2} style = {{ color: "black", textDecoration: "none" }}>Github</a> </p>
          </div>

             
        </div>
      </li>
    </>
  );
}

else {
  return (
    <>
      <li className='cards__item2'>
        <div className='cards__item__link2'>
           <div className='cards__item__info2'>
            <h6 className='cards__item__text2'>{props.Description} </h6>
          </div>

             
        </div>
      </li>
    </>
  );
}

}

export default ContentCardItem;