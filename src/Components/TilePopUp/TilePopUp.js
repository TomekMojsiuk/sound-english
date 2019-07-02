import React from "react";
import $ from 'jquery';

import "./TilePopUp.scss";

class TilePopUp extends React.Component {
 constructor(props) {
  super(props);
  this.state = ({
    showPopup: false,
exitPopup: false,
btnText: 'Pokaż więcej'
  });

}

handleShowPopup = (e) => {
  this.setState ((prevState) => ({
    showPopup: !prevState.showPopup,
  }))

  console.log(this.state.showPopup);
  
}

handleExitPopup = () => {
  this.setState ((prevState) => ({
    showPopup: !prevState.showPopup,
  }))
}

 render() {
     const { mainIconClassName, mainText, popupText, bgColor } = this.props;
     const {showPopup} = this.state;
  return (
    <div className='tile__popup' style={{backgroundColor: bgColor}}>
      <div className={`${mainIconClassName} tile__popup__icon`}></div>
      <div className="tile__popup__text">{mainText}</div>
      <div className="btn__show--more" onClick={this.handleShowPopup}>{this.state.btnText}</div>
      {showPopup? (
        <div className="tile__popup__showmore">
        <div className="tile__popup__showmore--exit" onClick={this.handleExitPopup}></div>
        <div className="tile__popup__text">{popupText}</div>
        </div>
      ):('')}
      
    </div>
  );
 }
}

export default TilePopUp;
