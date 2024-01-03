import React from "react";
import "./styles.scss";

import Container from "react-bootstrap/Container";

import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Images } from "../../assets/images/images";
import { GetPaths } from "../../NavigationPaths/navigations";

const NavbarComponent = () => {
  return (
    <>
      <Navbar expand="lg" className="main-head">
        <Container>
          <Navbar.Brand href="home">
            <img
              src={Images.logoImage}
              width="80"
              height="80"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to={GetPaths.About} className="nav-link">
                About
              </Link>
              <Link to={GetPaths.Contact} className="nav-link">
                Contact Us
              </Link>
              <Link to={GetPaths.Why} className="nav-link">
                Why Us
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
