import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const TopBar = () => {
  const location = useLocation();

  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img src="assets/logo.png" width="90" height="45" className="d-inline-block align-top" alt="Netflix React" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className={`nav-link ${location.pathname === "/" && "active"}`} to="/">
              Home
            </Link>
            <Link className={`nav-link ${location.pathname === "/" && "active"}`} to="TvShows">
              TV Show
            </Link>
            <Link className={`nav-link ${location.pathname === "/" && "active"}`} to="MoviesDetails">
              Movies
            </Link>
            <Nav.Link href="#link">Recenely Added</Nav.Link>
            <Nav.Link href="#link">My List</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopBar;
