import React from "react";
import "../Pages.scss";
import "./Main.scss";
import MyLink from "../../Components/Nav/NavLink/NavLink";
import Loader from "../../Components/Loader/Loader";

class Main extends React.Component {
 constructor(props) {
  super(props);
  this.state = {
   componentDidMount: false,
  };
 }

 componentDidMount() {
   setTimeout(() => {
      this.setState(prevState => ({
         componentDidMount: !prevState.componentDidMount
        }));
      },2000)
 }

 render() {
  const { componentDidMount } = this.state;

  return (
     componentDidMount?(<div id='main' className='content__box'>
     <div className='flag' />
     <div className='logo' />
     <div className='content__box'>
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
        <li className='services__list__item'>
         {"Another item"}
         <div className='underline' />
        </li>
        <li className='services__list__item'>
         {"Another item"}
         <div className='underline' />
        </li>
       </ul>
       <MyLink exact to='/oferta'>
        Oferta i cennik
       </MyLink>
      </div>
     </div>
    </div>):(
       <Loader />
    )
   
  );
 }
}

// const Main = () => {
//  return
//  );
// };

export default Main;
