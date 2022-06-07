import React from 'react';
import { Fade } from 'react-slideshow-image';
import "./slideshow.css"
import 'react-slideshow-image/dist/styles.css'

const fadeImages = [
    'https://pspro.ir/image/cache/catalog/Slides/New-P/Razer-dualsense-1352x326.jpg',
    'https://pspro.ir/image/cache/catalog/Slides/New-P/sniper-elite-5-d-1352x326.jpg',
    'https://pspro.ir/image/cache/catalog/Slides/New-P/Razer-b-dd-1352x326.jpg',
    'https://pspro.ir/image/cache/catalog/Slides/MAG/new4/PSc-Desktop-1352x326.jpg'
];

const Slideshow = () => {
    return (
        <div className="slide-container">
            <Fade>
                {fadeImages.map((fadeImage, index) => (
                    <div className="each-fade" key={index}>
                        <div className="image-container">
                            <img src={fadeImage} />
                        </div>
                    </div>
                ))}
            </Fade>
        </div>
    )
}
export default Slideshow
