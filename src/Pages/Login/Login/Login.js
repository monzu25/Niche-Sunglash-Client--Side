import React, { useState } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { Button } from 'react-bootstrap'
import './Login.css'

const Login = () => {
    const [loginData, setLoginDate] = useState({});
    const { loginUser, signInWithGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();

    // Handle onBlur
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginDate(newLoginData);
    }

    // Handle Login Submit
    const handleLoginSubmit = e => {
        e.preventDefault();
        loginUser(loginData.email, loginData.password, location, history);
    }

    // Hangle Login With Google
    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history);
    }

    return (
        <div className="container-fluid">
            <div className="row login-info d-flex align-items-center">
                <div className="col-md-6 col-lg-3 col-sm-6 mx-auto bg-white rounded py-5 px-4">
                    <NavLink to="/home" className="text-decoration-none"><i class="fas fa-long-arrow-alt-left"></i> Back To Home</NavLink>
                    <h4 className="text-center py-4">Login</h4>
                    <form onSubmit={handleLoginSubmit}>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1">
                                <i class="fas fa-user"></i>
                            </span>
                            <input type="email" onBlur={handleOnBlur} name="email" class="form-control" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1">
                                <i class="fas fa-lock"></i>
                            </span>
                            <input type="password" onBlur={handleOnBlur} name="password" class="form-control" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                        <div className="text-center">
                            <input className="mx-auto w-100 btn btn-danger" type="submit" value="Login" />
                        </div>
                    </form>
                    <p className="text-center my-3">Or</p>
                    <div className="text-center">
                        <Button onClick={handleGoogleSignIn} className="mx-auto w-100 btn btn-primary mb-4"><i class="fab fa-google"></i> Login With Google</Button>
                    </div>
                    <div className="text-center">
                        <NavLink to="/register" className="text-decoration-none">New User? Register Here</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;