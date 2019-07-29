import React from "react";
import "../../Pages/Pages.scss";
import './Szkola.scss';

import Loader from "../../Components/Loader/Loader";
import ReadMore from "../../Components/Buttons/Readmore/Readmore";
import TileRotateContent from "../../Components/TileRotateContent/TileRotateContent";
import MyLink from '../../Components/Nav/NavLink/NavLink'

class Szkola extends React.Component {
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
 }

 render() {
  const { componentDidMount } = this.state;

  let opacity = '.6';
  let color1 = `rgba(237, 237, 238, ${opacity})`;
  let color2 = `rgba(62, 72, 128, ${opacity})`;
  let color3 = `rgba(59, 186, 232, ${opacity})`;
  let color4 = `rgba(78, 204, 245, ${opacity})`;
  let color5 = `rgba(238, 49, 83, ${opacity})`;

  return(<div id={'szkola'} className='content__wrapper'>
    {componentDidMount ? "" : <Loader />}
    <div className='main__content'>
     <div className='flag--addon' />
     <h1>
      <span>O</span> szkole
     </h1>
     <div className='text__box'>
     <div className="underline"></div>
      <p className='read--basic'>
       <span>C</span>entrum Językowo – Muzyczne „SOUND ENGLISH” to jednoosobowa, prywatna
       szkoła językowa powstała z potrzeby połączenia dwóch wspaniałych,
       nieuleczalnych pasji: języków obcych oraz muzyki.
      </p>
      <p className='read--more'>
       <span>N</span>ie od dziś wiadomo, że języki, którymi komunikują się ludzie na całym
       świecie, to tak naprawdę po prostu dźwięki. W związku z tym trening
       wokalny bardzo ułatwia przyswajanie języka obcego na każdym poziomie
       trudności, a rozwijanie talentów muzycznych pozwala uczniom wejść na
       wyższy poziom tak umiejętności anglistycznych oraz wokalno –
       instrumentalnych. 
      </p>
      <p className="read--more"><span>Ł</span>ącząc w edukacji dwa wspomniane kierunki, przyspiesza
       się wydatnie proces kształcenia, który w związku z muzyką jest także o
       wiele ciekawszy dla uczniów.</p>
       <ReadMore />
     </div>

     <div className='text__box'>
     <div className="underline"></div>
     <p className='read--basic'><span>P</span>rofesjonalny sprzęt muzyczny i studyjny znajdujący się w „SOUND ENGLISH”
       pozwala na niecodzienne rozwinięcie formuły nauczania języka i muzyki</p>
      <p className='read--more'>
       <span>U</span>czniowie mogą rejestrować swoje postępy w profesjonalnych warunkach.
       Pomaga to zdobyć pierwsze doświadczenia studyjne (utwory nagrywane przez
       uczniów będą brzmiały wyraźnie i profesjonalnie), a także popracować
       dokładnie nad angielską bądź amerykańską wymową, akcentem i płynnością
       wypowiedzi – czynnikami bardzo istotnymi dla wyników matury ustnej,
       egzaminu FCE czy wreszcie sprawnych, codziennych rozmów w języku
       angielskim.
      </p>
      <ReadMore />
      </div>
     <div className='text__box'>
     <div className="underline"></div>
      <p className='read--basic'>
       <span>N</span>ie masz zainteresowań muzycznych? Nic nie szkodzi. Ty również znajdziesz coś
       dla siebie w ofercie <span>S</span>OUND <span>E</span>NGLISH.
      </p>
      
      <p className='read--more'>
       <span>P</span>rzygotowanie do matury, korepetycje poszerzające umiejętności zdobywane
       na lekcjach w szkole podstawowej i liceum, trening do certyfikatu FCE a
       także inne, typowo językowe, lecz niebanalne usługi znajdują się w
       ofercie. Centrum zapewnia indywidualne podejście do każdego ucznia
       (podczas zajęć indywidualnych, a także w małych grupach), które skutkuje
       efektywną nauką na każdym poziomie trudności. Szczegółowe propozycje
       kursów dla osób W ABSOLUTNIE KAŻDYM WIEKU znajdują się w zakładce
       <MyLink exact to='/oferta'>
      oferta i cennik
     </MyLink>
     .
      </p>
      <ReadMore />
      </div>

     <h1>
      <span>T</span>ylko w <span>S</span>ound <span>E</span>nglish:
     </h1>
     <div className="tiles__box">
     <TileRotateContent bgColor={color1} 
     side1Text={<p><span>I</span>ndywidualne podejście</p>}
     side2Text={ <p><span>I</span>ndywidualne, profesjonalne podejście do ucznia w każdym wieku</p>}/>
     
     <TileRotateContent bgColor={color2} 
     side1Text={<p><span>K</span>omfort pracy</p>}
     side2Text={<p><span>K</span>omfortowe warunki nauki z wykorzystaniem zarówno tradycyjnych, jak i autorskich metod nauczania oraz nowoczesnego sprzętu muzycznego</p>}/>
     
     <TileRotateContent bgColor={color3} 
     side1Text={<p><span>Ć</span>wicz wymowę również w domu</p>}
     side2Text={<p><span>R</span>ejestracja dźwiękowa wymowy i kształcenie akcentu w systemie amerykańskim bądź brytyjskim – podstawy fonetyki</p>}
     />
     
     <TileRotateContent bgColor={color5} 
     side1Text={<p><span>U</span>czysz się słuchając</p>}
     side2Text={<p><span>N</span>auczanie z szerokim wykorzystaniem elementów muzyczno – dźwiękowych</p>}
     />
     
     <TileRotateContent bgColor={color4} 
     side1Text={<p><span>Z</span>acznij tworzyć</p>}
     side2Text={<p><span>N</span>auka kreatywnego zastosowania wiedzy językowo – muzycznej</p>}
     />
     
     <TileRotateContent bgColor={color1} 
     side1Text={<p><span>P</span>racuj w studio i dziel się pasją z innymi</p>}
     side2Text={<p><span>S</span>tudyjna rejestracja i promocja twórczości uzdolnionych muzycznie uczniów</p>}
     />
     
     <TileRotateContent bgColor={color2} 
     side1Text={<p><span>N</span>aucz się tlumaczyć teksty</p>}
     side2Text={<p><span>P</span>odstawowe techniki tłumaczenia ustnego</p>}
     />
     
     <TileRotateContent bgColor={color1} 
     side1Text={<p><span>P</span>łać tak jak lubisz</p>}
     side2Text={<p><span>D</span>owolny system płatności: kwartalny, semestralny albo po każdej lekcji</p>}
     />
     
     <TileRotateContent bgColor={color5} 
     side1Text={<p><span>L</span>iczba spotkań ustalana indywidualnie</p>}
     side2Text={<p><span>C</span>zęstotliwość zajęć w tygodniu dostosowana do potrzeb klienta</p>}
     />
     
     </div>
    </div>
   </div>
  )
 }
}

// TODO Szkola - Czy brat Bartka zrobi grafikę do kafelków?

export default Szkola;
