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



function Cards({section, role, tools, team, description, alt, myTitle}) {
  if (section === "Overview" && myTitle==="examOptimum") {
    return (
      <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={Icon1}
              title="ExamOptimum"
              Role = {role}
              Tools = {tools}
              Team={team}
              Description= { description }
              alt={alt}
            />
          </ul>
        </div>
      </div>  
    </div>
      )
  }

  if (section === "Overview" && myTitle==="15112 Term Project") {
    return (
      <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={Icon2}
              title="15112 Term Project"
              Role = {role}
              Tools = {tools}
              Team={team}
              Description= { description }
              alt={alt}       
              />
          </ul>
        </div>
      </div>    
    </div>
      )
  }

  if (section === "Overview" && myTitle==="bake") {
    return (
      <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={Icon3}
              title="Bun Bun Bake Shop"
              Role = {role}
              Tools = {tools}
              Team={team}
              Description= { description }
              alt={alt}     
              />
          </ul>
        </div>
      </div>
    </div>
      )
  }

  if (section === "Overview" && myTitle==="shuttle") {
    return (

      <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={Icon4}
              title="CMU Airport Transportation"
              Role = {role}
              Tools = {tools}
              Team={team}
              Description= { description }
              alt={alt}     
            />
          </ul>
        </div>
      </div>
    </div>
      )
  }

   if (section === "Overview" && myTitle==="Test") {
    return (

      <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={Icon5}
              title="Programming the English and Arabic version of the IAT"
              Role = {role}
              Tools = {tools}
              Team={team}
              Description= { description }
              alt={alt}
              />
          </ul>
        </div>
      </div>
    </div>
      )
  }

   if (section === "Overview" && myTitle==="coffee") {
    return (
      <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={Icon6}
              title="Research Project to Study the Effects of Coffe Visual cue on Attention"
              Role = {role}
              Tools = {tools}
              Team={team}
              Description= { description }
              alt={alt}            
            />
          </ul>
        </div>
      </div>
    </div>
      )
  }

   if (section === "Overview" && myTitle==="IAT") {
    return (
      <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={Icon7}
              title="Implicit Association Task"
              Role = {role}
              Tools = {tools}
              Team={team}
              Description= { description }
              alt={alt}  
            />
          </ul>
        </div>
      </div>
    </div>
      )
  }

   if (section === "Overview" && myTitle==="StemIAT") {
    return (

      <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={Icon8}
              title="Implicit associations between Liberal Arts/STEM "
              Role = {role}
              Tools = {tools}
              Team={team}
              Description= { description }
              alt={alt}   
            />
          </ul>
        </div>
      </div>
    </div>
      )
  }

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
