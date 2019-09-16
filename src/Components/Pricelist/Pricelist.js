import React from "react";
import "./Pricelist.scss";

export default function Pricelist() {
 return (
  <div id='pricelist'>
   <h1>
    <span className='initial'>
     <span className={"asterisk"}>&#42;</span>C
    </span>
    ennik
   </h1>

   <div className='pricelist__content'>
    <div className='content__flex__wrapper'>
     <div className='pricelist__items__group '>
      <h2 className='pricelist__items__group__titile'>
       <span className='initial'>K</span>urs Guitar Classes
      </h2>
      <div className='underline' />

      <div className='pricelist__item'>
       <div className='pricelist__item__name'>
        Zajęcia w studio Sound English
       </div>
       <div className='pricelist__item__price'>
        <b>200zł</b>
       </div>
      </div>

      <div className='pricelist__item'>
       <div className='pricelist__item__name'>
        Zajęcia z dojazdem do domu ucznia
       </div>
       <div className='pricelist__item__price'>
        <b>225zł</b>
       </div>
      </div>
     </div>
    </div>

    <div className='content__flex__wrapper'>
     <div className='pricelist__items__group'>
      <h2 className='pricelist__items__group__titile'>
       <span className='initial'>Z</span>ajęcia indywidualne
      </h2>
      <div className='underline' />

      <div className='pricelist__item'>
       <div className='pricelist__item__name'>
        Zajęcia od poniedziałku do piątku:
       </div>
       <div className='pricelist__item__price'>
        <b>40zł</b>
       </div>
      </div>

      <div className='pricelist__item'>
       <div className='pricelist__item__name'>Zajęcia w soboty</div>
       <div className='pricelist__item__price'>
        <b>45zł</b>
       </div>
      </div>
     </div>
     <div className='pricelist__items__group'>
      <h2 className='pricelist__items__group__titile'>
       <span className='initial'>
        <span className={"asterisk"}>&#42;</span>
        <span className={"asterisk"}>&#42;</span>Z
       </span>
       ajęcia grupowe
      </h2>
      <div className='underline' />

      <div className='pricelist__item'>
       <div className='pricelist__item__name'>
        Zajęcia od poniedziałku do piątku:
       </div>
       <div className='pricelist__item__price'>
        <b>30zł</b>
       </div>
      </div>

      <div className='pricelist__item'>
       <div className='pricelist__item__name'>Zajęcia w soboty</div>
       <div className='pricelist__item__price'>
        <b>35zł</b>
       </div>
      </div>
     </div>
    </div>
   </div>

   <p className={"footnote"}>
    <span>P</span>referowana forma płatności to płatność gotówką bądź przelewem do 10 dnia miesiąca, wystawiamy
    faktury VAT.
   </p>

   <p className={"footnote"}>
    <span className={"asterisk"}>&#42;</span> <span>C</span>ena za 1h zegarową
   </p>

   <p className={"footnote"}>
    <span className={"asterisk"}>&#42; &#42;</span> <span>W</span> Sound English
    grupa to już 2 osoby!
   </p>
  </div>
 );
}
