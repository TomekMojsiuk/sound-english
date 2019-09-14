import React from "react";
import GoBackBtn from "../../Buttons/GoBackBtn/GoBackBtn";

export default function SherlockHolmes({ scrollToTop }) {
 scrollToTop();
 return (
  <div className='article__container'>
   <h1>Za co kochamy Sherlocka Holmesa?</h1>
   <p className='article__intro'>
    Detektyw – geniusz wymyślony i opisany przez Sir Arthura Conana Doyle’a to
    postać literacka, którą zna chyba każdy. Każdy choć raz w życiu zetknął się
    z legendarną postacią angielskiego tropiciela i mistrza dedukcji. Co
    sprawia, że od tak wielu lat opowiadania o Sherlocku Holmesie są uwielbiane
    przez tak wielu ludzi?
   </p>
   <p className='article__signature'>Bartek Piwowarczyk</p>
   <GoBackBtn linkTo={"/portfolio-dziennikarskie"} btnText={"Powrót"} />
  </div>
 );
}
