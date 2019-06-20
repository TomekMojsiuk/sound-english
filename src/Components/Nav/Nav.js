import React, { Fragment } from "react";
import "./Nav.scss";

import MyLink from "./NavLink/NavLink";

const Nav = () => {
 return (
  <div>
   <Fragment>
    <MyLink exact to='/'>
     O mnie
    </MyLink>
    <MyLink exact to='/'>
     Copyrights
    </MyLink>
   </Fragment>
  </div>
 );
};

export default Nav;
