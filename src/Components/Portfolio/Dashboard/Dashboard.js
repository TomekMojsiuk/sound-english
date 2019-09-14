import React, { Suspense, lazy } from "react";
import "./Dashboard.scss";
import $ from "jquery";

// Database
import { PortfolioItems } from "../../../db.js";

// lazy loading
const LazyPortfolioItem = lazy(() => import("../PortfolioItem/PortfolioItem"));

class Dashboard extends React.Component {
 constructor(props) {
  super(props);
  this.state = {
   readArticle: false
  };
 }

 componentDidMount() {
//   this.setState({
//    articlePaths: PortfolioItems
//   });
 }

 handleReadArticle = e => {
  const portfolioItem = $(e.target).parent();
  const itemName = portfolioItem.data("path");
  console.log(itemName);
 };

 render() {
  console.log(this.state.articlePaths);
  const { articlesDb } = this.props;

  return (
   <div className='portfolio__items__group'>
    <h2 className='portfolio__items__group__title'>
     Artykuły napisane na stronę salonów muzycznych Riff
    </h2>
    <Suspense fallback={<div>Wczytywanie...</div>}>
     {articlesDb.map(article => {
         console.log(article.path);
      return (
       <LazyPortfolioItem
        id={article.id}
        key={article.id}
        handleReadArticle={this.handleReadArticle}
        pathName={article.path}
        title={article.title}
        articleSummary={article.summary}
        linkText={"Przeczytaj"}
        linkGoTo={article.path}
       />
      );
     })}
    </Suspense>
   </div>
  );
 }
}

export default Dashboard;
