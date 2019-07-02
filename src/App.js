import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.scss";

import Nav from "./Components/Nav/Nav";
import Szkola from "./Pages/Szkola/Szkola";
import Main from "./Pages/Main/Main";
import Hamburger from "./Components/Nav/Hamburger/Hamburger";
import Contact from "./Pages/Contact/Contact";
import OfertaCennik from "./Pages/OfertaCennik/OfertaCennik";

class App extends React.Component {
 constructor(props) {
  super(props);
  this.state = {
   isClicked: false,
   displayArrow: false
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

 render() {
  const { isClicked } = this.state; 
  return (
   <div className='App'>
    <Hamburger onClick={this.handleHamburgerClick} isClicked={isClicked} />
    <BrowserRouter>
     <Nav
      handleNavDisplay={isClicked}
      handleNavItemClick={this.handleNavItemClick}
     />
     <Route exact path='/' render={() => <Main />} />
     <Route exact path='/o-szkole' render={() => <Szkola />} />
     <Route exact path='/kontakt' render={() => <Contact />} />
     <Route exact path='/oferta' render={() => <OfertaCennik />} />
     {/* <Route component={NotFound} /> */}
    </BrowserRouter>
   </div>
  );
 }
}

export default App;
