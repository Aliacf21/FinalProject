
import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {

  if (props.Role === "") {
      return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
            <img
              className='cards__item__img'
              src={props.src}
              alt={props.alt}
            />
             
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.title}</h5>
          </div>
          <p style= {{ lineHeight: "150%", fontSize: "26px", marginRight: "10px"}} className='cards__item__text'>
          <br></br>Description: {props.Description}
          </p>

        </Link>
      </li>
    </>
  )


  }

  if (props.Role != "" && props.Team != "") {

  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
            <img
              className='cards__item__img'
              src={props.src}
              alt={props.alt}
            />
             
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.title}</h5>
          </div>
          <p style= {{ lineHeight: "150%", fontSize: "24px", marginRight: "10px"}} className='cards__item__text'>
          <br></br>Role: {props.Role} 
          <br></br>Tools: {props.Tools}
          <br></br>Team Members: {props.Team}
          <br></br>Description: {props.Description}
          </p>

        </Link>
      </li>
    </>
  )
}

else {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
            <img
              className='cards__item__img'
              src={props.src}
              alt={props.alt}
            />
             
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.title}</h5>
          </div>
          <p style= {{ lineHeight: "150%", fontSize: "24px", marginRight: "10px"}} className='cards__item__text'>
          <br></br>Role: {props.Role} 
          <br></br>Tools: {props.Tools}
          <br></br>Description: {props.Description}
          </p>

        </Link>
      </li>
    </>
  )
}

}


export default CardItem;