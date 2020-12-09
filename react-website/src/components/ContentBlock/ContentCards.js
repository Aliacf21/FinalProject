import React from 'react';
import './ContentCards.css';
import ContentCardItem from './ContentCardItem';
import Icon1 from "../../images/IAT.png"
import Icon2 from "../../images/qatar.png"
import Icon3 from "../../images/arabic.png"
import Icon4 from "../../images/coffee.png"

function ContentCards({section, description}) {
  return (

    <div className='cards2'>
      <div className='cards__container2'>
        <div className='cards__wrapper2'>
          <ul className='cards__items2'>
            <ContentCardItem
              
              Description={ description }

            />
       
            
          </ul>

        </div>
      </div>
    
    </div>
  );
}

export default ContentCards;