import React from 'react';
import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const Header = () => {
    return (

    <Navbar collapseOnSelect expand="lg" bg="white" variant="black">
      <Container className='header-container'>
        <Navbar.Brand href="#home">Knowledge Cafe</Navbar.Brand>
          <Nav>
            <Nav.Link href="#deets">Home</Nav.Link>
            <Nav.Link href="#deets">About</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Contact Us
            </Nav.Link>
          </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
        