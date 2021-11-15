import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const SingleAllProducts = ({ product }) => {

    const { _id, title, img, price, description, rating } = product;

    return (

        <Col>
            <Card className="shadow  mb-3 bg-body rounded bg-light">

                <Card.Img className="img-hovering" height="300px" variant="top" src={img} />

                <Card.Body >
                    <Card.Title className="text-justify" style={{ minHeight: "80px", color: "#003E53", fontSize: "18px" }} >{title}</Card.Title>

                    <div className="d-flex flex-row justify-content-between">

                        <Card.Text style={{ fontSize: "18px", fontWeight: "bold" }}>Price: $ {price}</Card.Text>
                        <Card.Text>
                            <Rating style={{ color: "#fdcc0d" }}
                                initialRating={rating}
                                emptySymbol="far fa-star icon-color"
                                fullSymbol="fas fa-star icon-color"
                                readonly>

                            </Rating>
                        </Card.Text>
                    </div>

                    <div className="btn-service d-flex flex-row justify-content-between">
                        <Link to={`/productDetails/${_id}`}>
                            <button type="button" className="btn btn-outline-primary">Buy Now </button>
                        </Link>

                    </div>
                </Card.Body>
            </Card>
        </Col>

    );
};

export default SingleAllProducts;