import React from 'react'
import {LinkContainer } from 'react-router-bootstrap'
import 'font-awesome/css/font-awesome.min.css'
import {Navbar , Nav , Container } from 'react-bootstrap'
const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand className="py-1" ><h3>PahShop</h3></Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <LinkContainer to="/dashboard">
                  <Nav.Link>
                    <i className="fa fa-cogs"></i> Dashboard
                  </Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
  )
}

export default Header
