import React from "react";
import "../../Pages/Pages.scss";
import './Portfolio.scss';

import Loader from "../../Components/Loader/Loader";
import MyLink from '../../Components/Nav/NavLink/NavLink'
import PortfolioItemsGroup1 from "../../Components/Portfolio/PortfolioItemsGroup/PortfolioItemsGroup1";

class Portfolio extends React.Component {
 constructor(props) {
  super(props);
  this.state = {
   componentDidMount: false,
   btnReadMoreClicked: false
  };
 }

 componentDidMount() {
  setTimeout(() => {
   this.setState(prevState => ({
    componentDidMount: !prevState.componentDidMount
   }));
  }, 1000);

  this.props.scrollToTop();
 }

 render() {
  const { componentDidMount } = this.state;

  let opacity = '.9';
  let color1 = `rgba(237, 237, 238, ${opacity})`;
  let color2 = `rgba(62, 72, 128, ${opacity})`;
  // let color3 = `rgba(59, 186, 232, ${opacity})`;
  let color4 = `rgba(78, 204, 245, ${opacity})`;
  let color5 = `rgba(238, 49, 83, ${opacity})`;

  return(<div id='portfolio' className='content__wrapper'>
    {componentDidMount ? "" : <Loader />}
    <div className='main__content'>
     <div className='flag--addon' />
     <h1>
      <span className="initial">P</span>ortfolio
     </h1>
     <PortfolioItemsGroup1 />
    </div>
   </div>
  )
 }
}
export default Portfolio;
