
import styled from "styled-components"

.cards2 { 

   @media screen and (max-width: 950px) {
    margin-left: 0px;
    background-color: pink
  
  }
}


h2 {
  margin-left: 55px;
  color: black;
}

.cards__container2 {
  align-items: left;
  margin-top: 0px;
  width: 100%;
  

}

.top-leftTitle2 {
  position: absolute;
  top: 8px;
  left: 16px;
  font-size: 36px;
  color: white;
}

.top-leftDescription2 {
  position: absolute;
  top: 60px;
  left: 16px;
  font-size: 65px;
  color: white;
}

.cards__wrapper2 {
  position: relative;



  @media screen and (max-width: 950px) {
   margin: 0px;
   background-color: red;

  }
 
}

.cards__items2 {
  margin-bottom: 24px;


@media (max-width: 767.98px) {
  display: none; 
}

}

.cards__item2 {
  display: flex;
  flex: 1;
  margin: 0 1rem;
  border-radius: 10px;

}

.cards__item__link2 {
  display: flex;
  flex-flow: column;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  -webkit-filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
  filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
  overflow: hidden;
  
  justify-content: flex-end;
  background-color: #C4C4C4;

}

.cards__item__pic-wrap {
  position: relative;
  width: 90%;

  padding-top: 100%;
  overflow: hidden;
}

.fade-img {
  animation-name: fade-img;
  animation-duration: 2s;
}




.cards__item__info2 {
  margin: 20px;
  margin-top: 0px;
  margin-bottom: 0px;
}

.cards__item__text2 {
  color: black;
  font-size: 24px;

}

@media only screen and (min-width: 1200px) {
  .content__blog__container {
    width: 84%;
  }
}

@media only screen and (min-width: 1024px) {
  .cards__items {
    display: flex;
  }
}

@media only screen and (max-width: 1024px) {
  .cards__item {
    margin-bottom: 2rem;
  }
}