import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ThankYou.css'

const ThankYou = () => {
    return (
        <div className="container notfound-container">
            <div className="row ">
                <div className="col-md-8 mx-auto">
                    <img src="https://i.ibb.co/qkDDjxy/thanks.png" className="img-fluid w-50" alt="" />
                </div>
                <div className="col-md-8 mx-auto">
                    <h4>Thank You For Placing Order</h4><br />
                    <Link to="/allProducts"><Button className="text-white btn btn-danger w-25">Check Our More Products</Button></Link>
                </div>
            </div>
        </div>
    )
};

export default ThankYou;