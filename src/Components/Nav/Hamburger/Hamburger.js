import React from 'react';
import './Hamburger.scss';

class Hamburger extends React.Component {
    constructor (props) {
        super(props)
        this.state = {

        }
    }

    render () {
        const { onClick } = this.props;
        return (
            <div className='hamburger' onClick={onClick}  >
                <div className="hamburger__line"></div>
                <div className="hamburger__line"></div>
                <div className="hamburger__line"></div>
            </div>
        ) ;
        }
};

export default Hamburger;