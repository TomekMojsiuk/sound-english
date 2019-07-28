import React from "react";
import "../Pages.scss";
import "./AboutMe.scss";

import Loader from "../../Components/Loader/Loader";
import MyLink from "../../Components/Nav/NavLink/NavLink";

class AboutMe extends React.Component {
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
   <div id='o-mnie' className='content__wrapper'>
    {componentDidMount ? "" : <Loader />}
    <div className='flag--addon' />
    <div className='main__content'>
     <h1 className='title'>
      <span>{"O"}</span>
      {"mnie"}
     </h1>
     <div className='o-mnie__img' />
     <h2>
      <span>K</span>rótka biografia
     </h2>
     <p>
      Nazywam się <span>B</span>artłomiej <span>P</span>iwowarczyk. Urodziłem
      się 9 stycznia 1991 r, w związku z czym za swoją szczęśliwą liczbę uważam
      #91, a kolorowy Byk z Chicago Dennis Rodman jest jednym z moich ulubionych
      koszykarzy.
     </p>

     <p>
      Jestem absolwentem filologii angielskiej (specjalność nauczycielska –
      literaturoznawstwo) Akademii Pomorskiej w Słupsku i Uniwersytetu
      Gdańskiego. Obie prace pisałem na temat tekstów piosenek zespołu „Simon
      &amp; Garfunkel”.
     </p>

     <p>
      Mam doświadczenie w pracy nauczycielskiej z podopiecznymi w każdym wieku.
      Pracowałem w szkole publicznej oraz prywatnej, gdzie prowadziłem między
      innymi kursy maturalne. W pewnym momencie, z potrzeby niezależności i
      realizacji własnych wizji założyłem <span>S</span>OUND <span>E</span>
      NGLISH.
     </p>

     <h2>
      <span>P</span>oza językiem
     </h2>
     <p>
      Zajmuję się również działalnością muzyczną. Moja przygoda z muzyką
      rozpoczęła się 18 lat temu, gdy zacząłem naukę w Szkole Muzycznej I
      stopnia w Kościerzynie. Jej absolwentem (w klasie akordeonu) zostałem w
      roku 2005. Wówczas zacząłem kształcić się sam. W rezultacie poza
      akordeonem opanowałem grę na gitarze, harmonijce ustnej i pianinie.
      Później nauczyłem się też podstaw nagrywania, masteringu i obsługi
      kontrolera PAD oraz konsolety DJ.
     </p>

     <p>
      Jendak mimo wszystko moim głównym instrumentem jest głos, któremu
      poświęcam najwięcej czasu. Wielokrotnie brałem udział w warsztatach
      wokalnych, między innymi z PK Matczukiem, w zajęciach w Słupskim Ośrodku
      Kultury, czy Akademii Rocka w Gdańsku. W związku z tym w pozajęzykowej
      pracy dydaktycznej również skupiam się na treningach wokalnych.
     </p>

     <h2>
      <span>C</span>o jeszcze o mnie?
     </h2>
     <p>
      Od lat jestem aktywny scenicznie – działający w latach 2006 – 2011 zespół{" "}
      <i>WZROCK</i> pozwolił mi zdobyć pierwsze rockowo - bluesowe szlify
      sceniczne, a grająca obecnie grupa <i>No Trudno</i> pozwala mi skutecznie
      przedłużać tę fascynującą przygodę.
     </p>
     <p>
      Oprócz projektów grupowych działam też solo. Zrealizowałem projekty takie
      jak <i>WOOPANKA</i> i zajmuję się realizacją nagrań innych artystów.
      Chcesz posłuchać? Zapraszam Cię na mój profil na
      <MyLink target="_blank" exact to='/youtube'>
       Youtube
      </MyLink>
      , gdzie znajdziesz podsumowanie kilku ładnych lat mojej pracy.
     </p>
     {/* <p>
      <MyLink exact to='portfolio-dziennikarskie'>
       portfolio dziennikarskie
      </MyLink>
     </p>

     <p>
      <MyLink exact to='WOOPANKA – PROFIL BANDCAMP'>
       WOOPANKA – PROFIL BANDCAMP
      </MyLink>
     </p> */}

    </div>
   </div>
  );
 }
}

export default AboutMe;
