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
      isFeedVisivle: !prevState.isFeedVisivle
    }));
  };

  render() {
    const { isFeedVisivle } = this.state;
    return (
      <div id='facebook' className={isFeedVisivle ? 'slide--left' : ''}>
        <div className='icon' onMouseOver={this.handleFeedVisivle} />
        <Suspense fallback={<Loader />}>
          <Facebook />
        </Suspense>
      </div>
    );
  }
}

export default FacebookFeed;
