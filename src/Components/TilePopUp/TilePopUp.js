import React from "react";
import $ from "jquery";

import "./TilePopUp.scss";

class TilePopUp extends React.Component {
 constructor(props) {
  super(props);
  this.state = {};
 }

 render() {
     const { side1Text, bgColor } = this.props;
     
  return (
    <div className='tile__popup' style={{backgroundColor: bgColor}}>
      <div className="">{side1Text}</div>
      <div className="side2">{side2Text}</div>
    </div>
  );
 }
}

export default TilePopUp;
