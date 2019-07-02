import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import $ from 'jquery';

import "./App.scss";

import Nav from "./Components/Nav/Nav";
import Szkola from "./Pages/Szkola/Szkola";
import Main from "./Pages/Main/Main";
import Hamburger from "./Components/Nav/Hamburger/Hamburger";
import Contact from "./Pages/Contact/Contact";
import ArrowUp from "./Components/Buttons/ArrowUp/ArrowUp";

class App extends React.Component {
 constructor(props) {
  super(props);
  this.state = {
   isClicked: false,
   displayArrow: window.pageYOffset
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

arrowUpDisplay = () => {
    
    // $(document).on('scroll', function() {
    //     if (window.pageYOffset >= 500) {
    //         this.setState({
    //             displayArrow: true
    //         })
    //         // console.log(displayArrow);
    //     } else {
    //         console.log('scrolled up');
    //     }
    //    });
    
}

 render() {
  const { isClicked } = this.state; 
  return (
   <div className='App'>
    <Hamburger onClick={this.handleHamburgerClick} isClicked={isClicked} />
    <ArrowUp />
    <BrowserRouter>
     <Nav
      handleNavDisplay={isClicked}
      handleNavItemClick={this.handleNavItemClick}
     />
     <Route exact path='/' render={() => <Main />} />
     <Route exact path='/o-szkole' render={() => <Szkola />} />
     <Route exact path='/kontakt' render={() => <Contact />} />
     {/* <Route component={NotFound} /> */}
    </BrowserRouter>
   </div>
  );
 }
}

export default App;
