import React from 'react';


function ContentCardItem(props) {

  //If card item is the contact me card 
  if (props.Section === "Contact") {
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

//If the card item contains a link
if (props.hasLink === true) {
  return (
    <>
      <li className='cards__item2'>
        <div className='cards__item__link2'>
           <div className='cards__item__info2'>
            <p className='cards__item__text2' style={{ color: "black"}}><a href ={props.Description} style = {{ color: "black", textDecoration: "none" }}>{props.Description}</a></p>
          </div>
        </div>
      </li>
    </>
  );
}

//If the card item only contains text
else {
  return (
    <>
      <li className='cards__item2'>
        <div className='cards__item__link2'>
           <div className='cards__item__info2'>
            <p className='cards__item__text2'>{props.Description} </p>
          </div>      
        </div>
      </li>
    </>
  );
}

}

export default ContentCardItem;