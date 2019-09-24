import React, { Fragment, useState, useEffect } from 'react';
import './PhotoSlider.scss';

import img1 from '../../assets/img/PhotoGalery/SE_chart_view.jpg';
import img2 from '../../assets/img/PhotoGalery/SE_mics.jpg';
import img3 from '../../assets/img/PhotoGalery/SE_ministudio.jpg';
import img4 from '../../assets/img/PhotoGalery/SE_recording_studio.jpg';
import img5 from '../../assets/img/PhotoGalery/SE_room_view.jpg';

const PhotoSlider = () => {
  const [imgIndex, setImgIndex] = useState(0);

  // Grab all images
  const photos = document.querySelectorAll('.slide__img');

  useEffect(() => {
    photos.forEach(function(element, index) {
      if (index === imgIndex) {
        element.classList.add('show__img');
      } else {
        element.classList.remove('show__img');
      }
    });
  });

  useEffect(() => {
    if (imgIndex === photos.length) {
      setImgIndex(0);
    }
    if (imgIndex === -1) {
      setImgIndex(photos.length - 1);
    }
  });

  // Buttons actions onClick
  const imgPrev = () => setImgIndex(imgIndex + -1);
  const imgNext = () => setImgIndex(imgIndex + 1);

  // OnKeyPress behavior - arrow keys
  const onKeyPressEvent = (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      imgPrev();
    }
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      imgNext();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', onKeyPressEvent);
    return () => {
      window.removeEventListener('keydown', onKeyPressEvent);
    };
  });

  console.log(imgIndex);

  const images = (
    <Fragment>
      <img className='slide__img' src={img1} alt='english grammar charts' />
      <img className='slide__img' src={img2} alt='microphones standing on a table' />
      <img className='slide__img' src={img3} alt='Sound English studio space' />
      <img className='slide__img' src={img4} alt='Sound English recording room' />
      <img className='slide__img' src={img5} alt='Sound English classroom' />
    </Fragment>
  );

  return (
    <div className='slider__photos'>
        <div className="slider__exit"/>
      {images}
      <div className='slider__buttons'>
        <button onClick={imgPrev}>&#10094;</button>
        <button onClick={imgNext}>&#10095;</button>
      </div>
    </div>
  );
};

export default PhotoSlider;
