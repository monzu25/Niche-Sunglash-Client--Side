import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Header from '../Shared/Header/Header'
import Footer from '../Shared/Footer/Footer'
import Rating from 'react-rating';

const ProductDetails = () => {
    const { productId } = useParams();

    // const location = useLocation();
    // const getId = location.pathname.split('/').pop();

    const [product, setProduct] = useState({});
    useEffect(() => {
        fetch(`https://polar-springs-09638.herokuapp.com/products/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    return (
        <>
            <Header></Header>
            <div className="service-details" style={{ minHeight: '500px' }}>
                {/* <h1>{{ productId }}</h1> */}

                <div className="container">
                    <div className="row py-4 d-flex align-items-center">
                        <div className="col-md-6">
                            <h3>{product?.title}</h3>
                            <p>{product?.description}</p>
                            <div className="d-flex felx-row justify-content-between">
                                <h5>Fee: ${product?.price}</h5>
                                <p>Category: {product?.category}</p>
                                <div className="me-5">
                                    <Rating style={{ color: "#fdcc0d" }}
                                        initialRating={product?.rating}
                                        emptySymbol="far fa-star icon-color"
                                        fullSymbol="fas fa-star icon-color"
                                        readonly>

                                    </Rating>
                                </div>
                            </div>
                            <Link to={`/placeOrder/${product?._id}`} className="btn btn-danger text-white"><i className="fas fa-cart-plus"></i> Buy Now</Link>
                        </div>
                        <div className="col-md-6 d-flex justify-content-center">
                            <img className="rounded w-75" src={product?.img} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default ProductDetails;