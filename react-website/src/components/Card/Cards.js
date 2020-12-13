import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import Icon1 from "../../images/examOptimum.png"
import Icon2 from "../../images/15112.png"
import Icon3 from "../../images/bake.png"
import Icon4 from "../../images/moorewood.png"

import Icon5 from "../../images/arabic.png"
import Icon6 from "../../images/coffee.png"
import Icon7 from "../../images/IAT.png"
import Icon8 from "../../images/qatar.png"



function Cards({section, role, tools, team, description, alt, myTitle, title}) {

  //Image cannot be directly linked and have to be imported in. 
  //Dictory to look up title and icon
  const x = {
  "examOptimum" : Icon1,
  "15112 Term Project" : Icon2,
  "bake" : Icon3,
  "shuttle" : Icon4,
  "Test" : Icon5,
  "coffee" : Icon6,
  "IAT" : Icon7,
  "StemIAT" : Icon8,

}

const y = {
  "examOptimum" : "/examOptimum",
  "15112 Term Project" : '/15112',
  "bake" : '/BunBunBakeShop',
  "shuttle" : '/Shuttle',
  "Test" : '/Test',
  "coffee" : '/ResearchProject',
  "IAT" : '/IAT',
  "StemIAT" : "/StemIAT"

}
  //If the card is an Overview section -> only return one card
  if (section === "Overview") {
    return (
      <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={ x[myTitle]}
              title= {title}
              Role = {role}
              Tools = {tools}
              Team={team}
              Description= { description }
              alt={alt}
              path= {y[myTitle]}
            />
          </ul>
        </div>
      </div>  
    </div>
      )
  }
  

  //If the card is the project section -> return the four project cards
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={Icon1}
              path='/examOptimum'
              title="ExamOptimum"
              Role = ""
              Description="Web application to help Carnegie Mellon Faculty find their optimized exam date based upon the student enrollment in their course."
            />
            <CardItem
              src={Icon2}
              Role = ""
              title='15112 Term Project'
              Description="Python project to help children learn to count which uses machine learning to recognize digits drawn using the interface"
              path='/15112'
            />
          </ul>

           <ul className='cards__items'>
            <CardItem
              src={Icon3}
              path='/BunBunBakeShop'
              Role = ""
              title="Bun Bun Bake Shop"
              Description="Front-end project to design, prototype and program a react based application for a small bakery"
            />
            <CardItem
              src={Icon4}
              Role = ""
              title="CMU Airport Transportation"              
              Description='User-research project to develop solution to CMU airport transportation problem'
              path='/Shuttle'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
