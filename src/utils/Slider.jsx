import React from 'react';
import { Carousel } from 'react-responsive-carousel';

import ribbonfibres from '../assets/ribbonfibres.jpg'
import FiberOptics from '../assets/FiberOptics.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import '../App.css';
import pic4 from '../assets/pic4.jpg';
import pic5 from '../assets/pic5.jpg';
import pic6 from '../assets/pic6.png';
import pic1 from '../assets/pic1.jpg';
import pic2 from '../assets/pic2.jpg';

const Slider = () => {
    return (
        <div className='main-slide'>
            <Carousel autoPlay={true} showStatus={false} dynamicHeight={true} showArrows={true} infiniteLoop={true}>
                <div>
                    <img src={pic5} height='300px' width='200px'/>
                    <p className="legend">Водка без пива: миф и реальность 
                    </p>
                </div>
                <div>
                    <img src={ribbonfibres}  height='300px' width='200px'/>
                    <p className="legend"></p>
                </div>
                <div>
                    <img src={FiberOptics}  height='300px' width='200px'/>
                    
                </div>
                <div>
                    <img src={pic4}  height='300px' width='200px'/>
                </div>
                <div>
                    <img src={pic2}  height='300px' width='200px'/>
                    
                </div>
                <div>
                    <img src={pic1}  height='300px' width='200px'/>
                </div>
                <div>
                    <img src={pic6}  height='300px' width='200px'/>
                </div>
            </Carousel>
        </div>
    );
};

export default Slider;