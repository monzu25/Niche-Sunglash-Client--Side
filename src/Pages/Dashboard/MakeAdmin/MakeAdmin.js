import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://polar-springs-09638.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true);
                    setEmail('');
                }
            })
        e.preventDefault();
    }
    return (
        <>
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-md-6 col-lg-3 col-sm-6 mx-auto rounded py-5 px-4">
                        {
                            success && <div class="alert alert-success" role="alert">
                                Make admin successful
                            </div>
                        }
                        <h4 className="text-center py-4">Make An Admin</h4>
                        <form onSubmit={handleAdminSubmit}>
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1">
                                    <i class="fas fa-user"></i>
                                </span>
                                <input type="email" onBlur={handleOnBlur} name="email" class="form-control" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div className="text-center">
                                <input className="mx-auto w-100 btn bg-success p-2 text-white bg-opacity-75" type="submit" value="Set As Admin" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MakeAdmin;