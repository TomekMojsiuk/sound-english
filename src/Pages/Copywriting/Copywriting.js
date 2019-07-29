import React from "react";
import "../Pages.scss";
import "./Copywriting.scss";

import Loader from "../../Components/Loader/Loader";
import MyLink from "../../Components/Nav/NavLink/NavLink";

class Copywriting extends React.Component {
 constructor(props) {
  super(props);
  this.state = {
   componentDidMount: false
  };
 }

 componentDidMount() {
  setTimeout(() => {
   this.setState(prevState => ({
    componentDidMount: !prevState.componentDidMount
   }));
  }, 1000);
 }

 render() {
  const { componentDidMount } = this.state;

  return (
   <div id='copywriting' className='content__wrapper'>
    {componentDidMount ? "" : <Loader />}
    <div className='flag--addon' />
    <div className='main__content'>
     <h1 className='title'>
      <span>{"C"}</span>
      {"opywriting"}
     </h1>
     <div className='copywriting__img' />

     <p>
      Oprócz usług związanych z nauczaniem i produkcją dźwięku, które świadczę w
      ramach szkoły Sound English, zajmuję się również copywritingiem. W
      dzisiejszych czasach nie trzeba już chyba mówić, że dbałość o jakość
      tekstu, który prezentujemy, mówi bardzo wiele o nas jako autorze,
      kontrahencie, czy partnerze biznesowym. Dzisiaj bezbłędny językowo i
      merytorycznie tekst to już nie rzadkość, a wymagay standard.
     </p>

     <p>
      Moje umiejętności redaktorskie rozwijam od lat jako czynny zawodowo
      dziennikarz i redaktor. Zapraszam Cię do mojego
      <MyLink exact to='portfolio-dziennikarskie'>
       portfolio dziennikarskiego,
      </MyLink>
      w którym przeczytasz moje publikacje.
     </p>
     <h2>
      <span>W</span> ramach Sound English możesz zamówić:
     </h2>
     <div className='content__flex__container'>
      <ul>
       <li>
        <span>W</span>szelkie teksty w językach polskim i angielskim
       </li>
       <li>
        <span>C</span>ontent reklamowy i sprzedażowy
       </li>
       <li>
        <span>A</span>rtykuły tematyczne
       </li>
       <li>
        <span>T</span>łumaczenia tekstów piosenek
       </li>
       <li>
       <span>P</span>rofesjonalne pisma
      </li>
       <div className='underline' />
      </ul>
      <div className='banner'>
       <div className='banner__content__box'>
        <p className='text'>
         Nie widzisz na liście tego, czego szukasz? Zadzwoń lub napisz do mnie
         >>
        </p>
        <div className='icon mobile' />
       </div>
       <MyLink exact to='/kontakt'>
        Kontakt
       </MyLink>
      </div>
     </div>
     <h2>
      {" "}
      <span>J</span>eśli masz gotowy tekst i potrzebujesz zredagowania lub korekty, zamów
     </h2>
     <ul>
      <li>
       <span>Z</span>redagowanie gotowego tekstu, pracy akademickiej lub
       artykułu napisanego przez Ciebie
      </li>
     </ul>
    </div>
   </div>
  );
 }
}

export default Copywriting;
