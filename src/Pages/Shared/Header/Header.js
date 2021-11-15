import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import '../Header/Header.css'

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <div style={{ height: "30px", backgroundColor: "#0791BE", }} className="social-nav">
                <div className="mx-5 p-1 text-end ">
                    <a href="" className="text-white me-5">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="" className="text-white me-4">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="" className="text-white me-4">
                        <i className="fab fa-google"></i>
                    </a>
                    <a href="" className="text-white me-4">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="" className="text-white me-4">
                        <i className="fab fa-linkedin"></i>
                    </a>
                </div>
            </div>







            {/* the end  */}
            <Navbar className="header-nav text-white" variant="light" sticky="top" expand="lg">
                <Container>
                    <Navbar.Brand as={HashLink} to="/home" className="brand"><span className="text-white text-uppercase fw-bold">Aryan LOOK</span></Navbar.Brand>

                    <Navbar.Toggle className="bg-white" aria-controls="navbarScroll" />

                    <Navbar.Collapse id="navbarScroll" className="justify-content-end">
                        <Nav
                            className="mr-auto my-2 my-lg-0 my-nav"
                            style={{ color: "white" }}
                            navbarScroll
                        >
                            <Nav.Link as={HashLink} to="/home"><span className="text-white">Home</span></Nav.Link>
                            <Nav.Link as={Link} to="/shop"><span className="text-white">Shop</span></Nav.Link>

                            {
                                user.email
                                    ?
                                    <>
                                        <Nav.Link as={Link} to="/dashboard"><span className="text-white">Dashboard</span></Nav.Link>
                                        <Button onClick={logOut} className="btn btn-danger text-white">LogOut</Button>

                                    </>
                                    :
                                    <div className="d-flex">
                                        <Nav.Link as={Link} to="/login"><span className="text-white">Login</span></Nav.Link>
                                        <Nav.Link as={Link} to="/register"><span className="text-white">Sign Up</span></Nav.Link>
                                    </div>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;