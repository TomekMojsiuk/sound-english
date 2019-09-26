import React from 'react';
import $ from 'jquery';

import './Readmore.scss';

class ReadMore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      btnReadMoreClicked: false
    };
  }

  handleReadMoreBtnClick = (e) => {
    this.setState((prevState) => ({
      btnReadMoreClicked: !prevState.btnReadMoreClicked
    }));

    const parent = $(e.target).parent();
    parent.find('.read--more').toggle('.display');
  };

  render() {
    const { btnReadMoreClicked } = this.state;
    return (
      <div className='btn__read--more' onClick={this.handleReadMoreBtnClick}>
        <div>{btnReadMoreClicked ? 'Ukryj' : 'Czytaj dalej'}</div>
        <div />
        <div />
      </div>
    );
  }
}

export default ReadMore;
