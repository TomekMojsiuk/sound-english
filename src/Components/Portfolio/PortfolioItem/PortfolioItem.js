import React from "react";
import "./PortfolioItem.scss";

class PortfolioItem extends React.Component {
 constructor(props) {
  super(props);
  this.state = {
   init: ""
  };
 }
 render() {
  const {
   key,
   pathName,
   title,
   articleSummary,
   buttonTxt,
   handleReadArticle
  } = this.props;
  console.log("klucz: " + key);
  return (
   <div key={key} className='portfolio__item' data-path={pathName}>
    <div className='portfolio__item__title'>{title}</div>
    <div className='portfolio__item__summary'>{articleSummary}</div>
    <div className='portfolio__item__button' onClick={handleReadArticle}>
     {buttonTxt}
    </div>
   </div>
  );
 }
}

export default PortfolioItem;
