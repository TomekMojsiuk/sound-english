import React from 'react';
import '../Pages.scss';
import './Ministudio.scss';

import Loader from '../../Components/Loader/Loader';

class Ministudio extends React.Component {
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
      <div id='ministudio' className='content__wrapper'>
        {componentDidMount ? '' : <Loader />}
        <div className='flag--addon' />
        <div className='studio__img--desktop' />
        <div className='main__content'>
          <h1 className='title'>
            <span className='initial'>M</span>inistudio
          </h1>
          <div className='studio__img--mobile'></div>
          <h2>W ramach Ministudio homerecordingowego SOUND ENGLISH oferuję</h2>

          <ul>
            <li>
              <span className='initial'>S</span>tudyjną rejestrację wokalistów, instrumentalistów,
              małych zespołów wokalnych bądź wokalno – instrumentalnych
            </li>
            <li>
              <span className='initial'>P</span>rodukcję reklam dźwiękowych, np. na potrzeby radia
            </li>
            <li>
              <span className='initial'>M</span>ix i mastering gotowych ścieżek
            </li>
            <li>
              <span className='initial'>N</span>agrania lektorskie w językach angielskim i polskim
            </li>
            <li>
              <span className='initial'>S</span>tworzenie i rejestrację muzyki do dowolnych celów
              np. relaksacyjnej bądź ilustracyjnej
              {' ('}np. do filmów albo clipów na YouTube{')'}
            </li>
            <li>
              <span className='initial'>S</span>
              tworzenie melodii i aranżacji do gotowego tekstu {' ('}wraz z konsultacją tekstową
              {')'}
            </li>
            <li>
              <span className='initial'>P</span>isanie tekstów piosenek
            </li>
            <div className='underline' />
          </ul>
          <p>
            <span className='initial'>S</span>tudio dysponuje własnym, profesjonalnym sprzętem
            muzycznym i studyjnym oraz mnóstwem kreatywnych pomysłów właściciela
          </p>
        </div>
      </div>
    );
  }
}

export default Ministudio;
