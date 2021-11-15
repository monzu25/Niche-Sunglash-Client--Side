import React from 'react';
import './Dashboard.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddProduct from '../AddProduct/AddProduct';
import DashboardHome from '../DashboardHome/DashboardHome';
import Orders from '../../Orders/Orders';
import ManageAllOrders from '../../ManageAllOrders/ManageAllOrders';
import useAuth from '../../../hooks/useAuth';
import { Button } from 'react-bootstrap';
import ReviewCRUD from '../../Home/Reviews/ReviewCRUD';
import Payment from '../Payment/Payment';


const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const { user, logOut, admin } = useAuth();

    return (
        <div className="d-flex" id="wrapper">
            {/* Sidebar */}
            <div className="bg-white" id="sidebar-wrapper">
                <div className="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom">ARYAN LOOK</div>
                <div className="list-group list-group-flush my-3">

                    {/* <Link href="#" className="list-group-item list-group-item-action bg-transparent second-text active"><i
                        className="fas fa-tachometer-alt me-2"></i>Dashboard</Link> */}

                    <Link to="/" className="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i
                        className="fas fa-home"></i> Home</Link>

                    <Link to={`${url}`} className="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i
                        className="fas fa-tachometer-alt"></i> Dashboard</Link>

                    {
                        !admin &&
                        <>
                            <Link to={`${url}/myOrders`} className="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i className="fas fa-cart-arrow-down"></i> My Orders</Link>

                            <Link to={`${url}/payment`} className="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i className="fab fa-amazon-pay"></i> Payment</Link>

                            <Link to={`${url}/myReviews`} className="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i className="fas fa-search-location"></i> My Reviews</Link>
                        </>
                    }

                    {admin &&
                        <>
                            <Link to={`${url}/makeAdmin`} className="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i
                                className="fas fa-users"></i> Make Admin</Link>

                            <Link to={`${url}/addProduct`} className="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i
                                className="fas fa-pen-square"></i> Add Product</Link>

                            <Link to={`${url}/manageOrders`} className="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i
                                className="fas fa-border-all"></i> Manage Orders</Link>
                        </>
                    }



                    <Link to="/home" className="list-group-item list-group-item-action bg-transparent text-danger fw-bold"><i
                        className="fas fa-power-off me-2"></i><span onClick={logOut}>Logout</span></Link>
                </div>
            </div>
            {/* sidebar-wrapper */}

            {/* Page Content */}
            <div id="page-content-wrapper">
                <nav className="navbar navbar-expand-lg navbar-light bg-transparent py-4 px-4">
                    <div className="d-flex align-items-center">
                        <i className="fas fa-align-left primary-text fs-4 me-3" id="menu-toggle"></i>
                    </div>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <li><i className="fas fa-user me-2"></i> {user.displayName}</li>

                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" href="#">Profile</Link></li>
                                    <li><Link className="dropdown-item" href="#">Settings</Link></li>
                                    <li><Link className="dropdown-item" href="#">Logout</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>

                {/* Content Goes Here */}
                <div className="container-fluid px-4" style={{ backgroundColor: 'rgba(149, 165, 166,0.2)' }}>
                    <div className="row g-3">
                        <Switch>
                            <Route exact path={path}>
                                <DashboardHome></DashboardHome>
                            </Route>
                            <Route path={`${path}/makeAdmin`}>
                                <MakeAdmin></MakeAdmin>
                            </Route>
                            <Route path={`${path}/addProduct`}>
                                <AddProduct></AddProduct>
                            </Route>
                            <Route path={`${path}/myOrders`}>
                                <Orders></Orders>
                            </Route>
                            <Route path={`${path}/manageOrders`}>
                                <ManageAllOrders></ManageAllOrders>
                            </Route>
                            <Route path={`${path}/myReviews`}>
                                <ReviewCRUD></ReviewCRUD>
                            </Route>
                            <Route path={`${path}/payment`}>
                                <Payment></Payment>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Dashboard;