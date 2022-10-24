import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/" className='text-decoration-none'>
              <img
                alt=""
                src="/logo.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{" "}
              Tutor Academy
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto ">
              <div className="">
                <Link to="/home" className="me-2 text-decoration-none">
                  Home
                </Link>
                <Link to="/courses" className="me-2 text-decoration-none">Courses</Link>
                <Link to="/faq" className="me-2 text-decoration-none">
                  FAQ
                </Link>
                <Link to="/blog" className="me-2 text-decoration-none">Blog</Link>
              </div>
            </Nav>
            <Nav>
                <Link to='/login'  className="me-2 text-decoration-none">Sign In</Link>
                <Link to='/register'  className="me-2 text-decoration-none">Sign Up</Link>

              <Link>Dark/light</Link>
             
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;