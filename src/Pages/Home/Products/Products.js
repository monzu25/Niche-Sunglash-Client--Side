import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import SingleProduct from '../SingleProduct/SingleProduct';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (

        <div className="container my-5">
            <h1 className="text-center mb-3">New Collection</h1>
            <Row xs={1} md={3} className="g-4">
                {
                    products.slice(6, 12).map(product => <SingleProduct
                        key={product._id}
                        product={product}
                    ></SingleProduct>)
                }
            </Row>
        </div>

    );
};

export default Products;