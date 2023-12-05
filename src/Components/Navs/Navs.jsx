import React from 'react';
import {Navbar,Container,Nav,NavDropdown} from 'react-bootstrap';
import './navs.css';
import logo from '../../Assets/logo.png';
//2links for react fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faArrowRight, faPhone, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const Navs = () => {
    return (
        <div>
            <Navbar expand="lg" className='bg-light'>
                <Container>
                    <Navbar.Brand href="#">
                        <img src={logo} alt="logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav>
                            <Link to='/home' className='active'>Home</Link>
                            {/* <Link className='active' to='/home'>Home</Link> */}
                            <NavDropdown title="Pages" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">About Us</NavDropdown.Item>
                                <NavDropdown.Item href="#action3">Our Team</NavDropdown.Item>
                                <NavDropdown.Item href="#action3"> FAQ'S</NavDropdown.Item>
                                <NavDropdown.Item href="#action3">Booking</NavDropdown.Item>
                                <NavDropdown.Item href="#action3">Error 404</NavDropdown.Item>
                                <NavDropdown.Item href="#action3">Login / Register</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Services" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Services</NavDropdown.Item>
                                <NavDropdown.Item href="#action3">Services Detailes</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Blogs" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Blog</NavDropdown.Item>
                                <NavDropdown.Item href="#action3">Blogs Detailes</NavDropdown.Item>
                            </NavDropdown>
                            <Link to='/contactUs'>Contact Us</Link>
                            <Nav.Link>
                                <FontAwesomeIcon icon={faSearch} />
                            </Nav.Link>
                            <Nav.Link>
                            <FontAwesomeIcon icon={faPhone} className='phone' />
                                icon +(+01)999 254 236</Nav.Link>
                            <Nav.Link>
                                <button>Contact Us <span> <FontAwesomeIcon icon={faArrowRight} /> </span> </button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Navs;
