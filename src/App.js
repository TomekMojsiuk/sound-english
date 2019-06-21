import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.scss";

import Nav from "./Components/Nav/Nav";
import Szkola from "./Pages/Szkola/Szkola";
import Main from "./Pages/Main/Main";

const App = () => {
 return (
  <div className='App'>
   <BrowserRouter>
   <Nav />
    <div className="content">
    <Route exact path='/' render={() => <Main />} />
    <Route exact path='/o-szkole' render={() => <Szkola />} />
    {/* <Route component={NotFound} /> */}
    </div>
   </BrowserRouter>
   <div className="flag"></div>
  </div>
 );
};

export default App;
