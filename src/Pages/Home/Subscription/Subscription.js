import React from 'react';
import './Subscription.css'

const Subscription = () => {
    return (
        <div className="subscription-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mx-auto text-center">
                        <div className="text-center">
                            <i className="fas fa-mail-bulk"></i>
                            <p>Put Your Email And Get New Products Update</p>
                        </div>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Email Address" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            <span className="input-group-text bg-danger text-white" id="basic-addon2">Subscribe</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscription;