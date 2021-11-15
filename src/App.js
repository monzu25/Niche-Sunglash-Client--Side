import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import AllProducts from './Pages/AllProducts/AllProducts/AllProducts';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/Login/PrivateRoute/PrivateRoute';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import ThankYou from './Pages/ThankYou/ThankYou';
import Orders from './Pages/Orders/Orders';
import ManageAllOrders from './Pages/ManageAllOrders/ManageAllOrders';
import ReviewCRUD from './Pages/Home/Reviews/ReviewCRUD';
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';
import AddProduct from './Pages/Dashboard/AddProduct/AddProduct';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import NotFound from '../src/Pages/NotFound/NotFound'

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/shop">
              <AllProducts></AllProducts>
            </Route>
            <Route path="/productDetails/:productId">
              <ProductDetails></ProductDetails>
            </Route>
            <Route path="/thankyou">
              <ThankYou></ThankYou>
            </Route>
            <PrivateRoute path="/placeOrder/:productId">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/orders">
              <Orders></Orders>
            </PrivateRoute>

            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/reviewCRUD">
              <ReviewCRUD></ReviewCRUD>
            </PrivateRoute>
            <PrivateRoute path="/makeAdmin">
              <MakeAdmin></MakeAdmin>
            </PrivateRoute>
            <PrivateRoute path="/addProduct">
              <AddProduct></AddProduct>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
