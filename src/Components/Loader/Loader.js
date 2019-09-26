import React from 'react';
import './Loader.scss';

const Loader = () => {
  return (
    <div className='loader'>
      <div className='loader__img__container'>
        <div className='loader__image--1'></div>
        <div className='loader__image--2'></div>
      </div>
    </div>
  );
};

export default Loader;
