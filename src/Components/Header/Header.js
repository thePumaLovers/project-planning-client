import './Header.css'
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Container className="header">
      <Navbar bg="dark" expand="lg">
        <Container className="nav-bar">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link className="nav-bar-link" to="/">
               Home
              </Link>
              <Link className="nav-bar-link" to="/groups">
                Groups
              </Link>
              <Link className="nav-bar-link" to="/projects">
                Projects
              </Link>
              <Link className="nav-bar-link" id="bottom-link" to="/team">
                Team
              </Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Brand className="brand"><p id="brand-text">Project Planning</p></Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Header;

{
  /* <nav>
<ul>
  <li><Link to='/'>Home</Link></li>
  <li><Link to='/groups'>Groups</Link></li>
  <li><Link to='/projects'>Projects</Link></li>
  <li><Link to='/team'>Team</Link></li>
</ul>
</nav> */
}
