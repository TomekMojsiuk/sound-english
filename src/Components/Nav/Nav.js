import React, { Fragment } from "react";
import "./Nav.scss";

import MyLink from "./NavLink/NavLink";

class Nav extends React.Component {

 render() {
  const { handleNavDisplay, handleNavItemClick } = this.props;
  return (
   <nav className={handleNavDisplay ? "nav show": "nav"}>
    <Fragment>
     <MyLink onClick={handleNavItemClick} exact to='/'>
      Home
     </MyLink>
     <MyLink onClick={handleNavItemClick} exact to='/o-szkole'>
      O szkole
     </MyLink>
     <MyLink onClick={handleNavItemClick} exact to='/oferta'>
      Oferta i cennik
     </MyLink>
     <MyLink onClick={handleNavItemClick} exact to='/ministudio'>
      Ministudio
     </MyLink>
     <MyLink onClick={handleNavItemClick} exact to='/copywriting'>
      Copywriting
     </MyLink>
     <MyLink onClick={handleNavItemClick} exact to='/o-mnie'>
      O mnie
     </MyLink>
     <MyLink onClick={handleNavItemClick} exact to='/kontakt'>
      Kontakt
     </MyLink>
    </Fragment>
   </nav>
  );
 }
}

export default Nav;
