import React, { Suspense, lazy } from "react";
import "./Dashboard.scss";
import $ from "jquery";
import { PortfolioItems } from "../../../db.js";

const PortfolioItem = lazy(() => import("../PortfolioItem/PortfolioItem"));

class Dashboard extends React.Component {
 constructor(props) {
  super(props);
  this.state = {
   articlePaths: [],
   readArticle: false
  };
 }

 componentDidMount() {
  this.setState({
   articlePaths: PortfolioItems
  });
 }

 handleReadArticle = e => {
  const portfolioItem = $(e.target).parent();
  const itemName = portfolioItem.data("path");
  console.log(itemName);
 };

 render() {
  console.log(this.state.articlePaths);
  const { articlePaths } = this.state;

  return (
   <div className='portfolio__items__group'>
    <h2 className='portfolio__items__group__title'>
     Artykuły napisane na stronę salonów muzycznych Riff
    </h2>
    <Suspense fallback={<div>Wczytywanie...</div>}>
     {articlePaths.map(article => {
      return (
       <PortfolioItem
        key={article.id.toString()}
        handleReadArticle={this.handleReadArticle}
        pathName={article.path}
        title={article.title}
        articleSummary={article.summary}
        buttonTxt={"Przeczytaj"}
       />
      );
     })}
    </Suspense>
   </div>
  );
 }
}

export default Dashboard;
