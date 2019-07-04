import React from "react";
import "../../Pages/Pages.scss";
import "./OfertaCennik.scss";

import Loader from "../../Components/Loader/Loader";
import TilePopUp from "../../Components/TilePopUp/TilePopUp";

class OfertaCennik extends React.Component {
 constructor(props) {
  super(props);
  this.state = {
   componentDidMount: false,
   btnReadMoreClicked: false
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

  let opacity = ".8";
  let color1 = `rgba(237, 237, 238, ${opacity})`;
  let color2 = `rgba(62, 72, 128, ${opacity})`;
  let color3 = `rgba(59, 186, 232, ${opacity})`;
  let color4 = `rgba(78, 204, 245, ${opacity})`;
  let color5 = `rgba(238, 49, 83, ${opacity})`;

  return componentDidMount ? (
   <div className='content__box'>
    <div className='main__content'>
     <div className='flag--addon' />
     <h1>
      <span>K</span>ursy językowe SOUND ENGLISH
     </h1>

     <div className='tiles__box'>
      <TilePopUp
       mainIconClassName={"up-to-date"}
       mainText={
        <h2>
         <span>U</span>P TO DATE
        </h2>
       }
       popupText={
        <p>
         <span>K</span>urs UP TO DATE to zajęcia rozwijająco – utrwalające
         oparte synchronicznie na programie realizowanym w szkole publicznej
         (szkoła podstawowa, liceum). Przygotujemy Cię do sprawdzianów, będziemy
         ćwiczyć aktualny materiał, który przerabiasz w szkole i poszerzymy
         Twoją wiedzę.
        </p>
       }
       bgColor={color5}
      />

      <TilePopUp
       mainIconClassName={""}
       mainText={
        <h2>
         <span>M</span>ATURA EXAM MASTER
        </h2>
       }
       popupText={
        <p>
         <span>K</span>ompleksowe przygotowanie do matury podstawowej w nowej
         formule.
        </p>
       }
       bgColor={color4}
      />

      <TilePopUp
       mainIconClassName={""}
       mainText={
        <h2>
         <span>E</span>EXTENDED <br />
         MATURA EXAM MASTER
        </h2>
       }
       popupText={
        <p>
         <span>K</span>ompleksowe przygotowanie do matury rozszerzonej w nowej
         formule
        </p>
       }
       bgColor={color2}
      />

      <TilePopUp
       mainIconClassName={""}
       mainText={
        <h2>
         <span>F</span>CE WANNABE
        </h2>
       }
       popupText={
        <p>
         <span>P</span>rzygotowanie do egzaminu FCE
        </p>
       }
       bgColor={color1}
      />

      <TilePopUp
       mainIconClassName={""}
       mainText={
        <h2>
         <span>S</span>OUND ENGLISH COURSE
        </h2>
       }
       popupText={
        <p>
         <span>Z</span>ajęcia anglistyczne oparte na autorskim programie
         dostosowanym do wymagań edukacyjnych uczniów w każdym wieku połączone z
         elementami edukacji muzycznej (zajęcia wokalne, angielska terminologia
         muzyczna, podstawy historii muzyki rozrywkowej w kontekście językowym,
         podstawy pracy studyjnej, rozwijanie muzycznej kreatywności
         instrumentalnej i wokalnej, promowanie twórczości uczniów, nagrania
         studyjne).
        </p>
       }
       bgColor={color5}
      />

      <TilePopUp
       mainIconClassName={""}
       mainText={
        <h2>
         <span>B</span>LUE COLLAR RUSH
        </h2>
       }
       popupText={
        <p>
         <span>K</span>urs przyspieszony dla osób wyjeżdżających do pracy
         zagranicę – nacisk na niezbędne słownictwo i systemy skutecznej
         komunikacji. Program i system prowadzenia zajęć ustalany jest z
         klientem na podstawie charakteru pracy, którą zamierza on/ona podjąć
         zagranicą, a także czasu, który pozostał do wyjazdu.
        </p>
       }
       bgColor={color4}
      />

      <TilePopUp
       mainIconClassName={""}
       mainText={
        <h2>
         <span>A</span>BOUT TIME!
        </h2>
       }
       popupText={
        <p>
         <span>Z</span>ajęcia dla dorosłych na każdym poziomie trudności
         (również od zupełnych podstaw!) dostosowane do indywidualnych
         predyspozycji uczęszczających.
        </p>
       }
       bgColor={color2}
      />

      <TilePopUp
       mainIconClassName={""}
       mainText={
        <h2>
         <span>S</span>OUND MEETS KIDS
        </h2>
       }
       popupText={
        <p>
         <span>Z</span>ajęcia dla najmłodszych – angielski przez muzykę i zabawę
         dźwiękiem.
        </p>
       }
       bgColor={color1}
      />
     </div>

     <h1>
      <span>C</span>ennik
     </h1>
     <div className="prices__container"></div>
    </div>
   </div>
  ) : (
   <Loader />
  );
 }
}

export default OfertaCennik;
