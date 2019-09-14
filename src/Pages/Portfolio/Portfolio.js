import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// Styles
import "../../Pages/Pages.scss";
import "./Portfolio.scss";

// Database
import { PortfolioItems } from "../../db";

// Components
import Loader from "../../Components/Loader/Loader";
import Dashboard from "../../Components/Portfolio/Dashboard/Dashboard";

// Articles
import KimJestMuzykZZawodu from "../../Components/Portfolio/PortfolioArticles/KimJestMuzykZZawodu";
import DAngelicoGitaryZDusza from "../../Components/Portfolio/PortfolioArticles/DAngelicoGitaryZDusza";
import FenderMarkaPelnaHistorii from "../../Components/Portfolio/PortfolioArticles/FenderMarkaPelnaHistorii";
import ReaggePulsSzczeroscHistoria from "../../Components/Portfolio/PortfolioArticles/ReaggePulsSzczeroscHistoria";
import ZeSzkolyNaScene from "../../Components/Portfolio/PortfolioArticles/ZeSzkolyNaScene";

class Portfolio extends React.Component {
 constructor(props) {
  super(props);
  this.state = {
   componentDidMount: false,
   btnReadMoreClicked: false,
   articlesDb: []
  };
 }

 componentDidMount() {
  setTimeout(() => {
   this.setState(prevState => ({
    componentDidMount: !prevState.componentDidMount,
    articlesDb: PortfolioItems
   }));
  }, 1000);

  this.props.scrollToTop();
 }

 render() {
  const { componentDidMount, articlesDb } = this.state;

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
      <Switch>
      {articlesDb.map(article => {
            console.log(article.componentName);
            console.log(article.path);
            return (
              <Route
                key={article.path}
                path={article.path}
                render={() => {
                  switch (article.componentName) {
                    case "KimJestMuzykZZawodu":
                      return <KimJestMuzykZZawodu />;
                    case "FenderMarkaPelnaHistorii":
                      return <FenderMarkaPelnaHistorii />;
                    case "DAngelicoGitaryZDusza":
                      return <DAngelicoGitaryZDusza />;
                    case "ReaggePulsSzczeroscHistoria":
                      return <ReaggePulsSzczeroscHistoria />;
                    case "ZeSzkolyNaScene":
                      return <ZeSzkolyNaScene />;
                    default:
                  }
                }}
              />
            );
          })}
      </Switch>
     <Dashboard articlesDb={articlesDb} />
     </BrowserRouter>
    </div>
   </div>
  );
 }
}
export default Portfolio;
