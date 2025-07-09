
import { Link } from 'react-router-dom';
import { Navbar,Container,Nav, NavDropdown } from 'react-bootstrap';
import {FaShoppingCart, FaUser} from 'react-icons/fa';
import logo from "../assets/logo.png";
function Header() {
  return (
     <header>
        <Navbar expand="lg" className="bg-body-dark">
      <Container>
        <Navbar.Brand href="#home"><img src={logo}/>ProShop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
         <Nav className="ms-auto">
  <Nav.Link href="#home">
    <FaShoppingCart /> Cart
  </Nav.Link>
  <Nav.Link href="#link">
    <FaUser /> Sign In
  </Nav.Link>
</Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
     </header>
  );
}

export default Header;
