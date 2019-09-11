import React from "react";
import "./PortfolioItemsGroup.scss";
import PortfolioItem from "../PortfolioItem/PortfolioItem";

class PortfolioItemsGroup1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      init: ""
    };
  }
  render() {
    return (<div className="portfolio__items__group">
      <h2 className="portfolio__items__group__title">Artykuły na stronę salonów muzycznych Riff</h2>
      <PortfolioItem />
      <PortfolioItem />
      <PortfolioItem />
      <PortfolioItem />
      <h2 className="portfolio__items__group__title">Artykuły na stronę salonów muzycznych Riff</h2>
      <PortfolioItem />
      <PortfolioItem />
      <PortfolioItem />
      <PortfolioItem />
      </div>);
  }
}

export default PortfolioItemsGroup1;
