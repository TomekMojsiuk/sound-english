import React from 'react';
import '../Pages.scss';
import './Cookies.scss';

import Loader from '../../Components/Loader/Loader';

class Cookies extends React.Component {
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

    return (
      <div id='cookies' className='content__wrapper'>
        {componentDidMount ? '' : <Loader />}
        <div className='flag--addon' />
        <div className='main__content'>
          <h1 className='title'>
            <div className='cookies__img' />
            <span>{'P'}</span>
            {'olityka Cookies'}
          </h1>
          <p>
            Poniższa Polityka Cookies określa zasady zapisywania i uzyskiwania dostępu do danych na
            urządzeniach użytkowników korzystających z Serwisu do celów świadczenia usług drogą
            elektroniczną przez administratora serwisu.
          </p>
          <h2>
            <span>§1</span> Definicje
          </h2>
          <div className='underline' />

          <ul>
            <li>
              <span>Serwis</span> - serwis internetowy działający pod adresem www.soundenglish.pl
            </li>
            <li>
              <span>Serwis zewnętrzny</span> - serwis internetowe partnerów, usługodawców lub
              usługobiorców Administratora{' '}
            </li>
            <li>
              <span>Administrator</span> - firma CENTRUM JĘZYKOWO-MUZYCZNE "SOUND ENGLISH"
              BARTŁOMIEJ PIWOWARCZYK, prowadząca działalność pod adresem:
              <p className='address__info'>
                ul. Witolda Małcużyńskiego, nr 6C, lok. 1,
                <br /> 83-400 Kościerzyna,
                <br /> NIP: 5911668679, REGON: 367506459,
              </p>
              świadcząca usługi drogą elektroniczną za pośrednictwem Serwisu oraz przechowująca i
              uzyskująca dostęp do informacji w urządzeniach Użytkownika
            </li>
            <li>
              <span>Użytkownik</span> - osba fizyczna, dla której Administrator świadczy usługi
              drogą elektroniczna za pośrednictwem Serwisu.
            </li>
            <li>
              <span>Urządzenie</span> - elektroniczne urządzenie wraz z oprogramowaniem, za
              pośrednictwem, którego Użytkownik uzyskuje dostęp do Serwisu
            </li>
            <li>
              <span>Cookies (ciasteczka)</span> - dane tekstowe gromadzone w formie plików
              zamieszczanych na Urządzeniu Użytkownika
            </li>
          </ul>

          <h2>
            <span>§2</span> Rodzaje cookies
          </h2>
          <div className='underline' />

          <ul>
            <li>
              <span>Cookies wewnętrzne</span> - pliki zamieszczane i odczytywane z Urządzenia
              Użytkownika przes system teleinformatyczny Serwisu
            </li>
            <li>
              <span>Cookies zewnętrzne</span> - pliki zamieszczane i odczytywane z Urządzenia
              Użytkownika przez systemy teleinformatyczne Serwisów zewnętrznych
            </li>
            <li>
              <span>Cookies sesyjne</span> - pliki zamieszczane i odczytywane z Urządzenia
              Użytkownika przez Serwis lub Serwisy zewnętrzne podczas jednej sesji danego
              Urządzenia. Po zakończeniu sesji pliki są usuwane z Urządzenia Użytkownika.
            </li>
            <li>
              <span>Cookies trwałe</span> - pliki zamieszczane i odczytywane z Urządzenia
              Użytkownika przez Serwis lub Serwisy zewnętrzne do momentu ich ręcznego usunięcia.
              Pliki nie są usuwane automatycznie po zakończeniu sesji Urządzenia chyba że
              konfiguracja Urządzenia Użytkownika jest ustawiona na tryb usuwanie plików Cookie po
              zakończeniu sesji Urządzenia.
            </li>
          </ul>

          <h2>
            <span>§3</span> Bezpieczeństwo
          </h2>
          <div className='underline' />

          <ul>
            <li>
              <span>Mechanizmy składowania i odczytu</span> - Mechanizmy składowania i odczytu
              Cookies nie pozwalają na pobierania jakichkolwiek danych osobowych ani żadnych
              informacji poufnych z Urządzenia Użytkownika. Przeniesienie na Urządzenie Użytkownika
              wirusów, koni trojańskich oraz innych robaków jest praktynie niemożliwe.
            </li>
            <li>
              <span>Cookie wewnętrzne</span> - zastosowane przez Administratora Cookie wewnętrzne są
              bezpieczne dla Urządzeń Użytkowników
            </li>
            <li>
              <span>Cookie zewnętrzne</span> - za bezpieczeństwo plików Cookie pochodzących od
              partnerów Serwisu Administrator nie ponosi odpowiedzialności. Lista partnerów
              zamieszczona jest w dalszej części Polityki Cookie.
            </li>
          </ul>

          <h2>
            <span>§4</span> Cele, do których wykorzytujemy pliki cookie
          </h2>
          <div className='underline' />
          <ul>
            <li>
              <span>Serwowanie usług multimedialnych</span> - Administrator oraz Serwisy zewnętrzne
              wykorzystuje pliki Cookie do serwowania Użytkownikom usług multimedialnych.
            </li>
            <li>
              <span>Usługi społecznościowe</span> - Administrator oraz Serwisy zewnętrzne
              wykorzystują pliki Cookie do wsparcia usług społecznościowych.
            </li>
            <li>
              <span>Formularze</span> - Administrator wykorzystuje pliki Cookie do celów wsparcia
              komunikacji poprzez formularz kontaktowy w Serwisie.
            </li>
          </ul>

          <h2>
            <span>§5</span> Serwisy zewnętrzne
          </h2>
          <div className='underline' />
          <p>
            Administrator współpracuje z następującymi serwisami zewnętrznymi, które mogą
            zamieszczać pliki Cookie na Urządzeniach Użytkownika:
          </p>
          <ul>
            <li>Facebook</li>
            <li>Youtube</li>
          </ul>

          <h2>
            <span>§6</span> Możliwości określenia warunków przechowywania i uzyskiwania dostępu na
            urządzeniach użytkownika przez Serwis i serwisy zewnętrzne
          </h2>
          <div className='underline' />

          <ul>
            <li>
              Użytkownik może w dowolnym momencie samodzielnie zmienić ustawienia dotyczące
              zapisywania, usuwania oraz dostępu do danych zapisanych plików Cookies
            </li>
            <li>
              Informacje o sposobie wyłączenia plików Cookie w najpopularniejszych przeglądarkach
              komputerowych i urządzeń mobilnych znajdują się{' '}
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://www.wikihow.com/Disable-Cookies'>
                tutaj
              </a>
            </li>
            <li>
              Użytkownik może w dowolnym momencie usunąć wszelkie zapisane do tej pory pliki Cookie
              korzystając z narzędzi Urządzenia Użytkownika za pośrednictwem którego Użytkowanik
              korzysta z usług Serwisu.
            </li>
          </ul>

          <h2>
            <span>§7</span> Wymagania serwisu
          </h2>
          <div className='underline' />
          <ul>
            <li>
              Ograniczenie zapisu i dostępu do plików Cookie na Urządzeniu Użytkownika może
              spowodować nieprawidłowe działanie niektórych funkcji Serwisu.
            </li>
            <li>
              Administrator nie ponosi żadnej odpowiedzialności za nieprawidłowo działające funkcje
              Serwisu w przypadku gdy Użytkownik ograniczy w jakikolwiek sposób możliwość
              zapisywania i odczytu plików Cookie.
            </li>
          </ul>

          <h2>
            <span>§8</span> Zmiany w polityce Cookie
          </h2>
          <div className='underline' />

          <ul>
            <li>
              Administrator zastrzega sobie prawo do dowolnej zmiany niniejszej Polityki Cookie bez
              konieczności informowania o tym użytkowników.
            </li>
            <li>Wprowadzone zmiany w Polityce Cookie zawsze będą publikowane na tej stronie.</li>
            <li>Wprowadzone zmiany wchodzą w życie w dniu publikacji Polityki Cookie.</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Cookies;
