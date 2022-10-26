import React, { useContext } from "react";
import logo from "../../../assests/images/logo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import { Image } from "react-bootstrap";
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {
  const {user} =useContext(AuthContext)
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="sticky-top"
    >
      <Container>
        <Navbar.Brand>
          <Link
            to="/"
            className="text-decoration-none d-flex align-items-center text-light fw-bold fs-2 "
          >
            <img
              alt=""
              src={logo}
              width="40"
              height="40"
              className="d-inline-block align-top rounded-circle me-2"
            />{" "}
            Tutor Academy
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ">
            <NavLink
              to="/home"
              className="ms-5 me-4 px-2 py-1 rounded nav-items {({ isActive }) => (isActive ? 'active' : 'inactive' "
            >
              Home
            </NavLink>
            <Link to="/courses" className="mx-4 px-2 py-1 rounded nav-items">
              Courses
            </Link>
            <Link to="/faq" className="mx-4 px-2 py-1 rounded nav-items">
              FAQ
            </Link>
            <Link to="/blog" className="mx-4 px-2 py-1 rounded nav-items">
              Blog
            </Link>
          </Nav>
          <Nav>
            <Link to="/login" className="me-2 login">
              Sign In
            </Link>
            <Link to="/register" className="me-2 login">
              Sign Up
            </Link>
            
            <Link className="mx-4 px-2 py-1 rounded ">
              {user?.displayName}
            </Link>
            <Link  className="mx-4 px-2 py-1 rounded">
              {user?.photoURL? 
              <Image style={{height: '40px'}} roundedCircle src={user.photoURL}></Image>
              :
              <FaUserCircle className="fs-4 text-white"></FaUserCircle>
            }
            </Link>

            <Link>Dark/light</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
