import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import "../css/Style.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className='Navigation_head'>
      <Navbar expand="lg" className="nav_bg">
        <Container>
          <Navbar.Brand href="">RM</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href=""><Link to="/" >Home</Link></Nav.Link>
              <Nav.Link href=""><Link to="/" >Experience's</Link></Nav.Link>
              <Nav.Link href=""><Link to="/about" >About</Link></Nav.Link>
              <Nav.Link href=""><Link to="/contact_list" >Contact</Link></Nav.Link>
              <Nav.Link href=""><Link to="/register" >Register / Login </Link></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>

  );
}

export default NavBar;