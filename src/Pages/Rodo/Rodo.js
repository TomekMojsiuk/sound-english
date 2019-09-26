import React from 'react';
import '../Pages.scss';
import './Rodo.scss';

import Loader from '../../Components/Loader/Loader';
import MyLink from '../../Components/Nav/NavLink/NavLink';

class Rodo extends React.Component {
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
      <div id='rodo' className='content__wrapper'>
        {componentDidMount ? '' : <Loader />}
        <div className='flag--addon' />
        <div className='main__content'>
          <h1 className='title'>
            <span>{'R'}</span>
            {'odo'}
          </h1>
          <h2>
            <span>O</span>bowiązek informacyjny dotyczący ochrony Twoich danych osobowych
          </h2>
          <div className='underline' />
          <div className='rodo__img' />

          <p>
            25 maja 2018 r. weszło w życie Rozporządzenie Parlamentu Europejskiego i Rady (UE)
            2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z
            przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz
            uchylenia dyrektywy 95/46/WE (RODO), czyli nowe unijne rozporządzenie, którego celem
            jest unowocześnienie oraz ujednolicenie regulacji dotyczących ochrony danych osobowych
            obowiązujących na terenie UE.
          </p>
          <h2>
            <span>K</span>to jest administratorem Twoich danych osobowych?
          </h2>
          <div className='underline' />
          <p>
            Administratorem, czyli podmiotem decydującym o tym, jak będą wykorzystywane Twoje dane
            osobowe, jest:
          </p>
          <p>
            Centrum Językowo – Muzyczne „SOUND ENGLISH” Bartłomiej Piwowarczyk
            <br /> <span>N</span>IP: 5911668679, <span>R</span>EGON: 367506459
            <br /> ul. Małcużyńskiego 6/C1
            <br /> 83-400 Kościerzyna
          </p>
          <p>
            tel: +48 605 034 489
            <br />
            e-mail:
            <a href='mailto:soundenglish@gmail.com'>soundenglish@gmail.com</a>
          </p>

          <h2>
            <span>J</span>ak się z nami skontaktować?:
          </h2>
          <div className='underline' />
          <p>
            Masz pytania odnośnie przetwarzania Twoich danych osobowych? Zadzwoń, napisz na adres
            korespondencyjny lub mailowy, lub skorzystaj z formularza kontaktowego:
          </p>
          <MyLink to='/kontakt'>Skontaktuj się z nami poprzez formularz</MyLink>

          <p>
            <span>A</span>dres kosepondencyjny:
          </p>
          <p>
            Centrum Językowo – Muzyczne „SOUND ENGLISH” Bartłomiej Piwowarczyk
            <br /> ul. Małcużyńskiego 6/C1
            <br /> 83-400 Kościerzyna
          </p>
          <p>tel: +48 605 034 489 </p>
          <p>
            email: <a href='mailto:soundenglish@gmail.com'>soundenglish@gmail.com</a>
          </p>

          <h2>W jakim celu przetwarzamy Twoje dane osobowe?</h2>
          <div className='underline' />
          <p>Twoje dane osobowe możemy przetwarzać w celu:</p>
          <ul>
            <li>realizacji kursów językowych,</li>
            <li>
              realizacji nagrań dźwiękowych i publikowania tych nagrań w serwisach www (np. youtube,
              facebook),
            </li>
            <li>współtworzenia tekstów do utworów muzycznych</li>
          </ul>
          <p>Dodatkowo:</p>
          <ul>
            <li>
              Twoje dane osobowe przetwarzane będą na podstawie art. 6 ust 1 lit. b RODO, tj. w
              sytuacji gdy przetwarzanie jest niezbędne do zawarcia i wykonania umowy, której stroną
              jest osoba, której dane dotyczą, lub do podjęcia działań na żądanie osoby, której dane
              dotyczą,
            </li>
          </ul>

          <p>
            Pmamiętaj, że dane osobowe podajesz nam dobrowolnie, ale czasem ich podanie jest
            konieczne do zrealizowania usługi.
          </p>
          <h2>
            <span>K</span>to jest odbiorcą Twoich danych osobowych?
          </h2>
          <div className='underline' />
          <ul>
            <li>Uprawnione organy i instytucje publiczne.</li>
            <li> Podmioty świadczące usługi obsługi księgowej lub prawnej.</li>
            <li>
              Wybrani kontrahenci, z którymi współpracuje Centrum jęwykowo-muzyczne "Sound English"
              (np. drukarnia - wydruk dyplomów dla kursantów).
            </li>
          </ul>
          <h2>
            <span>J</span>ak długo przetwarzamy Twoje dane sobowe?
          </h2>
          <div className='underline' />
          <p>
            Twoje dane przetwarzamy przez okres trwania umowy na kurs językowy lub na inną
            świadczoną przez nas usługę.
          </p>

          <h2>
            <span>P</span>rawa klienta
          </h2>
          <div className='underline' />
          <p>Pamiętaj, że masz prawo do:</p>
          <ul>
            <li>dostępu do swoich danych osobowych i żądania ich kopii,</li>
            <li>sprostowania swoich danych osobowych,</li>

            <li>żądania ograniczenia przetwarzania swoich danych,</li>
            <li>przenoszenia danych,</li>
            <li>
              usunięcia danych, jeżeli nie następują przesłanki wyłączające, wynikające z art. 17
              ust. 3 RODO,
            </li>
            <li>wniesienia sprzeciwu wobec przetwarzania danych osobowych.</li>
          </ul>
          <p>
            Z uprawnień możesz skorzystać kontaktując się z nami za pośrednictwem poczty tradycyjnej
            lub elektronicznej
            <br /> (Patrz: sekcja "<span>J</span>ak się z nami skontaktować?"
          </p>
          <p>
            Pamiętaj również, że przysługuje Ci prawo wniesienia skargi do Organu Nadzorczego
            nadzorującego ochronę danych osobowych (do 25 maja 2018 r. GIODO, od 25 maja 2018 r.
            PUODO), gdy uznasz, iż ich przetwarzanie narusza unijne Rozporządzenie Parlamentu
            Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób
            fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu
            takich danych oraz uchylenia dyrektywy 95/46/WE (tzw. ogólne rozporządzenie o ochronie
            danych osobowych, w skrócie RODO).
          </p>
        </div>
      </div>
    );
  }
}

export default Rodo;
