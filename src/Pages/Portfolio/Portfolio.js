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
// Riff
import KimJestMuzykZZawodu from "../../Components/Portfolio/PortfolioArticles/KimJestMuzykZZawodu";
import DAngelicoGitaryZDusza from "../../Components/Portfolio/PortfolioArticles/DAngelicoGitaryZDusza";
import FenderMarkaPelnaHistorii from "../../Components/Portfolio/PortfolioArticles/FenderMarkaPelnaHistorii";
import ReaggePulsSzczeroscHistoria from "../../Components/Portfolio/PortfolioArticles/ReaggePulsSzczeroscHistoria";
import ZeSzkolyNaScene from "../../Components/Portfolio/PortfolioArticles/ZeSzkolyNaScene";
// CGM.PL
import PareSlowOMarkuJ from "../../Components/Portfolio/PortfolioArticles/PareSlowOMarkuJ";
import ObrotowaMagia from "../../Components/Portfolio/PortfolioArticles/ObrotowaMagia";
import CohenPoNowatorsku from "../../Components/Portfolio/PortfolioArticles/CohenPoNowatorsku";

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
  const { scrollToTop } = this.props;

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
             return <KimJestMuzykZZawodu scrollToTop={scrollToTop} />;
            case "FenderMarkaPelnaHistorii":
             return <FenderMarkaPelnaHistorii scrollToTop={scrollToTop} />;
            case "DAngelicoGitaryZDusza":
             return <DAngelicoGitaryZDusza scrollToTop={scrollToTop} />;
            case "ReaggePulsSzczeroscHistoria":
             return <ReaggePulsSzczeroscHistoria scrollToTop={scrollToTop} />;
            case "ZeSzkolyNaScene":
             return <ZeSzkolyNaScene scrollToTop={scrollToTop} />;
            case "PareSlowOMarkuJ":
             return <PareSlowOMarkuJ scrollToTop={scrollToTop} />;
            case "ObrotowaMagia":
             return <ObrotowaMagia scrollToTop={scrollToTop} />;
             case "CohenPoNowatorsku":
             return <CohenPoNowatorsku scrollToTop={scrollToTop} />;
            default:
           }
          }}
         />
        );
       })}
       <Dashboard articlesDb={articlesDb} scrollToTop={scrollToTop} />
      </Switch>
     </BrowserRouter>
    </div>
   </div>
  );
 }
}
export default Portfolio;
