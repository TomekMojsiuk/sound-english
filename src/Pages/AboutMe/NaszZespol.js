import React, { Suspense } from 'react';
import '../Pages.scss';
import './NaszZespol.scss';

import Loader from '../../Components/Loader/Loader';

class NaszZespol extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      componentDidMount: false
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState((prevState) => ({
        componentDidMount: !prevState.componentDidMount
      }));
    }, 1000);

    this.props.scrollToTop();
  }

  render() {
    const { componentDidMount } = this.state;
    const { youtube, cosWiecej, woopanka } = this.props;
    return (
      <Suspense fallback={<Loader />}>
        <div id='nasz-zespol' className='content__wrapper'>
          {componentDidMount ? '' : <Loader />}
          <div className='flag--addon' />
          <div className='main__content'>
            <h1 className='title'>
              <span className='initial'>N</span>asz zespół
            </h1>
            <h2 className='team-member__name'>Bartłomiej Piwowarczyk</h2>
            <div className='nasz-zespol__img1' />
            <h2>
              <span className='initial'>K</span>rótka biografia
            </h2>
            <p>
              Nazywam się <span className='initial'>B</span>artłomiej{' '}
              <span className='initial'>P</span>iwowarczyk. Urodziłem się 9 stycznia 1991 r, w
              związku z czym za swoją szczęśliwą liczbę uważam #91, a kolorowy Byk z Chicago Dennis
              Rodman jest jednym z moich ulubionych koszykarzy.
            </p>
            <p>
              Jestem absolwentem filologii angielskiej (specjalność nauczycielska –
              literaturoznawstwo) Akademii Pomorskiej w Słupsku i Uniwersytetu Gdańskiego. Obie
              prace pisałem na temat tekstów piosenek zespołu „Simon &amp; Garfunkel”.
            </p>
            <p>
              Mam doświadczenie w pracy nauczycielskiej z podopiecznymi w każdym wieku. Pracowałem w
              szkole publicznej oraz prywatnej, gdzie prowadziłem między innymi kursy maturalne. W
              pewnym momencie, z potrzeby niezależności i realizacji własnych wizji założyłem{' '}
              <span className='initial'>S</span>OUND <span className='initial'>E</span>
              NGLISH.
            </p>
            <h2>
              <span className='initial'>P</span>oza językiem
            </h2>
            <p>
              Zajmuję się również działalnością muzyczną. Moja przygoda z muzyką rozpoczęła się 18
              lat temu, gdy zacząłem naukę w Szkole Muzycznej I stopnia w Kościerzynie. Jej
              absolwentem (w klasie akordeonu) zostałem w roku 2005. Wówczas zacząłem kształcić się
              sam. W rezultacie poza akordeonem opanowałem grę na gitarze, harmonijce ustnej i
              pianinie. Później nauczyłem się też podstaw nagrywania, masteringu i obsługi
              kontrolera PAD oraz konsolety DJ.
            </p>
            <p>
              Jendak mimo wszystko moim głównym instrumentem jest głos, któremu poświęcam najwięcej
              czasu. Wielokrotnie brałem udział w warsztatach wokalnych, między innymi z PK
              Matczukiem, w zajęciach w Słupskim Ośrodku Kultury, czy Akademii Rocka w Gdańsku. W
              związku z tym w pozajęzykowej pracy dydaktycznej również skupiam się na treningach
              wokalnych. W 2018 r. uzyskałem państwowe uprawnienia do nauczania muzyki w szkole
              podstawowej i ponadpodstawowej.
            </p>
            <h2>
              <span className='initial'>A</span>ktywna działalność muzyczna
            </h2>
            <p>
              Od lat jestem aktywny scenicznie – działający w latach 2006 – 2011 zespół{' '}
              <i>WZROCK</i> pozwolił mi zdobyć pierwsze rockowo - bluesowe szlify sceniczne, a
              grająca obecnie grupa{' '}
              <a className='nav__item' href={cosWiecej} target='_blank' rel='noopener noreferrer'>
                <i>Coś Więcej</i>
              </a>{' '}
              pozwala mi skutecznie przedłużać tę fascynującą przygodę.
            </p>
            <p>
              Oprócz projektów grupowych działam też solo. Zrealizowałem projekty takie jak{' '}
              <a className='nav__item' href={woopanka} target='_blank' rel='noopener noreferrer'>
                <i>WOOPANKA</i>
              </a>{' '}
              i zajmuję się realizacją nagrań innych artystów. Chcesz posłuchać? Zapraszam Cię na
              mój profil na
              <a className='nav__item' href={youtube} target='_blank' rel='noopener noreferrer'>
                Youtube
              </a>
              , gdzie znajdziesz podsumowanie kilku ładnych lat mojej pracy.
            </p>
            <p>
              Obecnie jestem wokalistą w zespole funkowym oraz pianistą w metalowym tribute bandzie
              zespołu HIM.
            </p>
            <h2 className='team-member__name'>Michał Kleinszmidt</h2>
            <div className='nasz-zespol__img2' />
            <p>
              Aktywny scenicznie gitarzysta, <span className='initial'>M</span>ichał{' '}
              <span className='initial'>K</span>leinszmidt - absolwent kierunku Edukacja artystyczna
              w zakresie sztuki muzycznej Akademii Pomorskiej w Słupsku, obecnie czynnie działający
              jako gitarzysta i saksofonista zespołu Lares.
            </p>
          </div>
        </div>
      </Suspense>
    );
  }
}

export default NaszZespol;
