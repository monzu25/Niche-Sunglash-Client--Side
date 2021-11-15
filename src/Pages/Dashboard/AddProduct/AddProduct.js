import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Rating from 'react-rating';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';

const AddProduct = () => {
    const [product, setProduct] = useState({});
    const [getAllProducts, setGetAllProducts] = useState([]);

    fetch('https://polar-springs-09638.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setGetAllProducts(data))

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newProduct = { ...product };
        newProduct[field] = value;
        setProduct(newProduct);
    }

    const handleProductSubmit = e => {
        fetch('https://polar-springs-09638.herokuapp.com/product/add', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Product added successfully');
                    fetch('https://polar-springs-09638.herokuapp.com/products')
                        .then(res => res.json())
                        .then(data => setGetAllProducts(data))
                }
                else {
                    alert('Something is wrong');
                }
            })
        e.preventDefault();
    }
    return (
        <>
            <div className="container my-3">
                <div className="row my-5">
                    <div className="col-md-4">
                        <form>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Product Name</label>
                                <input type="text" name="title" onBlur={handleOnBlur} className="form-control" id="exampleFormControlInput1" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Description</label>
                                <textarea type="text" name="description" onBlur={handleOnBlur} className="form-control" id="exampleFormControlInput1" cols="30" rows="10"></textarea>
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Price</label>
                                <input type="number" name="price" onBlur={handleOnBlur} className="form-control" id="exampleFormControlInput1" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Image Link</label>
                                <input type="text" name="img" onBlur={handleOnBlur} className="form-control" id="exampleFormControlInput1" />
                            </div>
                        </form>
                        <Button onClick={handleProductSubmit} className="btn bg-success p-2 text-white bg-opacity-75 text-white w-100 text-uppercase"><i class="fas fa-location-arrow"></i> Post</Button>
                    </div>
                    <div className="col-md-8 mt-1">
                        <table className="table bordered">
                            <thead>
                                <tr>
                                    <th>Product Name</th>
                                    <th>Description</th>
                                    <th>Image</th>
                                    <th>Price</th>
                                    <th>Rating</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    getAllProducts.map(singleProduct => <tr
                                        key={singleProduct._id}
                                    >
                                        <td>{singleProduct.title}</td>
                                        <td>{singleProduct.description.slice(0, 100)}</td>
                                        <td><img style={{ width: '100px', height: 'auto' }} src={singleProduct.img} alt="" /></td>
                                        <td>$ {singleProduct.price}</td>

                                        <td style={{ width: "120px" }} >  <Rating style={{ color: "#fdcc0d" }}
                                            initialRating={singleProduct.rating}
                                            emptySymbol="far fa-star icon-color"
                                            fullSymbol="fas fa-star icon-color"
                                            readonly>

                                        </Rating></td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddProduct;