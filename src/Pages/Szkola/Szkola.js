import React from "react";
import "../../Pages/Pages.scss";
import "./Szkola.scss";

import Loader from "../../Components/Loader/Loader";
import ReadMore from "../../Components/Buttons/Readmore/Readmore";
import Tile from "../../Components/Tile/Tile";

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
  }, 2000);
 }

 render() {
  const { componentDidMount } = this.state;

  let opacity = '.6';
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
      <span>O</span> szkole
     </h1>
     <div className='text__box'>
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
      <p className='read--basic'>
       <span>N</span>ie masz zainteresowań muzycznych? Nic nie szkodzi. Ty również znajdziesz coś
       dla siebie w ofercie <span>S</span>OUND <span>E</span>NGLISH.
      </p>
      <ReadMore />
      <p className='read--more'>
       <span>P</span>rzygotowanie do matury, korepetycje poszerzające umiejętności zdobywane
       na lekcjach w szkole podstawowej i liceum, trening do certyfikatu FCE a
       także inne, typowo językowe, lecz niebanalne usługi znajdują się w
       ofercie. Centrum zapewnia indywidualne podejście do każdego ucznia
       (podczas zajęć indywidualnych, a także w małych grupach), które skutkuje
       efektywną nauką na każdym poziomie trudności. Szczegółowe propozycje
       kursów dla osób W ABSOLUTNIE KAŻDYM WIEKU znajdują się w zakładce OFERTA
       I CENNIK.
      </p>
     </div>

     <h1>
      <span>T</span>ylko w <span>S</span>ound <span>E</span>nglish!
     </h1>
     <div className="tiles__box">
     <Tile bgColor={color1} 
     side1Text={<p><span>I</span>ndywidualne podejście</p>}
     side2Text={'Indywidualne, profesjonalne podejście do ucznia w każdym wieku'}/>
     
     <Tile bgColor={color2} 
     side1Text={<p><span>K</span>omfort pracy</p>}
     side2Text={'Komfortowe warunki nauki z wykorzystaniem zarówno tradycyjnych, jak i autorskich metod nauczania oraz nowoczesnego sprzętu muzycznego'}/>
     
     <Tile bgColor={color3} 
     side1Text={<p><span>W</span>ymowę możesz ćwiczyć również w domu</p>}
     side2Text={'Rejestracja dźwiękowa wymowy i kształcenie akcentu w systemie amerykańskim bądź brytyjskim – podstawy fonetyki'}
     />
     
     <Tile bgColor={color5} 
     side1Text={<p><span>U</span>czysz się słuchając</p>}
     side2Text={'Nauczanie z szerokim wykorzystaniem elementów muzyczno – dźwiękowych'}
     />
     
     <Tile bgColor={color4} 
     side1Text={<p><span>Z</span>acznij tworzyć</p>}
     side2Text={'Nauka kreatywnego zastosowania wiedzy językowo – muzycznej'}
     />
     
     <Tile bgColor={color1} 
     side1Text={<p><span>P</span>racuj w studio i dziel się pasją z innymi</p>}
     side2Text={'Studyjna rejestracja i promocja twórczości uzdolnionych muzycznie uczniów'}
     />
     
     <Tile bgColor={color2} 
     side1Text={<p><span>N</span>aucz się tlumaczyć teksty</p>}
     side2Text={'Podstawowe techniki tłumaczenia ustnego'}
     />
     
     <Tile bgColor={color1} 
     side1Text={<p><span>P</span>łać tak jak lubisz</p>}
     side2Text={'Dowolny system płatności: kwartalny, semestralny albo po każdej lekcji'}
     />
     
     <Tile bgColor={color5} 
     side1Text={'Częstotliwość zajęć w tygodniu dostosowana do potrzeb klienta'}
     side2Text={''}
     />
     
     </div>
    </div>
   </div>
  ) : (
   <Loader />
  );
 }
}

export default Szkola;
