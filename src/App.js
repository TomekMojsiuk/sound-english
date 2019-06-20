import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.scss";

import Logo from "./Components/Logo/Logo";
import Content from "./Pages/Content/Content";

const App = () => {
 return (
  <div className='App'>
   <BrowserRouter>
    <Logo />
    <Content />
    
    <Route exact path='/' render={() => ""} />

    {/* <Route component={NotFound} /> */}
   </BrowserRouter>
  </div>
 );
};

export default App;
