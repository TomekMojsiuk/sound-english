import React from 'react';

import './TilePopUpDescription.scss';

class TilePopUpDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false,
      exitPopup: false,
      btnText: 'Pokaż więcej'
    };
  }

  handleShowPopup = (e) => {
    this.setState((prevState) => ({
      showPopup: !prevState.showPopup
    }));
  };

  handleExitPopup = () => {
    this.setState((prevState) => ({
      showPopup: !prevState.showPopup
    }));
  };

  render() {
    const { imageClassName, mainText, popupText, bgColor } = this.props;
    const { showPopup, btnText } = this.state;
    return (
      <div className='tile__popup' style={{ backgroundColor: bgColor }}>
        <div className={`${imageClassName} tile__popup__image`} />
        <div className='tile__popup__text'>{mainText}</div>
        <div className='btn__show--more' onClick={this.handleShowPopup}>
          {btnText}
        </div>
        {showPopup ? (
          <div className='tile__popup__showmore'>
            <div className='tile__popup__showmore--exit' onClick={this.handleExitPopup} />
            <div className='tile__popup__text'>{popupText}</div>
          </div>
        ) : (
          ''
        )}
      </div>
    );
  }
}

export default TilePopUpDescription;
