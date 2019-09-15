import React from "react";
import "./FacebookFeed.scss";

class FacebookFeed extends React.Component {
 constructor(props) {
  super(props);
  this.state = {
   isFeedVisivle: false
  };
 }

 handleFeedVisivle = () => {
  this.setState(prevState => ({
   isFeedVisivle: !prevState.isFeedVisivle
  }));
 };

 render() {
  const { isFeedVisivle } = this.state;

  return (
   <div id='facebook' className={isFeedVisivle ? "slide--left" : ""}>
    <div className='icon' onMouseOver={this.handleFeedVisivle} />
    <iframe
     src='https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FCentrum-J%C4%99zykowo-Muzyczne-Sound-English-256244201961789%2F&tabs=timeline%2C%20show_facepile&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId'
     scrolling='no'
     frameBorder='0'
     allow='encrypted-media'
    ></iframe>
   </div>
  );
 }
}

export default FacebookFeed;
