import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { getLogOut } from "../../../redux/action/generalActions";

const Header = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.general);
  let { isLoggedin, loginData } = data;

  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
      <Container>
        <Link className="navbar-brand" to="/">
          Ramen
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" exact className="nav-link" activeClassName="active">
              Members
            </NavLink>
          </Nav>
          <Nav>
            {isLoggedin ? (
              <>
                <NavDropdown title="UserName" id="basic-nav-dropdown">
                  <NavDropdown.Item>
                    <Link
                      to={`/profile/${loginData.userId}`}
                      exact
                      className="dropdown-item p-0"
                    >
                      View Profile
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <button
                      className='dropdown-item p-0'
                      onClick={() => dispatch(getLogOut())}
                    >
                      Logout
                    </button>
                  </NavDropdown.Item>
                  {/* <NavDropdown.Item>Change Password</NavDropdown.Item> */}
                </NavDropdown>
              </>
            ) : (
              <>
                <NavLink
                  to="/login"
                  exact
                  className="nav-link"
                  activeClassName="active"
                >
                  Login
                </NavLink>
                <NavLink
                  to="/signup"
                  exact
                  className="nav-link"
                  activeClassName="active"
                >
                  SignUp
                </NavLink>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
