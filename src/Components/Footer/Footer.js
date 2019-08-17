import React from "react";

import "../../Pages/Pages.scss";
import "./Footer.scss";
import MyLink from "../Nav/NavLink/NavLink";

class Footer extends React.Component {
 openFacebook = () => {
  window.open(this.props.facebook, "_blank");
 };

 openYoutube = () => {
  window.open(this.props.youtube, "_blank");
 };

 render() {

   const {tomekMojsiuk} = this.props;

  return (
   <div id='footer'>
    <div className='footer__content left'>
     <p>
     <MyLink to='/cookies'>
      Polityka Cookies
     </MyLink>
     </p>
     <p>
     <MyLink to='/rodo'>
      RODO
     </MyLink>
     </p>
    </div>

    <div className='footer__content middle'>
     <p className='copyrights'>
      &copy; 2019 <span>S</span>ound <span>E</span>nglish
     </p>
     <p className='project'>
       Created by
       {/* <MyLink to='/tomek-mojsiuk' target='_blank'>
        Tomasz Mojsiuk
       </MyLink> */}
       <a href={tomekMojsiuk} className="nav__item" target="_blank" rel="noopener noreferrer">Tomek Mojsiuk</a>
     </p>
    </div>

    <div className='footer__content right'>
     <div className='icon facebook' onClick={this.openFacebook} />
     <div className='icon youtube' onClick={this.openYoutube} />
     
    </div>
   </div>
  );
 }
}

export default Footer;
