import React, { Fragment, useState, useEffect } from 'react';
import './PhotoSlider.scss';

import img1 from '../../assets/img/PhotoGalery/SE_chart_view.jpg';
import img2 from '../../assets/img/PhotoGalery/SE_mics.jpg';
import img3 from '../../assets/img/PhotoGalery/SE_ministudio.jpg';
import img4 from '../../assets/img/PhotoGalery/SE_recording_studio.jpg';
import img5 from '../../assets/img/PhotoGalery/SE_room_view.jpg';

const PhotoSlider = (props) => {
  const photos = document.querySelectorAll('img');
  console.log(photos);

  return (
    <div className='photo__slider'>
      <img src={img1} alt='microphones standing on a table' />
      <img src={img2} alt='microphones standing on a table' />
      <img src={img3} alt='microphones standing on a table' />
      <img src={img4} alt='microphones standing on a table' />
      <img src={img5} alt='microphones standing on a table' />
    </div>
  );
};

export default PhotoSlider;
