import React, { useEffect, useRef, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Redirect, useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const PlaceOrder = () => {
    const location = useLocation();
    const getId = location.pathname.split('/').pop();
    const { user } = useAuth();
    const [product, setProduct] = useState({});
    const [selectedProduct, setSelectedProduct] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/products/${getId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    //Add to cart

    const addressRef = useRef();
    const phoneRef = useRef();

    const addToCart = product => {
        const isAvailable = selectedProduct.find(selected => selected._id === product._id);

        const address = addressRef.current.value;
        const phone = phoneRef.current.value;

        delete product._id;
        product.userEmail = user.email;
        product.status = 'pending';
        product.address = address;
        product.phone = phone;

        if (isAvailable) {
            alert('Already added this item on cart.');
        }
        else {
            fetch('http://localhost:5000/order/add', {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(product)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        const newSelection = [...selectedProduct, product];
                        setSelectedProduct(newSelection)
                    }
                })
        };
    }

    return (
        <>
            <Header></Header>
            <div className="container my-5">
                <div className="row d-flex align-items-center">
                    <h2 className="text-center">Place Your Order Now</h2>
                    <div className="col-md-8">
                        <img className="rounded w-50" src={product?.img} alt="" />
                        <h3>{product?.title}</h3>
                        <p className="w-75">{product?.description}</p>
                        <h5>Fee: ${product?.price}</h5>
                    </div>
                    <div className="col-md-4">
                        <form>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Name</label>
                                <input value={user.displayName} type="text" className="form-control" id="exampleFormControlInput1" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Email Address</label>
                                <input type="text" value={user.email} disabled className="form-control" id="exampleFormControlInput1" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Shipping Address</label>
                                <input type="text" ref={addressRef} className="form-control" id="exampleFormControlInput1" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Contact Number</label>
                                <input ref={phoneRef} type="text" className="form-control" id="exampleFormControlInput1" />
                            </div>
                        </form>
                        <Link to={'/thankyou'}><Button className="btn btn-danger text-white w-100" onClick={() => addToCart(product)}><i className="fas fa-cart-plus"></i> Place Order</Button></Link>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default PlaceOrder;