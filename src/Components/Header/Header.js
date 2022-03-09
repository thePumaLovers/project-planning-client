import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Brand>Project Planning</Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/">
               Home
              </Link>
              <Link to="/groups">
                Groups
              </Link>
              <Link to="/projects">
                Projects
              </Link>
              <Link to="/team">
                Team
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
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
