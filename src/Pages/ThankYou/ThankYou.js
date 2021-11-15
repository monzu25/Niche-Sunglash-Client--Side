import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ThankYou.css'

const ThankYou = () => {
    return (
        <div className="container notfound-container">
            <div className="row  ">
                <div className="col-md-12 text-center">
                    <img src="https://www.assignmentpoint.com/wp-content/uploads/2019/10/Thanks-for-purchase-of-software.jpg" className="img-fluid w-50" alt="" />
                </div>
                <div className="col-md-12 text-center ">

                    <Link to="/shop"><Button className="text-white btn btn-danger w-50">Check Our More Products</Button></Link>
                </div>
            </div>
        </div>
    )
};

export default ThankYou;