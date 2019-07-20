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
  }, 2000);
 }

 render() {
  const { componentDidMount } = this.state;

  return (
   <div id='copywriting' className='content__box'>
    {componentDidMount ? "" : <Loader />}
    <div className='flag--addon' />
    <div className='main__content'>
     <h1 className='title'>
      <span>{"C"}</span>
      {"opywriting"}
     </h1>
     <p>
      Oprócz stnadarwodych usług, które świadczę w ramach szkoły Sound English,
      zajmuję się również copywritingiem. W dzisiejszych czasach nie trzeba już
      chyba mówić, że dbałość o jakość tekstu świadczy o nas jako autorze,
      kontrahencie, czy partnerze biznesowym. Dzisiaj bezbłędny językowo i
      merytorycznie tekst to już nie rzadkość, a wymagay standard. </p>
      <p>Moje umiejętności redaktorskie rozwijam od lat jako czynny zawodowo dziennikarz
      i redaktor. Zapraszam Cię do przeczytanie moich publikacji. Sprawdź moje
      <MyLink exact to='portfolio-dziennikarskie'>Portfolio dziennikarskie</MyLink>
     </p>
     <h2>W rmach Sound English pomogę Ci stworzyć:</h2>
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
      <p>
       Nie widzisz na liście tego, czego szukasz? Zadzwoń lub napisz do mnie.
      </p>
      <div className='underline' />
     </ul>
     <h2>Profesjonalna redakcja i korekta tekstów</h2>W SOUND ENGLISH możesz też
     podrasować i zredagować swój własny, gotowy tekst, pracę bądź artykuł lub
     zamówić profesjonalne pismo.
    </div>
   </div>
  );
 }
}

export default Copywriting;
