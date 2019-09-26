import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavLink.scss';

const MyLink = (props) => {
  return <NavLink className={'nav__item'} {...props} />;
};

export default MyLink;
