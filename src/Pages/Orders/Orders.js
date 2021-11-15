import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const Orders = () => {
    const { user } = useAuth();
    const [myOrder, setMyOrder] = useState([]);
    useEffect(() => {
        fetch(`https://polar-springs-09638.herokuapp.com/order/${user.email}`)
            .then(res => res.json())
            .then(data => setMyOrder(data));
    }, []);

    // Delete an order form my order
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://polar-springs-09638.herokuapp.com/order/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('Deleted');
                        const remainingOrders = myOrder.filter(single => single._id !== id);
                        setMyOrder(remainingOrders);
                    }
                })
        }
    }
    return (
        <>
            <div className="container" style={{ minHeight: '500px' }}>
                <div className="row my-4">
                    <div className="col-md-8">
                        {
                            myOrder.map(singleOrder => <div
                                key={singleOrder._id}
                            >
                                <div class="card mb-3" style={{ maxWidth: '540px' }}>
                                    <div class="row g-0">
                                        <div class="col-md-4">
                                            <img src={singleOrder.img} class="img-fluid rounded-start" alt="..." />
                                        </div>
                                        <div class="col-md-8">
                                            <div class="card-body">
                                                <h5 class="card-title">{singleOrder.title}</h5>
                                                <p class="card-text"><small class="text-muted">Price: {singleOrder.price}</small></p>
                                            </div>
                                            <div className="d-flex justify-content-end">
                                                <button className='btn btn-danger' onClick={() => handleDelete(singleOrder._id)}>Remove</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )
                        }
                    </div>
                    <div className="col-md-4">
                        <h2>Service Selected: {myOrder.length}</h2>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Orders;