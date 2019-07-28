import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import $ from "jquery";

import "./App.scss";

import Nav from "./Components/Nav/Nav";
import Szkola from "./Pages/Szkola/Szkola";
import Main from "./Pages/Main/Main";
import Hamburger from "./Components/Nav/Hamburger/Hamburger";
import Contact from "./Pages/Contact/Contact";
import OfertaCennik from "./Pages/OfertaCennik/OfertaCennik";
import Ministudio from "./Pages/Ministudio/Ministudio";
import Copywriting from "./Pages/Copywriting/Copywriting";
import AboutMe from "./Pages/AboutMe/AboutMe";
import NotFound from "./Pages/NotFound/NotFound";
import Footer from "./Components/Footer/Footer";
import ArrowUp from "./Components/Buttons/ArrowUp/ArrowUp";

class App extends React.Component {
 constructor(props) {
  super(props);
  this.state = {
   isClicked: false,
   displayArrow: false,
   prevScrollPosition: window.pageYOffset,
   scrollNav: false,

   facebook:
    "https://www.facebook.com/Centrum-J%C4%99zykowo-Muzyczne-Sound-English-256244201961789/",
   youtube: "https://www.youtube.com/user/Bartek091991/videos?app=desktop",
   tomekMojsiuk: "https://tomekmojsiuk.netlify.com/"
  };
 }

 handleHamburgerClick = () => {
  this.setState(prevState => ({
   isClicked: !prevState.isClicked
  }));
 };

 handleNavItemClick = () => {
  setTimeout(() => {
   this.setState(prevState => ({
    isClicked: !prevState.isClicked
   }));
  }, 500);
 };

 handlaNavbarToggle = () => {
  const nav = $("nav");

  if (window.pageYOffset >= 30) {
   nav.addClass("sticky__nav");
  } else {
   nav.removeClass("sticky__nav");
  }
 };

 handleArrowBehavior = () => {
  const arrow = $(".arrow__up--box");
  arrow.hide();

  if (window.pageYOffset >= 300) {
   arrow.css("display", "flex");
  } else {
   arrow.css("display", "none");
  }
 };

 handleArrowClick = () => {
  $("body, html").animate(
   {
    scrollTop: $(".content__wrapper").offset().top - 100
   },
   600
  );
 };

 componentDidMount = () => {
  const arrow = $(".arrow__up--box");
  arrow.hide();
  $(window).on("scroll", this.handlaNavbarToggle);
  $(window).on("scroll", this.handleArrowBehavior);
 };

 componentWillUnmount = () => {
  window.removeEventListener("scroll", this.handlaNavbarToggle);
  window.removeEventListener("scroll", this.handleArrowBehavior);
 };

 render() {
  const { isClicked, facebook, youtube, tomekMojsiuk } = this.state;
  return (
   <div className='App'>
    <Hamburger onClick={this.handleHamburgerClick} isClicked={isClicked} />
    <BrowserRouter>
     <Nav
      handleNavDisplay={isClicked}
      handleNavItemClick={this.handleNavItemClick}
     />
     <Switch>
      <Route exact path='/' render={() => <Main />} />
      <Route exact path='/o-szkole' render={() => <Szkola />} />
      <Route exact path='/kontakt' render={() => <Contact />} />
      <Route exact path='/oferta' render={() => <OfertaCennik />} />
      <Route exact path='/ministudio' render={() => <Ministudio />} />
      <Route exact path='/copywriting' render={() => <Copywriting />} />
      <Route exact path='/o-mnie' render={() => <AboutMe youtubeLink={youtube} />} />
      {/* <Route exact path='/portfolio-dziennikarskie' render={() => ""} /> */}
      <Route component={NotFound} />
      
     </Switch>
     <Route
      exact
      path='/youtube'
      render={() => (window.location.href = this.state.youtube)}
     />
     <Route
      exact
      path='/facebook'
      component={() => (window.location.href = this.state.facebook)}
     />
     {/* <Route
      exact
      path='/tomek-mojsiuk'
      component={() => (window.location.href = this.state.tomekMojsiuk)}
     /> */}
<ArrowUp onClick={this.handleArrowClick} />
     <Footer facebook={facebook} youtube={youtube} tomekMojsiuk={tomekMojsiuk} />
    </BrowserRouter>
   </div>
  );
 }
}

export default App;
