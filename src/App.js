import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

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
     <Switch>
     <Route exact path='/' render={() => <Main />} />
     <Route exact path='/o-szkole' render={() => <Szkola />} />
     <Route exact path='/kontakt' render={() => <Contact />} />
     <Route exact path='/oferta' render={() => <OfertaCennik />} />
     <Route exact path='/ministudio' render={() => <Ministudio />} />
     <Route exact path='/copywriting' render={() => <Copywriting />} />
     <Route exact path='/o-mnie' render={() => <AboutMe />} />
     {/* <Route exact path='/portfolio-dziennikarskie' render={() => ""} /> */}
     <Route component={NotFound} />
     </Switch>
    </BrowserRouter>
   </div>
  );
 }
}

export default App;
