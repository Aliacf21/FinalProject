import React from 'react';
import './ResearchCards.css';
import ResearchCardItem from './ResearchCardItem';
import Icon1 from "../../images/IAT.png"
import Icon2 from "../../images/qatar.png"
import Icon3 from "../../images/arabic.png"
import Icon4 from "../../images/coffee.png"

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
              Description="Testing implicit gender attitudes in Pittsburgh and Qatar"

            />
            <ResearchCardItem
              src={Icon2}              
              path='/StemIAT'
              title = "Stem IAT"
              Description="Testing implict attitudes about sciene in Pittsburgh"
            />

            </ul>
            <ul className='cards__items'>
            <ResearchCardItem
              src={Icon3}
              path='/Test'
              title = "Programming"
              Description="Created test to look at implicit attidues in English and Arabic"
            />
            <ResearchCardItem
              src={Icon4}
              path='/ResearchProject'
              title = "Research Project"
              Description="Effects of visual coffee cues on cognitive preformance"
            />

            
          </ul>

        </div>
      </div>
    
    </div>
  );
}

export default ResearchCards;