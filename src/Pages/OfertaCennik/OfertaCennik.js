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

  // TODO fix code here. Delete opacity and color2 variables. Improve child component.
  let opacity = "0";
  let color2 = `rgba(62, 72, 128, ${opacity})`;

  return (
   <div className='content__wrapper'>
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
        <div>
         <p>
          <span>K</span>urs UP TO DATE to zajęcia rozwijająco – utrwalające
          oparte synchronicznie na programie realizowanym w szkole publicznej
          (szkoła podstawowa, liceum).
         </p>
         <p>
          <span>P</span>rzygotujemy Cię do sprawdzianów, będziemy ćwiczyć
          aktualny materiał, który przerabiasz w szkole i poszerzymy Twoją
          wiedzę. Wszystko odbędzie się w przyjemnej atmosferze, w związku z
          którą szybko poczujesz, że angielski jest fajny, nawet jeśli póki co
          trudno Ci w to uwierzyć.
         </p>
        </div>
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
        <div>
         <p>
          <span>K</span>ompleksowe przygotowanie do matury podstawowej i
          rozszerzonej w nowej formule. Nauczysz się technik i systemów, które
          sprawią, że każdy rodzaj zadań maturalnych okaże się prosty i
          wykonalny.
         </p>
         <p>
          <span>P</span>rzygotowanie do matury rozszerzonej także jest procesem
          przyjemnym i inspirującym, a kilka prostych rad pomoże Ci uwierzyć, że
          „rozszerzona” nie znaczy „straszna”.
         </p>
         <p>
          <span>J</span>eśli boisz się matury ustnej, a mówienie po angielsku to
          dla Ciebie katorga podobna do słuchania polskiego country
          <span>*</span>, Sound English jest absolutnie miejscem dla Ciebie –
          poćwiczymy wymowę, płynność wypowiedzi i akcent, a niecodzienny system
          pracy konwersacyjnej (nagrywanie i analiza własnych słów), pomoże Ci
          zacząć mówić skutecznie. Wanna try?
         </p>
         <p>
          <span>*</span>Z wyjątkiem zespołu „Babsztyl”. „Babsztyl” jest w
          porządku, Sound English poleca.
         </p>
        </div>
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
        <div>
         <p>
          <span>E</span>gzamin First Certificate in English, zwany też B2 First,
          to nomen omen pierwszy z poważnych egzaminów British Council. Niekiedy
          może wydawać się kwestią tajemniczą lub trudną, ale (jak zwykle),
          absolutnie taki nie jest.
         </p>
         <p>
          <span>F</span>CE może być początkiem Twojej poważnej, lingwistycznej
          drogi egzaminacyjnej. Jak wiadomo „papierki”, choć de facto nie są
          niezbędne, warto zbierać. Sound English pomoże Ci także w tej kwestii.
         </p>
        </div>
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
        <div>
         <p>
          <span>T</span>e zajęcia w Sound English to lekcje oparte na autorskim
          programie dostosowanym do wymagań edukacyjnych uczniów w każdym wieku
          połączone z elementami edukacji muzycznej:
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
          <span>J</span>eśli chcesz uczyć się angielskiego śpiewając i grając, a
          w międzyczasie zarejestrować swoje postępy na nośnikach audio-video,
          studio Sound English to idealne miejsce dla Ciebie.
         </p>
         <p>
          <span>P</span>oznasz sprzęt nagrywający, programy obróbki dźwięku,
          będziesz mogła/mógł sięgnąć po gitarę, bądź usiąść przy klawiszach.
          Wszystko to powiązane będzie z angielskim słownictwem i rozwojem
          językowym. To naprawdę możliwe. I w Sound English naprawdę się to
          dzieje.
         </p>
        </div>
       }
       bgColor={color2}
      />

      <TilePopUpDescription
       imageClassName={"bluecollar-rush"}
       mainText={
        <h2>
         <span>W</span>ORKING CLASS HERO
        </h2>
       }
       popupText={
        <div>
         <p>
          <span>K</span>urs przyspieszony dla osób wyjeżdżających do pracy
          zagranicę – kładziemy tu nacisk na niezbędne słownictwo i systemy
          skutecznej komunikacji, ćwiczenia gramatyczne ograniczając do minimum.
         </p>
         <p>
          <span>P</span>rogram i system prowadzenia zajęć ustalany jest z Tobą
          na podstawie charakteru pracy, którą zamierzasz podjąć zagranicą, a
          także czasu, który pozostał do wyjazdu.
         </p>
         <p>
          <span>J</span>eżeli planujesz wyjazd zarobkowy, albo swoją przyszłość
          na stałe wiążesz z krajem innym niż Polska, a chwilowo Twój angielski
          kończy się na „Hello” i „Chałupy welcome to”, nie zwlekaj, tylko
          zadzwoń – możemy sobie pomóc.
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
          „<span>D</span>la mnie już raczej za późno, w młodości wmuszano we
          mnie rosyjski, a angielskiego chyba już nigdy się nie nauczę” – jeśli
          tego typu słowa powtarzasz nawykowo od wielu lat, czas to zmienić.
         </p>
         <p>
          <span>K</span>urs „About time!” to zajęcia konwersacyjne dostosowane
          do uczniów w każdym wieku, zgodnie z ich preferencjami i potrzebami.
         </p>
         <p>
          <span>N</span>a wiedzę nigdy nie jest za późno, a na wymówki jest
          zawsze za wcześnie. Sound English czeka na kontakt!
         </p>
        </div>
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
        <div>
         <p>
          <span>J</span>eżeli nie chcesz skracać dziecku dzieciństwa nudnymi,
          szkolnymi zajęciami językowymi, a jednocześnie chcesz, aby posiadło
          ciekawą wiedzę anglistyczną w przyjemny sposób, to pełna piosenek i
          gier przygoda w Sound English będzie dla Ciebie i Twojego dziecka
          idealnym wyborem.
         </p>
         <p>
          <span>Z</span>ajęcia te są nie tylko odtwórcze (śpiewanie piosenek,
          zajęcia polisensoryczne), ale także kreatywne. Nie zdziw się, jeśli
          wierszyki, które od jakiegoś czasu kreśli Twoja latorośl, zmienią się
          nagle w teksty angielskie połączone z ciekawą melodią. Skąd się to
          wzięło dowiesz się od małego Twórcy – Twojego dziecka.
         </p>
        </div>
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
  );
 }
}

// TODO Oferta i Cennik - Czy brat Bartka zrobi grafikę do kafelków?

export default OfertaCennik;
