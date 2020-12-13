import React from 'react';
import './ContentCards.css';
import ContentCardItem from './ContentCardItem';

//Seperate out content cards into contact, content cards containing links, and regular content cards only containing text
//Cards are similar - just deals with link formating issues 
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
              path='/'
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