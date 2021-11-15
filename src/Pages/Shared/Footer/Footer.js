import React from 'react';


const Footer = () => {
    return (

        <div className="mt-5 ">
            <footer
                className="text-center text-lg-start text-white"
                style={{ backgroundColor: "#232F3E" }} >

                <section className="mt-5 pt-3">
                    <div className="container text-center text-md-start mt-5">

                        <div className="row mt-3">

                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                                {/* <img src={logo} alt="" /> */}
                                <h3 className="text-uppercase fw-bold">ARYAN LOOK</h3>
                                <hr
                                    className="mb-4 mt-0 d-inline-block mx-auto"
                                    style={{ width: "60px", backgroundColor: "#0791BE", height: "2px" }}
                                />
                                <div>


                                    <h6 className="text-uppercase fw-bold">Contact</h6>
                                    <hr
                                        className="mb-4 mt-0 d-inline-block mx-auto"
                                        style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
                                    />
                                    <p><i className="fas fa-home mr-3"></i> New York, NY 10012, US</p>
                                    <p><i className="fas fa-envelope mr-3"></i> info@example.com</p>
                                    <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                                    <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>


                                </div>

                            </div>


                            <div className="col-md-2 text-white col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 className="text-uppercase  fw-bold">Products</h6>
                                <hr
                                    className="mb-4 mt-0 d-inline-block mx-auto"
                                    style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
                                />
                                <p>
                                    <a href="/home" className="text-white text-decoration-none">Home</a>
                                </p>
                                <p>
                                    <a href="/shop" className="text-white text-decoration-none">Shop</a>
                                </p>
                                <p>
                                    <a href="/male" className="text-white text-decoration-none">Male</a>
                                </p>
                                <p>
                                    <a href="/female" className="text-white text-decoration-none">Female</a>
                                </p>
                                <p>
                                    <a href="/kids" className="text-white text-decoration-none">Kids</a>
                                </p>

                            </div>



                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold">Useful links</h6>
                                <hr
                                    className="mb-4 mt-0 d-inline-block mx-auto"
                                    style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
                                />
                                <p>
                                    <a href="#!" className="text-white text-decoration-none">Your Account</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-white text-decoration-none">Become an Affiliate</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-white text-decoration-none">Shipping Rates</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-white text-decoration-none">Help</a>
                                </p>
                            </div>


                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                                <h6 className="text-uppercase fw-bold">Subscribe</h6>
                                <hr
                                    className="mb-4 mt-0 d-inline-block mx-auto"
                                    style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
                                />
                                <p><i className="fas fa-home mr-3"></i> New York, NY 10012, US</p>
                                <p><i className="fas fa-envelope mr-3"></i> info@example.com</p>
                                <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                                <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
                            </div>

                        </div>

                    </div>
                </section>



                <div
                    className="text-center p-3"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }} >
                    © 2021 Copyright:
                    <a className="text-white text-decoration-none" href="https://monzu.com/"
                    > MONZU.COM</a >
                </div>

            </footer>

        </div>


    );
};

export default Footer;