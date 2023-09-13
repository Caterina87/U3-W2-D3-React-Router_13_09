import { Component } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

class TopBar extends Component {
  render() {
    return (
      <Navbar expand="lg" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="assets/logo.png"
              width="90"
              height="45"
              className="d-inline-block align-top"
              alt="Netflix React"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link className="nav-link active" href="#link">
                TV Show
              </Nav.Link>
              <Nav.Link href="#link">Movies</Nav.Link>
              <Nav.Link href="#link">Recenely Added</Nav.Link>
              <Nav.Link href="#link">My List</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default TopBar;
