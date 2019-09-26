import React from 'react';

import './TileRotateContent.scss';

class TileRotateContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { side1Text, side2Text, bgColor } = this.props;

    return (
      <div className='tile' style={{ backgroundColor: bgColor }}>
        <div className='side1'>{side1Text}</div>
        <div className='side2'>{side2Text}</div>
      </div>
    );
  }
}

export default TileRotateContent;
