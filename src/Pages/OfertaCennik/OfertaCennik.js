import React, { Fragment } from "react";
import "../../Pages/Pages.scss";
import "./OfertaCennik.scss";

import Loader from "../../Components/Loader/Loader";
import TilePopUpDescription from "../../Components/TilePopUpDescription/TilePopUpDescription";
import MyLink from "../../Components/Nav/NavLink/NavLink";
import Pricelist from "../../Components/Pricelist/Pricelist";
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

  let opacity = "0";
  let color2 = `rgba(62, 72, 128, ${opacity})`;

  return (
   <div className='content__wrapper'>
    {componentDidMount ? "" : <Loader />}
    <div id='cennik' className='main__content'>
     <div className='flag--addon' />
     <h1>
      <span className='initial'>K</span>ursy językowe SOUND ENGLISH
     </h1>

     <div className='tiles__box'>
      <TilePopUpDescription
       imageClassName={"up-to-date"}
       mainText={
        <h2>
         <span className='initial'>U</span>P TO DATE
        </h2>
       }
       popupText={
        <div>
         <p>
          <span className='initial'>K</span>urs UP TO DATE to zajęcia
          rozwijająco – utrwalające oparte synchronicznie na programie
          realizowanym w szkole publicznej (szkoła podstawowa, liceum).
         </p>
         <p>
          <span className='initial'>P</span>rzygotujemy Cię do sprawdzianów,
          będziemy ćwiczyć aktualny materiał, który przerabiasz w szkole i
          poszerzymy Twoją wiedzę. Wszystko odbędzie się w przyjemnej
          atmosferze, w związku z którą szybko poczujesz, że angielski jest
          fajny, nawet jeśli póki co trudno Ci w to uwierzyć.
         </p>
        </div>
       }
       bgColor={color2}
      />

      <TilePopUpDescription
       imageClassName={"matura"}
       mainText={
        <h2>
         <span className='initial'>M</span>ATURA EXAM MASTER
        </h2>
       }
       popupText={
        <div>
         <p>
          <span className='initial'>K</span>ompleksowe przygotowanie do matury
          podstawowej i rozszerzonej w nowej formule. Nauczysz się technik i
          systemów, które sprawią, że każdy rodzaj zadań maturalnych okaże się
          prosty i wykonalny.
         </p>
         <p>
          <span className='initial'>P</span>rzygotowanie do matury rozszerzonej
          także jest procesem przyjemnym i inspirującym, a kilka prostych rad
          pomoże Ci uwierzyć, że „rozszerzona” nie znaczy „straszna”.
         </p>
         <p>
          <span className='initial'>J</span>eśli boisz się matury ustnej, a
          mówienie po angielsku to dla Ciebie katorga podobna do słuchania
          polskiego country
          <span className='initial'>*</span>, Sound English jest absolutnie
          miejscem dla Ciebie – poćwiczymy wymowę, płynność wypowiedzi i akcent,
          a niecodzienny system pracy konwersacyjnej (nagrywanie i analiza
          własnych słów), pomoże Ci zacząć mówić skutecznie. Wanna try?
         </p>
         <p>
          <span className='initial'>*</span>Z wyjątkiem zespołu „Babsztyl”.
          „Babsztyl” jest w porządku, Sound English poleca.
         </p>
        </div>
       }
       bgColor={color2}
      />
      <TilePopUpDescription
       imageClassName={"fce-wannabe"}
       mainText={
        <h2>
         <span className='initial'>F</span>CE WANNABE
        </h2>
       }
       popupText={
        <div>
         <p>
          <span className='initial'>E</span>gzamin First Certificate in English,
          zwany też B2 First, to nomen omen pierwszy z poważnych egzaminów
          British Council. Niekiedy może wydawać się kwestią tajemniczą lub
          trudną, ale (jak zwykle), absolutnie taki nie jest.
         </p>
         <p>
          <span className='initial'>F</span>CE może być początkiem Twojej
          poważnej, lingwistycznej drogi egzaminacyjnej. Jak wiadomo „papierki”,
          choć de facto nie są niezbędne, warto zbierać. Sound English pomoże Ci
          także w tej kwestii.
         </p>
        </div>
       }
       bgColor={color2}
      />

      <TilePopUpDescription
       imageClassName={"se-course"}
       mainText={
        <h2>
         <span className='initial'>S</span>OUND ENGLISH COURSE
        </h2>
       }
       popupText={
        <div>
         <p>
          <span className='initial'>T</span>e zajęcia w Sound English to lekcje
          oparte na autorskim programie dostosowanym do wymagań edukacyjnych
          uczniów w każdym wieku połączone z elementami edukacji muzycznej:
          <ul>
           <li>zajęcia wokalne</li>
           <li>angielska terminologia muzyczna</li>
           <li>podstawy historii muzyki rozrywkowej w kontekście językowym</li>
           <li>podstawy pracy studyjnej</li>
           <li>rozwijanie muzycznej kreatywności instrumentalnej i wokalnej</li>
           <li>promowanie twórczości</li>
           <li>nagrania studyjne</li>
          </ul>
         </p>
         <p>
          <span className='initial'>J</span>eśli chcesz uczyć się angielskiego
          śpiewając i grając, a w międzyczasie zarejestrować swoje postępy na
          nośnikach audio-video, studio Sound English to idealne miejsce dla
          Ciebie.
         </p>
         <p>
          <span className='initial'>P</span>oznasz sprzęt nagrywający, programy
          obróbki dźwięku, będziesz mogła/mógł sięgnąć po gitarę, bądź usiąść
          przy klawiszach. Wszystko to powiązane będzie z angielskim słownictwem
          i rozwojem językowym. To naprawdę możliwe. I w Sound English naprawdę
          się to dzieje.
         </p>
        </div>
       }
       bgColor={color2}
      />

      <TilePopUpDescription
       imageClassName={"bluecollar-rush"}
       mainText={
        <h2>
         <span className='initial'>W</span>ORKING CLASS HERO
        </h2>
       }
       popupText={
        <div>
         <p>
          <span className='initial'>K</span>urs przyspieszony dla osób
          wyjeżdżających do pracy zagranicę – kładziemy tu nacisk na niezbędne
          słownictwo i systemy skutecznej komunikacji, ćwiczenia gramatyczne
          ograniczając do minimum.
         </p>
         <p>
          <span className='initial'>P</span>rogram i system prowadzenia zajęć
          ustalany jest z Tobą na podstawie charakteru pracy, którą zamierzasz
          podjąć zagranicą, a także czasu, który pozostał do wyjazdu.
         </p>
         <p>
          <span className='initial'>J</span>eżeli planujesz wyjazd zarobkowy,
          albo swoją przyszłość na stałe wiążesz z krajem innym niż Polska, a
          chwilowo Twój angielski kończy się na „Hello” i „Chałupy welcome to”,
          nie zwlekaj, tylko zadzwoń – możemy sobie pomóc.
         </p>
        </div>
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
        <div>
         <p>
          „<span className='initial'>D</span>la mnie już raczej za późno, w
          młodości wmuszano we mnie rosyjski, a angielskiego chyba już nigdy się
          nie nauczę” – jeśli tego typu słowa powtarzasz nawykowo od wielu lat,
          czas to zmienić.
         </p>
         <p>
          <span className='initial'>K</span>urs „About time!” to zajęcia
          konwersacyjne dostosowane do uczniów w każdym wieku, zgodnie z ich
          preferencjami i potrzebami.
         </p>
         <p>
          <span className='initial'>N</span>a wiedzę nigdy nie jest za późno, a
          na wymówki jest zawsze za wcześnie. Sound English czeka na kontakt!
         </p>
        </div>
       }
       bgColor={color2}
      />

      <TilePopUpDescription
       imageClassName={"sound-meets-kids"}
       mainText={
        <h2>
         <span className='initial'>S</span>OUND MEETS KIDS
        </h2>
       }
       popupText={
        <div>
         <p>
          <span className='initial'>J</span>eżeli nie chcesz skracać dziecku
          dzieciństwa nudnymi, szkolnymi zajęciami językowymi, a jednocześnie
          chcesz, aby posiadło ciekawą wiedzę anglistyczną w przyjemny sposób,
          to pełna piosenek i gier przygoda w Sound English będzie dla Ciebie i
          Twojego dziecka idealnym wyborem.
         </p>
         <p>
          <span className='initial'>Z</span>ajęcia te są nie tylko odtwórcze
          (śpiewanie piosenek, zajęcia polisensoryczne), ale także kreatywne.
          Nie zdziw się, jeśli wierszyki, które od jakiegoś czasu kreśli Twoja
          latorośl, zmienią się nagle w teksty angielskie połączone z ciekawą
          melodią. Skąd się to wzięło dowiesz się od małego Twórcy – Twojego
          dziecka.
         </p>
        </div>
       }
       bgColor={color2}
      />
      <TilePopUpDescription
       imageClassName={"guitar-master"}
       mainText={
        <h2>
         <span className='initial'>G</span>uitar classes
        </h2>
       }
       popupText={
        <div>
         <p>
          <span className='initial'>W</span> Sound English możesz nauczyć się
          także grania na gitarze. Nie ma znaczenia Twój wiek, predyspozycje
          albo doświadczenie muzyczne - grać każdy może, a spróbować wręcz każdy
          powinien.
         </p>
         <p>
          <span className='initial'>U</span>czymy w oparciu o program muzyki
          popularnej, nie męcząc młodych i starszych adeptów muzyką klasyczną.
          Zajęcia prowadzone są indywidualnie bądź grupowo,{" "}
          <span className='emphasised__test'>z dojazdem do ucznia</span>.
         </p>
         <p>
          <span className='initial'>C</span>o ważne, nasz kurs połączony jest z{" "}
          <span className='emphasised__test'>lekcjami pracy studyjnej</span>,
          które są nieodpłatne! Ty albo Twoje dziecko pozna sprzęt muzyczny i
          nagrywający, oswoicie się z pracą w studio i zbuduje własny, dźwiękowy
          materiał demo.
         </p>
         <p>
          <span className='initial'>R</span>ock n' roll, rozwój, kreatywne
          podejście i dobry początek (bądź rozwinięcie) przygody z muzyką -
          wszystko to tylko u nas. Zajęcia prowadzi wykwalifikowany, aktywny
          scenicznie gitarzysta
          <span className='emphasised__test'> Michał Kleinszmidt</span> -
          absolwent kierunku Edukacja artystyczna w zakresie sztuki muzycznej
          Akademii Pomorskiej w Słupsku, obecnie czynnie działający jako
          gitarzysta i saksofonista zespołu
          <span className='emphasised__test'> Lares</span>. Zapraszamy!
         </p>
         <p>
          <span className='initial'>K</span>oszt zajęć to{" "}
          <span className='initial'>250</span> zł miesięcznie
         </p>
        </div>
       }
       bgColor={color2}
      />
     </div>
     <Pricelist />
     <h2 className='h2__header--adjust'>
      Przyprowadź znajomych, a zaoszczędzisz!
     </h2>
     <div className='banner'>
      <div className='banner__content__box'>
       <p className='text'>
        Zapisz się na zajęcia. Możesz do nas zadzwonić lub skorzystać z
        formularza na tej stronie.
       </p>
       <div className='icon mobile' />
      </div>
      <MyLink exact to='/kontakt'>
       Formularz kontaktowy
      </MyLink>
     </div>
     <div className='text__box'>
      <div className='underline' />
      <p className='read--basic'>
       <span className='initial'>G</span>rupa w Sound English to 2 – 4 osoby.
       Zajęcia grupowe rozpoczynają się z chwilą utworzenia grupy danego kursu.
       Chętni o rozpoczęciu zajęć grupowych są informowani telefonicznie w
       chwili utworzenia grupy.
      </p>
      <div className='underline' />
      <p className='read--basic'>
       <span className='initial'>A</span>spekty dźwiękowe lekcji odróżniające
       SOUND ENGLISH od innych szkół językowych (ćwiczenia akcentu, nagrania
       wypowiedzi) są integralną, częścią zajęć i nie wiążą się z żadnymi
       dodatkowymi opłatami.
      </p>
      <div className='underline' />
      <p className='read--basic'>
       <span className='initial'>W</span> Sound English realizujmey też inne
       kursy (np. na wyższe certyfikaty, lub egzaminy typu TOEFL). Jeśli tego,
       czego szukasz, nie ma w powyższej ofercie, zadzwoń lub napisz i zapytaj.
      </p>
      <h2 className='h2__header--adjust'>Nie czekaj, zapisz się już dziś!</h2>

      <div className='underline' />
      <p className='read--basic'>
       <span className='initial'>C</span>eny usług studyjnych (ministudio) i
       redaktorskich (copywriting) ustalane są po spotkaniu bądź rozmowie
       organizacyjnej ze zleceniodawcą. Wszystko zależy od charakteru zlecenia i
       czasu potrzebnego na jego realizację.
      </p>
     </div>
    </div>
   </div>
  );
 }
}

export default OfertaCennik;
