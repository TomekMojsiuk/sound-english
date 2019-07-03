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
         <span>E</span>EXTENDED <br/>MATURA EXAM MASTER
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
         <span>Z</span>ajęcia dla najmłodszych – angielski przez muzykę i zabawę dźwiękiem.
        </p>
       }
       bgColor={color1}
      />
     </div>

     {/* <div className='text__box'>
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
     </div> */}
    </div>
   </div>
  ) : (
   <Loader />
  );
 }
}

export default OfertaCennik;
