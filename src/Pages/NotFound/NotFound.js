import React from "react";
import "../Pages.scss";
import "./NotFound.scss";

import Loader from "../../Components/Loader/Loader";
import MyLink from "../../Components/Nav/NavLink/NavLink";

class NotFound extends React.Component {
 constructor(props) {
  super(props);
  this.state = {
   componentDidMount: false
  };
 }

 componentDidMount() {
  setTimeout(() => {
   this.setState(prevState => ({
    componentDidMount: !prevState.componentDidMount
   }));
  }, 2000);
 }

 render() {
  const { componentDidMount } = this.state;
  return componentDidMount ? (
   <div id="not__found">
      <div className="bg__img"></div>
      <div className='content__box'>
      <h1 className='title'><span>{"4"}</span>{"0"}<span>{"4"}</span></h1>
<h2>You're in the wrong place</h2>
<MyLink exact to="/">Get back to reality</MyLink>
      </div>
   </div>
  ) : (
   <Loader />
  );
 }
}

export default NotFound;
