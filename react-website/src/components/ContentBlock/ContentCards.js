import React from 'react';
import './ContentCards.css';
import ContentCardItem from './ContentCardItem';
import Icon1 from "../../images/IAT.png"
import Icon2 from "../../images/qatar.png"
import Icon3 from "../../images/arabic.png"
import Icon4 from "../../images/coffee.png"

function ContentCards({section, description, link1, link2, hasLink}) {
  if (section === "Contact") {
  return (
    <div className='cards2'>
      <div className='cards__container2'>
        <div className='cards__wrapper2'>
          <ul className='cards__items2'>
            <ContentCardItem
              Section = { section }
              Description={ description }
              Link1 ={ link1 }
              Link2 ={ link2 }
            />
            
          </ul>

        </div>
      </div>
    
    </div>
  );
}

if (hasLink === true) {
  return (
    <div className='cards2'>
      <div className='cards__container2'>
        <div className='cards__wrapper2'>
          <ul className='cards__items2'>
            <ContentCardItem
              Section = { section }
              hasLink = { hasLink }
              Description={ description }
            />
            
          </ul>

        </div>
      </div>
    
    </div>
  );
}


 else {

  return (
    <div className='cards2'>
      <div className='cards__container2'>
        <div className='cards__wrapper2'>
          <ul className='cards__items2'>
            <ContentCardItem
              
              Section = { section }
              Description={ description }
              

            />
            
          </ul>

        </div>
      </div>
    
    </div>
  );
}

 }


export default ContentCards;