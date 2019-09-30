import React, { Suspense, lazy } from 'react';
import './Dashboard.scss';
import Loader from '../../Loader/Loader';

// lazy loading
const LazyPortfolioItem = lazy(() => import('../PortfolioItem/PortfolioItem'));

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      readArticle: false
    };
  }

  render() {
    //   console.log(this.state.articlePaths);
    const { articlesDb } = this.props;

    return (
      <div className='portfolio__items__container'>
        <Suspense fallback={<Loader />}>
          <div className='portfolio__description'>
            <h2>
              <span className='initial'>P</span>ortfolio dziennikarskie
            </h2>
            <p>
              W pracy dziennikarskiej zajmowałem się głównie muzyką, ale podejmuję też inne, bardzo
              różne tematy. Oto część mojego dorobku. Znajdziesz tu moje publikacje, zarówno te
              nowe, jak i starsze, sprzed kilku lat. Oprócz atrykułów opublikowanych na tej stronie,
              zapraszam Cię również do serwosów zewnętrznych, dla których piszę. Miłego czytania.
            </p>
            <p className='external__source__link'>
              <a
                href='https://mostpeculiarman.wordpress.com/'
                target='_blank'
                rel='noopener noreferrer'>
                Blog osobisty
              </a>{' '}
              – proza, recenzje, felietony
            </p>
            <p className='external__source__link'>
              <a
                href='http://www.cdn.ug.edu.pl/tag/bartek-piwowarczyk'
                target='_blank'
                rel='noopener noreferrer'>
                Artykuły dla portalu CDN
              </a>{' '}
              – Gazety Studentów Uniwersytetu Gdańskiego
            </p>
            <p className='external__source__link'>
              <a
                href='http://zazyjkultury.pl/?s=Bartek+Piwowarczyk'
                target='_blank'
                rel='noopener noreferrer'>
                Recenzje dla zazyjkultury.pl
              </a>
            </p>
          </div>
          <div className='portfolio__items__group'>
            {articlesDb.map((article) => {
              return (
                <LazyPortfolioItem
                  id={article.id}
                  key={article.id}
                  pathName={article.path}
                  title={article.title}
                  articleSummary={article.summary}
                  writtenFor={article.writtenFor}
                  linkText={'Przeczytaj artykuł'}
                  linkGoTo={article.path}
                />
              );
            })}
          </div>
        </Suspense>
      </div>
    );
  }
}

export default Dashboard;
