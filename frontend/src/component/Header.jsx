
import { Link } from 'react-router-dom';
import {Badge, Navbar,Container,Nav, NavDropdown } from 'react-bootstrap';
import {FaShoppingCart, FaUser} from 'react-icons/fa';
import logo from "../assets/logo.png";
import {useSelector} from "react-redux";
function Header() {
  const {cartItem}=useSelector((state)=>state.cart)
  return (
     <header>
        <Navbar expand="lg" className="bg-body-dark">
      <Container>
        <Navbar.Brand href="#home"><img src={logo}/>ProShop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
         <Nav className="ms-auto">
  <Nav.Link href="/cart">
    <FaShoppingCart /> Cart
    {cartItem.length>0 && (
      <Badge pill bg='success' style={{marginLeft:'5px'}}>
        {cartItem.reduce((a,c)=>a+c.qty,0)}
      </Badge>
    )}
  </Nav.Link>
  <Nav.Link href="/login">
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
