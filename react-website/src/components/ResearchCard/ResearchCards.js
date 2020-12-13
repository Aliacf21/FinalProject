import React from 'react';
import './ResearchCards.css';
import ResearchCardItem from './ResearchCardItem';
import Icon1 from "../../images/IAT.png"
import Icon2 from "../../images/qatar.png"
import Icon3 from "../../images/arabic.png"
import Icon4 from "../../images/coffee.png"


//Component which returns the research cards -> calls ResearchCardItems
function ResearchCards({section}) {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <ResearchCardItem
              src={Icon1}
              path='/IAT'
              title = "IAT"
              Description="Research project to test implicit gender attitudes in United States, Qatar, Saudi Arabia"

            />
            <ResearchCardItem
              src={Icon2}              
              path='/StemIAT'
              title = "Stem IAT"
              Description="Research project to test gender associations with science in United States, Qatar, Saudi Arabia"
            />

            </ul>
            <ul className='cards__items'>
            <ResearchCardItem
              src={Icon3}
              path='/Test'
              title = "Programming"
              Description="Refactored code to support the Implicit Association task in both Arabic and English"
            />
            <ResearchCardItem
              src={Icon4}
              path='/ResearchProject'
              title = "Research Project"
              Description="Effects of visual coffee cues on cognitive performance "
            />

            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ResearchCards;