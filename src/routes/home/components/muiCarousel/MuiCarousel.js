import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import p6 from '../../../../assets/photos/6.JPG';
import p11 from '../../../../assets/photos/11.JPG';
import p12 from '../../../../assets/photos/12.JPG';

const MuiCarousel  = () => {
    return (
        <Carousel>
            <div>
                <img src={p6} />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src={p11} />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src={p12} />
                <p className="legend">Legend 3</p>
            </div>
        </Carousel>
    );
};

export default MuiCarousel;