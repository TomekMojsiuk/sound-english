import React from 'react';
import './Hamburger.scss';

class Hamburger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { onClick, isClicked } = this.props;
    return (
      <div className={isClicked ? 'hamburger clicked' : 'hamburger'} onClick={onClick}>
        <div className='hamburger__line' />
        <div className='hamburger__line' />
        <div className='hamburger__line' />
      </div>
    );
  }
}

export default Hamburger;
