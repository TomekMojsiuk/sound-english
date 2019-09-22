import React, { Fragment, useState, useEffect } from 'react';
import './PhotoSlider.scss';

import img1 from '../../assets/img/PhotoGalery/SE_chart_view.jpg';
import img2 from '../../assets/img/PhotoGalery/SE_mics.jpg';
import img3 from '../../assets/img/PhotoGalery/SE_ministudio.jpg';
import img4 from '../../assets/img/PhotoGalery/SE_recording_studio.jpg';
import img5 from '../../assets/img/PhotoGalery/SE_room_view.jpg';

const PhotoSlider = (props) => {

  const [img, setImg] = useState({
    img: '1'
  });

  useEffect(() => {
    const photos = document.querySelectorAll('img');
    console.log(photos);

    photos.forEach(function(element, index) {
      console.log(index);
    });
  }, []);

  const images = (
    <Fragment>
      <img src={img1} alt='english grammar charts' />
      <img src={img2} alt='microphones standing on a table' />
      <img src={img3} alt='Sound English studio space' />
      <img src={img4} alt='Sound English recording room' />
      <img src={img5} alt='Sound English classroom' />
    </Fragment>
  );

  return <div className='photo__slider'>{images}</div>;
};

export default PhotoSlider;
