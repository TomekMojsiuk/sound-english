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

 render() {
  return (
   <div className='App'>
    <Hamburger onClick={this.handleHamburgerClick} isClicked={this.state.isClicked}/>
    <BrowserRouter>
     <Nav handleNavDisplay={this.state.isClicked}/>
     <div className='content'>
      <Route exact path='/' render={() => <Main />} />
      <Route exact path='/o-szkole' render={() => <Szkola />} />
      <Route exact path='/kontakt' render={() => <Contact />} />
      {/* <Route component={NotFound} /> */}
     </div>
    </BrowserRouter>
    <div className='flag' />
   </div>
  );
 }
}

export default App;
