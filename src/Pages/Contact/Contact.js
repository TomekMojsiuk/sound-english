import React from "react";
import "../Pages.scss";
import "./Contact.scss";

const Contact = () => {
 return (
  <div className='content__box'>
   <div className='contact__info'>
    <h1 className='title'>
     <span>{"B"}</span>{"artłomiej"} <span>{"P"}</span>{"iwowarczyk"}</h1>
    
    <div className='contact__info--item'>
     <div className='icon mobile' />
     <p>{'+48 605 034 489'}</p>
    </div>
    
    <div className='contact__info--item'>
     <div className='icon email' />
     <p>{"soundenglishschool@gmail.com"}</p>
    </div>

    <div className='contact__info--item'>
     <div className='icon home' />
     <div>
        <h2>{'Siedziba szkoły'}</h2> 
        <p>{'ul. Kościuszki 20'}</p> 
        <p>{'83-400 Kościerzyna'}</p>
        <p>{'(I piętro budynku LET, wejście od frontu, bocznymi schodami)'}</p>
        <h2>{'Adres korespondencyjny'}</h2>
        <p>{'Centrum Językowo – Muzyczne „SOUND ENGLISH”'}</p> 
        <p>{'Bartłomiej Piwowarczyk'}</p> 
        <p>{'ul. Małcużyńskiego 6/C1'}</p> 
        <p>{'83-400 Kościerzyna'}</p>

     </div>
    </div>
   </div>
</div>
 );
};

export default Contact;
