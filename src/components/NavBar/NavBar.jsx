import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Search the Bank</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Select a city" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Mumbai</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Delhi</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Bangaluru</NavDropdown.Item>
              <NavDropdown.Item href="#action   /3.1">Pune</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Dehradun</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Search categories" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">IFSC</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Bank Name</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Bank ID</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Branch</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">District</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">All Banks</Nav.Link>
            <Nav.Link href="#deets">Favourite</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
