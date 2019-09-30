import React, { Suspense } from 'react';
import './FacebookFeed.scss';
import Loader from '../../Loader/Loader';
const Facebook = React.lazy(() => import('./FacebookPlugin'));
class FacebookFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFeedVisivle: false
    };
  }

  handleFeedVisivle = () => {
    this.setState((prevState) => ({
      // isFeedVisivle: !prevState.isFeedVisivle
      isFeedVisivle: true
    }));
  };

  handleFeedHide = () => {
    this.setState((prevState) => ({
      isFeedVisivle: false
    }));
  };

  render() {
    const { isFeedVisivle } = this.state;
    return (
      <div
        id='facebook'
        onMouseOver={this.handleFeedVisivle}
        onMouseOut={this.handleFeedHide}
        className={isFeedVisivle ? 'slide--left' : ''}>
        <div className='icon' />
        <Suspense fallback={<Loader />}>
          <Facebook />
        </Suspense>
      </div>
    );
  }
}

export default FacebookFeed;
