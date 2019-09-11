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
  return (
   <div className='portfolio__item'>
    <div className='portfolio__item__title'>Title</div>
    <div className='portfolio__item__summary'>Portfolio item summary</div>
    <div className='portfolio__item__button'>Read more</div>
   </div>
  );
 }
}

export default PortfolioItem;
