import React from "react";

import "./ArrowUp.scss";

class ArrowUp extends React.Component {
 render() {

    const { onClick } = this.props
  return (<div className='arrow__up--box' onClick={onClick}>
  <div className='arow__up' />
 </div>
  );
 }
}

export default ArrowUp;
