import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'


const Header = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
  <Container>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Brand href="#home">Project Planning</Navbar.Brand>
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Groups</Nav.Link>
        <Nav.Link href="#link">Projects</Nav.Link>
        <Nav.Link href="#link">Team</Nav.Link>
      </Nav>
    </Navbar.Collapse>
    

  </Container>
</Navbar>
    </div>
  );
};

export default Header;
