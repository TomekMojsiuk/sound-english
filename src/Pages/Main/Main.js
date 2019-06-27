import React from "react";
import "../Pages.scss";
import "./Main.scss";
import MyLink from "../../Components/Nav/NavLink/NavLink";

const Main = () => {
 return (
  <div id='main' className='content__box'>
     <div className='flag' />
   <div className='logo' />
   <div className="content__box">
      
   <div className="banner">
   <h1 className='title'><span>{'C'}</span>{'entrum '}<span>{'J'}</span>{'ęzykowo –'} <span>{'M'}</span>{'uzyczne'}</h1>
      <ul className='services__list'>
         <li className='services__list__item'>{'Korepetycje'}<div className="underline"></div></li>
         <li className='services__list__item'>{'Przygotowanie do matury i egzaminów'}<div className="underline"></div></li>
         <li className='services__list__item'>{'Studio nagrań'}<div className="underline"></div></li>
         <li className='services__list__item'>{'Another item'}<div className="underline"></div></li>
         <li className='services__list__item'>{'Another item'}<div className="underline"></div></li>
      </ul>
      <MyLink exact to='/oferta'>
      Oferta i cennik
     </MyLink> 
   </div>
   </div>
   
  </div>
 );
};

export default Main;
