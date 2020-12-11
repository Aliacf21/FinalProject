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





function Cards({section, myTitle}) {


  if (section === "Overview" && myTitle==="examOptimum") {
    return (

      <div className='cards'>
      <div className='cards__container'>

        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={Icon1}
              title="ExamOptimum"
              Description="Project to help proffesors optimizing their exam scheduling for Carnegie Mellon University"
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
              title="ExamOptimum"
              Description="Project to help proffesors optimizing their exam scheduling for Carnegie Mellon University"
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
              title="ExamOptimum"
              Description="Project to help proffesors optimizing their exam scheduling for Carnegie Mellon University"
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
              title="ExamOptimum"
              Description="Project to help proffesors optimizing their exam scheduling for Carnegie Mellon University"
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
              title="ExamOptimum"
              Description="Project to help proffesors optimizing their exam scheduling for Carnegie Mellon University"
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
              title="ExamOptimum"
              Description="Project to help proffesors optimizing their exam scheduling for Carnegie Mellon University"
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
              title="ExamOptimum"
              Description="Project to help proffesors optimizing their exam scheduling for Carnegie Mellon University"
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
              title="ExamOptimum"
              Description="Project to help proffesors optimizing their exam scheduling for Carnegie Mellon University"
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
              title="ExamOptimum"
              Description="Project to help proffesors optimizing their exam scheduling for Carnegie Mellon University"
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
              Description="Project to help proffesors optimizing their exam scheduling for Carnegie Mellon University"
            />

            <CardItem
              src={Icon2}
              title='15112 Term Project'
              Description="Project to help proffesors optimizing their exam scheduling for Carnegie Mellon University"
              path='/15112'
            />


          </ul>

           <ul className='cards__items'>
            <CardItem
              src={Icon3}
              path='/BunBunBakeShop'
              title="Bun Bun Bake Shop"
              Description="React Web application for a baker"
            />
            <CardItem
              src={Icon4}
              title="CMU Airport Transportation"              
              Description='Project to prototype an app if CMU provided airport transportation'
              path='/Shuttle'
            />

            
          </ul>

        </div>
      </div>
    
    </div>
  );
}

export default Cards;
