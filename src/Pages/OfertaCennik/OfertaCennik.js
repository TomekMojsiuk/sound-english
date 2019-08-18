import React from "react";
import "../../Pages/Pages.scss";
import "./OfertaCennik.scss";

import Loader from "../../Components/Loader/Loader";
import TilePopUpDescription from "../../Components/TilePopUpDescription/TilePopUpDescription";

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
  }, 1000);

  this.props.scrollToTop();
 }

 render() {
  const { componentDidMount } = this.state;

  let opacity = ".2";
  // let color1 = `rgba(237, 237, 238, ${opacity})`;
  let color2 = `rgba(62, 72, 128, ${opacity})`;
//   let color3 = `rgba(59, 186, 232, ${opacity})`;
//   let color4 = `rgba(78, 204, 245, ${opacity})`;
//   let color5 = `rgba(238, 49, 83, ${opacity})`;

  return(<div className='content__wrapper'>
    {componentDidMount ? "" : <Loader />}
    <div id='cennik' className='main__content'>
     <div className='flag--addon' />
     <h1>
      <span>K</span>ursy językowe SOUND ENGLISH
     </h1>

     <div className='tiles__box'>
      <TilePopUpDescription
       imageClassName={"up-to-date"}
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
       bgColor={color2}
      />

      <TilePopUpDescription
       imageClassName={"matura"}
       mainText={
        <h2>
         <span>M</span>ATURA EXAM MASTER
        </h2>
       }
       popupText={
        <p>
         <span>K</span>ompleksowe przygotowanie do matury podstawowej i rozszerzonej w nowej
         formule.
        </p>
       }
       bgColor={color2}
      />
      <TilePopUpDescription
       imageClassName={"fce-wannabe"}
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
       bgColor={color2}
      />

      <TilePopUpDescription
    imageClassName={"se-course"}
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
       bgColor={color2}
      />

      <TilePopUpDescription
       imageClassName={"bluecollar-rush"}
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
       bgColor={color2}
      />

      <TilePopUpDescription
       imageClassName={"about-time"}
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

      <TilePopUpDescription
       imageClassName={"sound-meets-kids"}
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
       bgColor={color2}
      />
     </div>

     <h1>
      <span>C</span>ennik
     </h1>
     <h2>Kursy językowe</h2>

     <div className='prices__container'>
      <div className={"left"}>
       <h2>
        <span>Z</span>ajęcia indywidualne{" "}
        <span className={"asterisk"}>&#42;</span>
       </h2>
       <div className='underline' />
       <div className='price__item__list'>
        <div className='price__item'>
         <div>Płatność po każdych zajęciach:</div>
         <div>
          <span className={"bold"}>40zł</span>
         </div>
        </div>
        <div className='price__item'>
         <div>Płatność za 5 lekcji z góry:</div>
         <div>
          <span className={"bold"}>180zł</span>
         </div>
         <div>(20zł rabatu)</div>
        </div>
        <div className='price__item'>
         <div>Płatność za 10 lekcji z góry:</div>
         <div>
          <span className={"bold"}>370zł</span>
         </div>
         <div>(30zł rabatu)</div>
        </div>
       </div>
      </div>
      <div className={"right"}>
       <h2>
        <span>Z</span>ajęcia grupowe <span className={"asterisk"}>&#42;</span>
       </h2>
       <div className='underline' />
       <div className='price__item__list'>
        <div className='price__item'>
         <div>Płatność po każdych zajęciach:</div>
         <div>
          <span className={"bold"}>30zł</span>
         </div>
        </div>
        <div className='price__item'>
         <div>Płatność za 5 lekcji z góry:</div>
         <div>
          <span className={"bold"}>130zł</span>
         </div>
         <div>(20zł rabatu)</div>
        </div>
        <div className='price__item'>
         <div>Płatność za 10 lekcji z góry:</div>
         <div>
          <span className={"bold"}>260zł</span>
         </div>
         <div>(40zł rabatu)</div>
        </div>
       </div>
      </div>
     </div>
     <p className={"footnote"}>
      <span className={"asterisk"}>&#42;</span> <span>C</span>ena za 1h zegarową
     </p>

     <h2 className='h2__header--adjust'>Weź znajomych, a zaoszczędzisz!</h2>
     <div className='text__box'>
      <div className='underline' />
      <p className='read--basic'>
       <span>G</span>rupa w SOUND ENGLISH to 2 – 4 osoby. Zajęcia grupowe
       rozpoczynają się z chwilą utworzenia grupy danego kursu. Chętni o
       rozpoczęciu zajęć grupowych są informowani telefonicznie w chwili
       utworzenia grupy.
      </p>
      <div className='underline' />
      <p className='read--basic'>
       <span>A</span>spekty dźwiękowe lekcji odróżniające SOUND ENGLISH od
       innych szkół językowych (ćwiczenia akcentu, nagrania wypowiedzi) są
       integralną, częścią zajęć i nie wiążą się z żadnymi dodatkowymi
       opłatami!!!
      </p>
      <h2 className='h2__header--adjust'>Nie czekaj, zadzwoń już dziś!</h2>
      <div className='underline' />
      <p className='read--basic'>
       <span>C</span>eny usług studyjnych (ministudio) i redaktorskich
       (copywriting) ustalane są po spotkaniu bądź rozmowie organizacyjnej ze
       zleceniodawcą. Wszystko zależy od charakteru zlecenia i czasu potrzebnego
       na jego realizację.
      </p>
     </div>
    </div>
   </div>
  )
 }
}

// TODO Oferta i Cennik - Czy brat Bartka zrobi grafikę do kafelków?

export default OfertaCennik;
