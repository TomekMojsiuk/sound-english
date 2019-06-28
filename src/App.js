import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.scss";

import Nav from "./Components/Nav/Nav";
import Szkola from "./Pages/Szkola/Szkola";
import Main from "./Pages/Main/Main";
import Hamburger from "./Components/Nav/Hamburger/Hamburger";
import Contact from "./Pages/Contact/Contact";

class App extends React.Component {
 constructor(props) {
  super(props);
  this.state = {
   isClicked: false
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
     <div className='content'>
      <Route exact path='/' render={() => <Main />} />
      <Route exact path='/o-szkole' render={() => <Szkola />} />
      <Route exact path='/kontakt' render={() => <Contact />} />
      {/* <Route component={NotFound} /> */}
     </div>
    </BrowserRouter>
   </div>
  );
 }
}

export default App;
