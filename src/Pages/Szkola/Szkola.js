import React from "react";
import "../Pages.scss";
import "./Szkola.scss";

import Loader from "../../Components/Loader/Loader";
import ReadMore from "../../Components/Buttons/Readmore/Readmore";

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
      <p className="read--more">Łącząc w edukacji dwa wspomniane kierunki, przyspiesza
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
      <span>N</span>IE CZEKAJ, ZADZWOŃ LUB NAPISZ MAILA!
     </h1>
     <h2>TYLKO W ”SOUND ENGLISH”:</h2>

     <ul>
      <li>Indywidualne, profesjonalne podejście do ucznia w każdym wieku</li>
      <li>Komfortowe warunki nauki</li>
      <li>
       Rejestracja dźwiękowa wymowy i kształcenie akcentu w systemie
       amerykańskim bądź brytyjskim – podstawy fonetyki
      </li>
      <li>
       Nauczanie z szerokim wykorzystaniem elementów muzyczno – dźwiękowych
      </li>
      <li>
       Nauka kreatywnego zastosowania wiedzy językowo – muzycznej. Zacznij
       tworzyć!
      </li>
      <li>
       Studyjna rejestracja i promocja twórczości uzdolnionych muzycznie uczniów
      </li>
      <li>Podstawowe techniki tłumaczenia ustnego</li>
      <li>
       Dowolny system płatności: kwartalny, semestralny albo po każdej lekcji
      </li>
      <li>Częstotliwość zajęć w tygodniu dostosowana do potrzeb klienta</li>
     </ul>
    </div>
   </div>
  ) : (
   <Loader />
  );
 }
}

export default Szkola;
