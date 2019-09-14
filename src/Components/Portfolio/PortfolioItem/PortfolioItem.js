import React from "react";
import "./PortfolioItem.scss";
import MyLink from "../../Nav/NavLink/NavLink";

class PortfolioItem extends React.Component {
 render() {
  const {
   id,
   pathName,
   title,
   articleSummary,
   handleReadArticle,
   linkText,
   linkGoTo
  } = this.props;
  console.log("klucz: " + id);
  return (
   <div key={id} className='portfolio__item' data-path={pathName}>
    <div key={"title." + id} className='portfolio__item__title'>
     {title}
    </div>
    <div key={"summary." + id} className='portfolio__item__summary'>
     {articleSummary}
    </div>
    <MyLink
    className="portfolio__item__nav__link"
     key={"button." + id}
     exact to={linkGoTo}
     onClick={handleReadArticle}
    >
     {linkText}
    </MyLink>
   </div>
  );
 }
}

export default PortfolioItem;
