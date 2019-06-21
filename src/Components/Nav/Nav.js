import React, { Fragment } from "react";
import "./Nav.scss";

import MyLink from "./NavLink/NavLink";

const Nav = () => {
 return (
  <nav className='nav'>
   <Fragment>
    <MyLink exact to='/'>
     Main
    </MyLink>
    <MyLink exact to='/o-szkole'>
     O szkole
    </MyLink>
    <MyLink exact to='/oferta'>
     Oferta i cennik
    </MyLink>
    <MyLink exact to='/ministudio'>
     Ministudio
    </MyLink>
    <MyLink exact to='/copywriting'>
     Copywriting
    </MyLink>
    <MyLink exact to='/o-mnie'>
     O mnie
    </MyLink>
    <MyLink exact to='/kontakt'>
     Kontakt
    </MyLink>
   </Fragment>
  </nav>
 );
};

// O SZKOLE  OFERTA I CENNIK   MINISTUDIO   COPYWRITING   O MNIE   KONTAKT

export default Nav;
