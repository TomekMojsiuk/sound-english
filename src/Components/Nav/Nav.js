import React, { Fragment } from "react";
import "./Nav.scss";

import MyLink from "./NavLink/NavLink";

class Nav extends React.Component {
 constructor(props) {
  super(props);
 }

 render() {
  const { handleNavDisplay } = this.props;
  return (
   <nav className={handleNavDisplay ? "nav show": "nav"}>
    <Fragment>
     <MyLink exact to='/'>
      Home
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
 }
}

export default Nav;
