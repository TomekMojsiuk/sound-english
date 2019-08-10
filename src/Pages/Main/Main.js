import React from "react";
import "../Pages.scss";
import "./Main.scss";
import MyLink from "../../Components/Nav/NavLink/NavLink";
import Loader from "../../Components/Loader/Loader";
import $ from 'jquery';

class Main extends React.Component {
 constructor(props) {
  super(props);
  this.state = {
   componentDidMount: false,

   footerMargin: '0',
  };
 }

 componentDidMount() {
   setTimeout(() => {
      this.setState(prevState => ({
         componentDidMount: !prevState.componentDidMount
        }));
      },1000)

      this.props.scrollToTop();
 }

 setFooterStyle = (value) => {
   
   $('#footer').css('margin-bottom', value);
}

componentWillUnmount() {
   if (window.matchMedia("(min-width: 740px)").matches) {
      $('#footer').css('margin-bottom', '24px');
   }
}

 render() {
  const { componentDidMount } = this.state; 
  return (<div id='main' className='content__wrapper'>
     {componentDidMount ? "" : <Loader />}
     {this.setFooterStyle(this.state.footerMargin)}
     <div className='flag' />
     <div className='logo' />
     <div className='main__content'>
      <div className='banner'>
       <h1 className='title'>
        <span>{"C"}</span>
        {"entrum "}
        <span>{"J"}</span>
        {"ęzykowo –"} <span>{"M"}</span>
        {"uzyczne"}
       </h1>
       <ul className='services__list'>
        <li className='services__list__item'>
         {"Korepetycje"}
         <div className='underline' />
        </li>
        <li className='services__list__item'>
         {"Przygotowanie do matury i egzaminów"}
         <div className='underline' />
        </li>
        <li className='services__list__item'>
         {"Studio nagrań"}
         <div className='underline' />
        </li>
       </ul>
       <MyLink exact to='/oferta'>
        Oferta i cennik
       </MyLink>
      </div>
     </div>
    </div>)
 }
}

export default Main;
