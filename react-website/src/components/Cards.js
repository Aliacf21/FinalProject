import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (

    <div className='cards'>


      <div className='cards__container'>
         <div><h2>Projects</h2></div>


        <div className='cards__wrapper'>

          <ul className='cards__items'>
            <CardItem
              src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2F6dP6Anvbn5A%2Fmaxresdefault.jpg&f=1&nofb=1'
              path='/services'
            />
            <CardItem
              src='https://www.cs.cmu.edu/sites/default/files/styles/news_item_image/public/pauschlight_b.jpg?itok=c2c4WPjk'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />


          </ul>

           <ul className='cards__items'>
            <CardItem
              src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2F6dP6Anvbn5A%2Fmaxresdefault.jpg&f=1&nofb=1'
              path='/services'
            />
            <CardItem
              src='https://www.cs.cmu.edu/sites/default/files/styles/news_item_image/public/pauschlight_b.jpg?itok=c2c4WPjk'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />

            
          </ul>
          
        </div>
      </div>
    
    </div>
  );
}

export default Cards;