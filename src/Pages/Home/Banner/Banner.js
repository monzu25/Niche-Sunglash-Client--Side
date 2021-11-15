import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (

        <div>
            <Carousel>
                <Carousel.Item className="d-flex justify-content-beween">
                    <img
                        className="d-block w-100"
                        src="https://ae04.alicdn.com/kf/H4279884c6d514b70a4eeb265b15aef43v.png"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://ae01.alicdn.com/kf/H271ce9ae0e8b46ff919611a10eb67996r.png"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://ae01.alicdn.com/kf/HTB1A2GtX5DxK1Rjy1zcq6yGeXXao.jpg"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://ae01.alicdn.com/kf/HTB18WmxX0zvK1RkSnfoq6zMwVXaE.jpg"
                        alt="Second slide"
                    />
                </Carousel.Item>

            </Carousel>
        </div>

        // <div>
        //     <Carousel fade style={{ minHeight: "600px" }}>
        //         <Carousel.Item>
        //             <img height="500px"
        //                 className="d-block w-100"
        //                 src="https://i.ibb.co/Sv3Drb9/1.png"
        //                 alt="Third slide"
        //             />
        //             <Carousel.Caption>
        //                 <>
        //                     <h3>Black MKV-450 Man Watch</h3>
        //                     <p>Best one for special person</p>
        //                 </>
        //             </Carousel.Caption>
        //         </Carousel.Item>
        //         <Carousel.Item>
        //             <img height="500px"
        //                 className="d-block w-100"
        //                 src="https://i.ibb.co/vvVgwr8/2.png"
        //                 alt="First slide"
        //             />
        //             <Carousel.Caption>
        //                 <>
        //                     <h3>Brown BRO-670 Watch For Man</h3>
        //                     <p>Just For Professional Only</p>
        //                 </>
        //             </Carousel.Caption>
        //         </Carousel.Item>
        //         <Carousel.Item>
        //             <img height="500px"
        //                 className="d-block w-100"
        //                 src="https://i.ibb.co/q0H2grJ/3.png"
        //                 alt="Second slide"
        //             />
        //             <Carousel.Caption>
        //                 <>
        //                     <h3>Black Panther Man Watch</h3>
        //                     <p>Fashionable And Fabulous Watch</p>
        //                 </>
        //             </Carousel.Caption>
        //         </Carousel.Item>
        //     </Carousel>

        // </div>
    );
};

export default Banner;