import React, { useContext, useState } from "react";
import logo from "../../../assests/images/logo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import { Button, Image, } from "react-bootstrap";
import { FaUserCircle, FaMoon, FaSun } from 'react-icons/fa';
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const Header = () => {
  const {user, logOut} =useContext(AuthContext)
  const [open, setOpen] = useState(false);

  const handleSignOut = () =>{
    logOut()
    .then( () => {

    })
    .catch(e=>console.error(e))

  }

  const handleToggle = ()=>{
    setOpen(!open);
  }
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
            <NavLink to="/course" className="mx-4 px-2 py-1 rounded nav-items {({ isActive }) => (isActive ? 'active' : 'inactive' ">
              Courses
            </NavLink>
            <NavLink to="/faq" className="mx-4 px-2 py-1 rounded nav-items {({ isActive }) => (isActive ? 'active' : 'inactive' ">
              FAQ
            </NavLink>
          </Nav>

          <Nav>
            
            <div className="mx-4 px-2 py-1 rounded ">
              {user?.uid ? (
                <>
                  <Button variant="dark" onClick={handleSignOut}>
                    <Link className="me-2 login" to="/login">
                      Log Out
                    </Link>
                  </Button>
                </>
              ) : (
                <>
                  <Link className="me-2 login" to="/login">
                    Login
                  </Link>
                  <Link className="me-2 login" to="/register">
                    Register
                  </Link>
                </>
              )}
            </div>
            <Nav.Link className="mx-4 px-2 py-1 rounded">
              {user?.photoURL ? (
                <Tippy content={user?.displayName}>
                  <Image
                    style={{ height: "40px" }}
                    roundedCircle
                    src={user.photoURL}
                  ></Image>
                </Tippy>
              ) : (
                <FaUserCircle className="fs-4 text-white"></FaUserCircle>
              )}
            </Nav.Link>

            <Link>
              <Button onClick={handleToggle}>
                {open ? <FaMoon></FaMoon> : <FaSun></FaSun>}
              </Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
