import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import SingleProduct from '../../Home/SingleProduct/SingleProduct';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import SingleAllProducts from '../SingleAllProducts/SingleAllProducts';

const AllProducts = () => {
    const [allProducts, setAllProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
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
            {/* <div className="p-5" id="services">
                <div className="container">
                    <h2 className="text-center mb-5">All Products</h2>
                    <div className="row row-cols-1 row-cols-lg-4 row-cols-md-2 g-4">
                        {
                            allProducts.map(product => <SingleAllProducts
                                key={product._id}
                                product={product}
                            ></SingleAllProducts>)
                        }
                    </div>
                </div>
            </div> */}
            <Footer></Footer>
        </>
    );
};

export default AllProducts;