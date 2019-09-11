import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "../../Pages/Pages.scss";
import "./Portfolio.scss";

import Loader from "../../Components/Loader/Loader";
import MyLink from "../../Components/Nav/NavLink/NavLink";
import Dashboard from "../../Components/Portfolio/Dashboard/Dashboard";
import KimJestMuzykZZawodu from "../../Components/Portfolio/PortfolioArticles/KimJestMuzykZZawodu";

class Portfolio extends React.Component {
 constructor(props) {
  super(props);
  this.state = {
   componentDidMount: false,
   btnReadMoreClicked: false
  };
 }

 componentDidMount() {
  setTimeout(() => {
   this.setState(prevState => ({
    componentDidMount: !prevState.componentDidMount
   }));
  }, 1000);

  this.props.scrollToTop();
 }

 render() {
  const { componentDidMount } = this.state;

  let opacity = ".9";
  let color1 = `rgba(237, 237, 238, ${opacity})`;
  let color2 = `rgba(62, 72, 128, ${opacity})`;
  // let color3 = `rgba(59, 186, 232, ${opacity})`;
  let color4 = `rgba(78, 204, 245, ${opacity})`;
  let color5 = `rgba(238, 49, 83, ${opacity})`;

  return (
   <div id='portfolio' className='content__wrapper'>
    {componentDidMount ? "" : <Loader />}
    <div className='main__content'>
     <div className='flag--addon' />
     <h2>
      <span className='initial'>P</span>ortfolio
      </h2>
      <BrowserRouter>
      <Route
       exact
       path={'/' + ""}
       render={() => <KimJestMuzykZZawodu />}
      />
     </BrowserRouter>
     <Dashboard />
    </div>
   </div>
  );
 }
}
export default Portfolio;
