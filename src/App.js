import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CarouselFadeExample from './carousel';
import './App.css';
import DisplayHomeImg from './homephoto';
import ButtonComponent from './ButtonComponent';




function App() {

  return (
    <>
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

  <div id="wholepage">

{/* THE TOP DIV */}
    <div id="top-page">
  <h1 id="titleh1">Iglesia Voz de Dios</h1>
  <h3>Pastor Roberto Castro</h3>
  <div className="App">
      <ButtonComponent /> 
    </div>
    {/* <div className="App">
      <h1>Latest YouTube Video</h1>
      <LatestVideo /> {/* Use the component */}
  <DisplayHomeImg/>
  <div id="caro">
      </div>
      </div>
  {/* END OF TOP DIV */}



{/* THE MIDDLE DIV */}
    <div id="middle-page">
      <div id="middle-left">
       <h4>Visit our location</h4>
       <p>1530 4th Ave Folsom, PA 19033</p>
       <h4>Service Hours</h4>
       <ul>
        <li>Sunday 3:30PM - Main Service</li>
        <li>Wednesday 7:30PM - Prayer</li>
       </ul>
       <h4>Social Networks:</h4>
       <ul>
        <li><a href="">Youtube</a></li>
        <li><a href="">Facebook</a></li>
        <li><a href="">Instagram</a></li>
        <li><a href="">TikTok</a></li>
       </ul>
      </div>
      <div id="middle-middle">
      <Container className="mt-3">
        <CarouselFadeExample />
      </Container>
      </div>
      <div id="middle-right">
        <h2>Calendar Goes Here</h2>
      </div>
      </div>
{/* END OF MIDDLE DIV */}



{/* THE BOTTOM DIV */}
    <div id="bottom-page">
     <div>
      <h2 id="youtube-title">Latest Live Service:</h2>
     <iframe width="560" height="315" src="https://www.youtube.com/embed/rMp7kdSTAz0?si=OlKUzs_CqEfsACoA" id="youtube" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
     </div>
      </div>
{/* END OF BOTTOM DIV */}


      </div>
      <footer>All rights reserved - Iglesia Voz de Dios © 2024</footer>
  </>
 
);
}

export default App;