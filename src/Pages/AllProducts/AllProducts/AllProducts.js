import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import SingleProduct from '../../Home/SingleProduct/SingleProduct';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import SingleAllProducts from '../SingleAllProducts/SingleAllProducts';

const AllProducts = () => {
    const [allProducts, setAllProducts] = useState([]);
    useEffect(() => {
        fetch('https://polar-springs-09638.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setAllProducts(data))
    }, []);
    return (
        <>
            <Header></Header>
            <div className="container my-5">
                <h2 className="my-3 text-center">All Collection</h2>
                <Row xs={1} md={3} className="g-4">
                    {
                        allProducts.map(product => <SingleAllProducts
                            key={product._id}
                            product={product}
                        ></SingleAllProducts>)
                    }
                </Row>
            </div>

            <Footer></Footer>
        </>
    );
};

export default AllProducts;