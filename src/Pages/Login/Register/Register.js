import React, { useState } from 'react';
import { ButtonGroup, Button, Navbar } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const [registerData, setRegisterData] = useState({});
    const { user, registerUser, isLoading, authError } = useAuth();
    const history = useHistory();

    // Handle Onchange
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newRegisterData = { ...registerData };
        newRegisterData[field] = value;
        setRegisterData(newRegisterData);
    }

    // Handle Registration Submit
    const handleRegistrationSubmit = e => {
        if (registerData.password !== registerData.password2) {
            alert('your password is not matched');
            return
        }
        registerUser(registerData.email, registerData.password, registerData.name, history);
        e.preventDefault();
    }
    return (
        <div className="container-fluid">
            <div className="row login-info d-flex align-items-center">
                <div className="col-md-6 col-lg-3 col-sm-6 mx-auto bg-white rounded p-5">
                    <NavLink to="/home" className="text-decoration-none"><i className="fas fa-long-arrow-alt-left"></i> Back To Home</NavLink>
                    <h4 className="text-center py-3">Sign Up</h4>
                    {
                        user.email
                        &&
                        <div className="alert alert-success" role="alert">
                            Registration Successfully Completed
                        </div>
                    }
                    {
                        authError && <div className="alert alert-danger" role="alert">
                            {authError}
                        </div>
                    }
                    {!isLoading &&
                        <form onSubmit={handleRegistrationSubmit}>
                            <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Name</label>
                            <input onChange={handleOnChange} name="name" type="Text" className="form-control" id="exampleFormControlInput1" />
                        </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                                <input onChange={handleOnChange} name="email" type="email" className="form-control" id="exampleFormControlInput1" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Password</label>
                                <input onChange={handleOnChange} name="password" type="password" className="form-control" id="exampleFormControlInput1" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Confirm Password</label>
                                <input onChange={handleOnChange} name="password2" type="password" className="form-control" id="exampleFormControlInput1" />
                            </div>
                            <div className="text-center">
                                <Button className="btn btn-danger w-100" type="submit">Sign Up</Button>
                            </div>
                        </form>
                    }
                    {
                        isLoading && <div className="spinner-grow" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    }
                    <p className="text-center my-3">Or</p>
                    <div className="text-center">
                        <NavLink to="/login" className="text-decoration-none">Already a member? Login</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;