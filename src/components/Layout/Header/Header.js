import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand='md' bg='dark' variant='dark'>
      <Container>
        <Link className='navbar-brand' to='/'>
          Ramen
        </Link>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'>
            <NavLink to='/' exact className='nav-link' activeClassName='active'>
              Members
            </NavLink>
          </Nav>
          <Nav>
            <NavLink
              to='/login'
              exact
              className='nav-link'
              activeClassName='active'
            >
              Login
            </NavLink>
            <NavLink
              to='/signup'
              exact
              className='nav-link'
              activeClassName='active'
            >
              SignUp
            </NavLink>
            <Nav.Link>UserPhoto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
