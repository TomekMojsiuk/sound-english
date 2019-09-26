import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// Styles
import '../../Pages/Pages.scss';
import './Portfolio.scss';

// Database
import { PortfolioItems } from '../../db';

// Components
import Loader from '../../Components/Loader/Loader';
import Dashboard from '../../Components/Portfolio/Dashboard/Dashboard';

// Articles
// RIFF
import KimJestMuzykZZawodu from '../../Components/Portfolio/PortfolioArticles/KimJestMuzykZZawodu';
import DAngelicoGitaryZDusza from '../../Components/Portfolio/PortfolioArticles/DAngelicoGitaryZDusza';
import FenderMarkaPelnaHistorii from '../../Components/Portfolio/PortfolioArticles/FenderMarkaPelnaHistorii';
import ReaggePulsSzczeroscHistoria from '../../Components/Portfolio/PortfolioArticles/ReaggePulsSzczeroscHistoria';
import ZeSzkolyNaScene from '../../Components/Portfolio/PortfolioArticles/ZeSzkolyNaScene';
// CGM.PL
import PareSlowOMarkuJ from '../../Components/Portfolio/PortfolioArticles/PareSlowOMarkuJ';
import ObrotowaMagia from '../../Components/Portfolio/PortfolioArticles/ObrotowaMagia';
import CohenPoNowatorsku from '../../Components/Portfolio/PortfolioArticles/CohenPoNowatorsku';
// REPORTAL
import ChristianLaettner from '../../Components/Portfolio/PortfolioArticles/ChristianLaettner';
import DennisRodman from '../../Components/Portfolio/PortfolioArticles/DennisRodman';
import SherlockHolmes from '../../Components/Portfolio/PortfolioArticles/SherlockHolmes';
import KanyeWestSpiewa from '../../Components/Portfolio/PortfolioArticles/KanyeWestSpiewa';
// BLUESCITY
import TheHarpianoShow from '../../Components/Portfolio/PortfolioArticles/TheHarpianoShow';
import KrzysztofGluch from '../../Components/Portfolio/PortfolioArticles/KrzysztofGluch';

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
      this.setState((prevState) => ({
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
        {componentDidMount ? '' : <Loader />}
        <div className='main__content'>
          <div className='flag--addon' />
          <Suspense fallback={<Loader />}>
            <BrowserRouter>
              <Switch>
                {articlesDb.map((article) => {
                  return (
                    <Route
                      key={article.path}
                      path={article.path}
                      render={() => {
                        switch (article.componentName) {
                          case 'KimJestMuzykZZawodu':
                            return <KimJestMuzykZZawodu {...this.props} />;
                          case 'FenderMarkaPelnaHistorii':
                            return <FenderMarkaPelnaHistorii {...this.props} />;
                          case 'DAngelicoGitaryZDusza':
                            return <DAngelicoGitaryZDusza {...this.props} />;
                          case 'ReaggePulsSzczeroscHistoria':
                            return <ReaggePulsSzczeroscHistoria {...this.props} />;
                          case 'ZeSzkolyNaScene':
                            return <ZeSzkolyNaScene {...this.props} />;
                          case 'PareSlowOMarkuJ':
                            return <PareSlowOMarkuJ {...this.props} />;
                          case 'ObrotowaMagia':
                            return <ObrotowaMagia {...this.props} />;
                          case 'CohenPoNowatorsku':
                            return <CohenPoNowatorsku {...this.props} />;
                          case 'ChristianLaettner':
                            return <ChristianLaettner {...this.props} />;
                          case 'DennisRodman':
                            return <DennisRodman {...this.props} />;
                          case 'SherlockHolmes':
                            return <SherlockHolmes {...this.props} />;
                          case 'KanyeWestSpiewa':
                            return <KanyeWestSpiewa {...this.props} />;
                          case 'TheHarpianoShow':
                            return <TheHarpianoShow {...this.props} />;
                          case 'KrzysztofGluch':
                            return <KrzysztofGluch {...this.props} />;
                          default:
                        }
                      }}
                    />
                  );
                })}
                <Dashboard articlesDb={articlesDb} scrollToTop={scrollToTop} />
              </Switch>
            </BrowserRouter>
          </Suspense>
        </div>
      </div>
    );
  }
}
export default Portfolio;
