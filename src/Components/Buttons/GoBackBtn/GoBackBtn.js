import React from "react";
import "./GoBackBtn.scss";
import { Link } from "react-router-dom";

export default function GoBackBtn({ linkTo, btnText }) {
 return (
  <div className='btn__container'>
   <div className='btn'>
    <div className='arrow prev'/>
    <Link className='btn__link' to={linkTo}>
     {btnText}
    </Link>
   </div>
  </div>
 );
}
