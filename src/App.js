import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import $ from 'jquery';

import './App.scss';

import Nav from './Components/Nav/Nav';
import Szkola from './Pages/Szkola/Szkola';
import Main from './Pages/Main/Main';
import Hamburger from './Components/Nav/Hamburger/Hamburger';
import Contact from './Pages/Contact/Contact';
import OfertaCennik from './Pages/OfertaCennik/OfertaCennik';
import Ministudio from './Pages/Ministudio/Ministudio';
import Copywriting from './Pages/Copywriting/Copywriting';
import NaszZespol from './Pages/AboutMe/NaszZespol';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Components/Footer/Footer';
import ArrowUp from './Components/Buttons/ArrowUp/ArrowUp';
import Cookies from './Pages/Cookies/Cookies';
import Rodo from './Pages/Rodo/Rodo';

import CookieBanner from 'react-cookie-banner';
import FacebookFeed from './Components/SocialMedia/FacebookFeed/FacebookFeed';
import Portfolio from './Pages/Portfolio/Portfolio';
import Loader from './Components/Loader/Loader';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
      displayArrow: false,
      prevScrollPosition: window.pageYOffset,
      scrollNav: false,
      isMobile: window.innerWidth < 740 ? true : false,

      facebook:
        'https://www.facebook.com/Centrum-J%C4%99zykowo-Muzyczne-Sound-English-256244201961789/',
      youtube: 'https://www.youtube.com/user/Bartek091991/videos?app=desktop',
      cosWiecej: 'https://coswiecej.bandcamp.com/releases',
      woopanka: 'https://woopanka.bandcamp.com/album/woopanka-ep',
      tomekMojsiuk: 'https://tomekmojsiuk.netlify.com/'
    };
  }

  handleResize = () => {
    this.setState({
      isMobile: window.innerWidth < 740 ? true : false
    });
  };

  handleHamburgerClick = () => {
    this.setState((prevState) => ({
      isClicked: !prevState.isClicked
    }));
  };

  handleNavItemClick = () => {
    setTimeout(() => {
      this.setState((prevState) => ({
        isClicked: !prevState.isClicked
      }));
    }, 500);
  };

  handlaNavbarToggle = () => {
    const nav = $('nav');

    if (window.pageYOffset >= 1) {
      nav.addClass('sticky__nav');
    } else {
      nav.removeClass('sticky__nav');
    }
  };

  handleArrowBehavior = () => {
    const arrow = $('.arrow__up--box');
    arrow.hide();

    if (window.pageYOffset >= 300) {
      arrow.css('display', 'flex');
    } else {
      arrow.css('display', 'none');
    }
  };

  handlescrollToTop = () => {
    $('body, html').animate(
      {
        scrollTop: $('.content__wrapper').offset().top - 100
      },
      600
    );
  };

  handleGoToTop = () => {
    $('body, html').animate(
      {
        scrollTop: $('.content__wrapper').offset().top - 100
      },
      0
    );
  };

  componentDidMount = () => {
    const arrow = $('.arrow__up--box');
    arrow.hide();
    $(window).on('scroll', this.handlaNavbarToggle);
    $(window).on('scroll', this.handleArrowBehavior);
    $(window).on('resize', this.handleResize);

    this.handlescrollToTop();
  };

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handlaNavbarToggle);
    window.removeEventListener('scroll', this.handleArrowBehavior);
    window.removeEventListener('resize', this.handleResize);
  };

  render() {
    const { isClicked, isMobile } = this.state;
    return (
      <div className='App'>
        <Hamburger onClick={this.handleHamburgerClick} isClicked={isClicked} />
        <Suspense fallback={<Loader />}>
          <BrowserRouter>
            <Nav handleNavDisplay={isClicked} handleNavItemClick={this.handleNavItemClick} />
            <Switch>
              <Route exact path='/' render={() => <Main scrollToTop={this.handleGoToTop} />} />
              <Route path='/o-szkole' render={() => <Szkola scrollToTop={this.handleGoToTop} />} />
              <Route path='/kontakt' render={() => <Contact scrollToTop={this.handleGoToTop} />} />
              <Route
                path='/oferta'
                render={() => <OfertaCennik scrollToTop={this.handleGoToTop} />}
              />
              <Route
                path='/ministudio'
                render={() => <Ministudio scrollToTop={this.handleGoToTop} />}
              />
              <Route
                path='/copywriting'
                render={() => <Copywriting scrollToTop={this.handleGoToTop} />}
              />
              <Route
                path='/nasz-zespol'
                render={() => <NaszZespol {...this.state} scrollToTop={this.handleGoToTop} />}
              />
              <Route path='/cookies' render={() => <Cookies scrollToTop={this.handleGoToTop} />} />
              <Route exact path='/rodo' render={() => <Rodo scrollToTop={this.handleGoToTop} />} />
              <Route
                path='/portfolio-dziennikarskie'
                render={() => <Portfolio scrollToTop={this.handleGoToTop} />}
              />
              <Route component={NotFound} />
            </Switch>

            <Route path='/youtube' render={() => (window.location.href = this.state.youtube)} />
            <Route
              path='/facebook'
              component={() => (window.location.href = this.state.facebook)}
            />
            <Route
              path='/tomek-mojsiuk'
              component={() => (window.location.href = this.state.tomekMojsiuk)}
            />
            <ArrowUp onClick={this.handlescrollToTop} />
            {!isMobile ? <FacebookFeed {...this.state} /> : ''}
            <Footer {...this.state} />
            <CookieBanner
              className={'cookie__banner'}
              styles={{
                banner: {
                  backgroundColor: 'rgba(60, 60, 60, 0.8)'
                },
                message: { fontWeight: 400 }
              }}
              cookieExpiration={{
                years: 0,
                days: 1,
                hours: 0
              }}
              dismissOnScroll={false}
              message='Ta strona wykorzystuje cookies'
              link={<a href='/cookies'>Polityka Cookies</a>}
              buttonMessage='Zgoda'
            />
          </BrowserRouter>
        </Suspense>
      </div>
    );
  }
}

export default App;
