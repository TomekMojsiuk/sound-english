import React from 'react'
import './Loader.scss';

const Loader = () => {
    const loaderBlack = '../../assets/img/loader_black.png';
    return (<div className='loader'>
                <div className="loader__image--1"></div>
        <div className="loader__image--2"></div>
    </div>)
}

export default Loader