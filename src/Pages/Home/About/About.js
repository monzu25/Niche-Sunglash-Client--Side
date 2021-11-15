import React from 'react';
import { VideoTag } from 'react-video-tag';

const About = () => {
    return (
        <div className="container my-5">
            <div className="d-flex flex-sm-row flex-column">
                <div style={{ width: "100%" }} className="me-2">
                    <h3>Our Store History</h3>
                    <ul >
                        <li>Flip the temples to use your glasses while getting your hair colored.</li>
                        <li>Tilt the front of the frame to watch tv, and read in bed simultaneously.</li>
                        <li>Flip one temple to lie on your side reading in bed comfortably.</li>
                        <li>Flip the temples after cosmetic surgery, so they don't have to sit on your face.</li>
                        <li>Flip the temples while cooking, so you can read your recipe, knead your dough, and never get food in your hair!</li>
                        <li>Tilt the front of the frame while giving a presentation, so you can maintain eye-contact with the audience without your slides turning blurry.</li>
                    </ul>
                </div>
                <div style={{ width: "100%" }} >
                    {/* 
                <VideoTag src="https://ae-cn.alicdn.com/9f8e1de30350cb41/Yz6B7uPcMRKimujcnX6/8UAb893o25wM75zcaFo_310447500029_mp4_264_hd.mp4" poster="https://ae01.alicdn.com/kf/H59f0ed9042af4808a61846d0692bc0b7C/SIMPRECT-Oversized-Sunglasses-Women-2021-Retro-Round-Sun-Glasses-Vintage-Luxury-Brand-Design-Shades-For-Women.jpg_Q90.jpg_.webp">

                </VideoTag> */}
                    < img width="100%" src="https://ae01.alicdn.com/kf/H59f0ed9042af4808a61846d0692bc0b7C/SIMPRECT-Oversized-Sunglasses-Women-2021-Retro-Round-Sun-Glasses-Vintage-Luxury-Brand-Design-Shades-For-Women.jpg_Q90.jpg_.webp" alt="" />
                </div>


            </div>
        </div >
    );
};

export default About;