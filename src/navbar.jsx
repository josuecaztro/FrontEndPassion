import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';


function GenerateNav(){

return (
<Navbar expand="lg" className="bg-body-tertiary" class="nav" data-bs-theme="dark">
<Container>
  <Navbar.Brand href="#home">Iglesia Voz de Dios</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">About Us</Nav.Link>
      <Nav.Link href="#link">Mission</Nav.Link>
      <Nav.Link href="#link">Events</Nav.Link>
      <Nav.Link href="/contactusPage.html">Prayer Request</Nav.Link>
      <NavDropdown title="Contact Us" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">E-Mail</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">
          Another action
        </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Send Message</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">
          Separated link
        </NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Container>
</Navbar> 
)
};

export default GenerateNav;