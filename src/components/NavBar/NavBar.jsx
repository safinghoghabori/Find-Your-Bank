import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
} from "react-bootstrap";

const NavBar = (props) => {
  const {
    selectedCity,
    selectedCategory,
    handleCityChange,
    handleCategoryChange,
    handleSearchQuery,
  } = props;

  const handleCity = (city) => {
    handleCityChange(city);
  };

  const handleCategory = (category) => {
    handleCategoryChange(category);
  };

  const handleOnChange = (query) => {
    handleSearchQuery(query);
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Search the Bank</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown
              title={selectedCity}
              id="collasible-nav-dropdown"
              onSelect={(val) => handleCity(val)}
            >
              <NavDropdown.Item eventKey={"MUMBAI"}>Mumbai</NavDropdown.Item>
              <NavDropdown.Item eventKey={"DELHI"}>Delhi</NavDropdown.Item>
              <NavDropdown.Item eventKey={"BANGALURU"}>
                Bangaluru
              </NavDropdown.Item>
              <NavDropdown.Item eventKey={"PUNE"}>Pune</NavDropdown.Item>
              <NavDropdown.Item eventKey={"DEHRADUN"}>
                Dehradun
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title={selectedCategory}
              id="collasible-nav-dropdown"
              onSelect={(val) => handleCategory(val)}
            >
              <NavDropdown.Item eventKey={"ifsc"}>IFSC</NavDropdown.Item>
              <NavDropdown.Item eventKey={"bank_name"}>
                Bank Name
              </NavDropdown.Item>
              <NavDropdown.Item eventKey={"bank_id"}>Bank ID</NavDropdown.Item>
              <NavDropdown.Item eventKey={"branch"}>Branch</NavDropdown.Item>
              <NavDropdown.Item eventKey={"district"}>
                District
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e) => handleOnChange(e.target.value)}
            />
          </Form>
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
