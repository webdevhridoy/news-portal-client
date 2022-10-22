import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import LeftSideNav from '../leftsidenav/LeftSideNav';


const Header = () => {
    const { user, userSignOut } = useContext(AuthContext);

    const signOutHandle = () => {
        userSignOut()
            .then(() => { })
            .catch(error => {
                console.log(error);
            });
    };


    return (
        <div className='mb-5'>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand><Link to='/'>News Portal</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link>Profile</Nav.Link>
                            <Nav.Link href="#pricing">All News</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>

                            <Link to='/profile'>
                                {
                                    user?.photoURL ?
                                        <Image style={{ height: '40px' }} roundedCircle src={user.photoURL}></Image>
                                        :
                                        <FaUser></FaUser>
                                }
                            </Link>
                            <Nav.Link eventKey={2} href="#memes">
                                {user?.uid ?
                                    <>
                                        <span className='me-2'>{user.displayName} </span>
                                        <button onClick={signOutHandle}>Sign Out</button>
                                    </>
                                    :
                                    <>
                                        <Link className='mx-2' to='/login'>Login</Link>
                                        <Link className='mx-2' to='/register'>Register</Link>
                                    </>

                                }
                            </Nav.Link>

                        </Nav>
                        <div className='d-lg-none'>
                            <LeftSideNav></LeftSideNav>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;