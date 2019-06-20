import React, { Fragment } from "react";
import "./Nav.scss";

import MyLink from "./NavLink/NavLink";

const Nav = () => {
 return (
  <nav className='nav'>
   <Fragment>
    <MyLink exact to='/'>
     O mnie
    </MyLink>
    <MyLink exact to='/'>
     Copyrights
    </MyLink>
   </Fragment>
  </nav>
 );
};

export default Nav;
