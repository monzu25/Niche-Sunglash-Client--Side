import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const ManageAllOrders = () => {
    const [allOrders, setAllOrders] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/order`)
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, []);

    // Delete an order form my order
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/order/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('Deleted');
                        const remainingOrders = allOrders.filter(single => single._id !== id);
                        setAllOrders(remainingOrders);
                    }
                })
        }
    };

    // Update Order Status
    const handleStatusUpdate = id => {
        const proceed = window.confirm('Are you sure, you want to update the status?');
        if (proceed) {
            fetch(`http://localhost:5000/order/status/${id}`, {
                method: 'PUT'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('Status Updated');
                        const remainingOrders = allOrders.filter(single => single._id === id);
                        setAllOrders(remainingOrders);
                    }
                })
        }
    }

    return (
        <>
            <div className="container">
                <div className="row my-4">
                    <h4 className="text-center mb-4">Manage All Orders</h4>
                    <table className="table bordered">
                        <thead className="thead-dark">
                            <tr>
                                {/* <th>#</th> */}
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Image</th>
                                <th>Shipping Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allOrders.map(singleOrder => <tr
                                    key={singleOrder._id}
                                >
                                    {/* <th>1</th> */}
                                    <td>{singleOrder.title}</td>
                                    <td>{singleOrder.price}</td>
                                    <td><img style={{ width: '100px', height: 'auto' }} src={singleOrder.img} alt="" /></td>
                                    <td>{singleOrder.status}</td>
                                    <td><Button onClick={() => handleStatusUpdate(singleOrder._id)} className="btn btn-success btn-sm">Confirm</Button></td>
                                    <td><Button onClick={() => handleDelete(singleOrder._id)} className="btn btn-danger btn-sm">Delete</Button></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default ManageAllOrders;