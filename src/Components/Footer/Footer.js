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
  return (
   <div id='footer'>
    <div className='footer__content left'>
     <MyLink to='/polityka-prywatnosci' target='_blank'>
      Polityka prywatności
     </MyLink>
    </div>

    <div className='footer__content middle'>
     <p className='copyrights'>
      &copy; 2019 <span>S</span>ound <span>E</span>nglish
     </p>
     <p className='project'>
       Created by
       <MyLink to='/tomek-mojsiuk' target='_blank'>
        Tomasz Mojsiuk
       </MyLink>
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
