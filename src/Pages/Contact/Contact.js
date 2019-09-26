import React from 'react';
import '../Pages.scss';
import './Contact.scss';

import Loader from '../../Components/Loader/Loader';
import ContactForm from '../../Components/ContactForm/ContactForm';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      componentDidMount: false
    };
  }

  componentWillMount() {}

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
      <div className='content__wrapper'>
        {componentDidMount ? '' : <Loader />}
        <div className='flag--addon' />
        <div className='contact__info'>
          <div className='contact__info--item'>
            <div className='icon mobile' />
            <p>{'+48 605 034 489'}</p>
          </div>

          <div className='contact__info--item'>
            <div className='icon email' />
            <p>{'soundenglishschool@gmail.com'}</p>
          </div>

          <div className='contact__info--item'>
            <div className='icon home' />
            <div className='contact__info--item--details'>
              <h2>{'Siedziba szkoły'}</h2>
              <p>{'ul. Marii Skłodowskiej Curie 9a'}</p>
              <p>{'83-400 Kościerzyna'}</p>
              <div className='underline'></div>
              <h2>{'Adres korespondencyjny'}</h2>
              <p>{'Centrum Językowo – Muzyczne „SOUND ENGLISH”'}</p>
              <p>{'Bartłomiej Piwowarczyk'}</p>
              <p>{'ul. Małcużyńskiego 6/C1'}</p>
              <p>{'83-400 Kościerzyna'}</p>
              <div className='underline'></div>
            </div>
          </div>
        </div>
        <div className='contact__form--container'>
          <ContactForm />
        </div>
      </div>
    );
  }
}

export default Contact;
