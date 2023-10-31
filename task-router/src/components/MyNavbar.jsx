import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import logo from "../img/logo.gif";

//!react-bootstrap MyNavbar component


const MyNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Link to="/">
          <img className="logo" style={{ width: '30%', marginLeft:'2rem' }} alt="logo" src={logo} />
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink className="nav-link" to="/" style={({ isActive }) => ({ color: isActive && "red" })} >Home</NavLink>
            <NavLink className="nav-link" to="/details" style={({ isActive }) => ({ color: isActive && "red" })} >Details</NavLink>
            <a
              href="https://github.com/iamfatihay"
              className="nav-link"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://portfolio-fay-react.netlify.app/"
              className="nav-link"
              target="_blank"
              rel="noreferrer"
            >
              Portfolio
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
