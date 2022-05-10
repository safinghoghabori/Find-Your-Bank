import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
} from "react-bootstrap";
import { Link } from "react-router-dom";

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

  const handleSubmit = (e) => e.preventDefault();

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/" className="link">
            Search the Bank
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown
              title={selectedCity}
              id="collasible-nav-dropdown"
              onSelect={(val) => handleCity(val.toUpperCase())}
            >
              <NavDropdown.Item eventKey={"Ahmedabad"}>
                Ahmedabad
              </NavDropdown.Item>
              <NavDropdown.Item eventKey={"Mumbai"}>Mumbai</NavDropdown.Item>
              <NavDropdown.Item eventKey={"Delhi"}>Delhi</NavDropdown.Item>
              <NavDropdown.Item eventKey={"Pune"}>Pune</NavDropdown.Item>
              <NavDropdown.Item eventKey={"HYDERABAD"}>
                Hyderabad
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title={selectedCategory}
              id="collasible-nav-dropdown"
              onSelect={(val) => handleCategory(val)}
            >
              <NavDropdown.Item eventKey={"IFSC"}>IFSC</NavDropdown.Item>
              <NavDropdown.Item eventKey={"Branch"}>Branch</NavDropdown.Item>
              <NavDropdown.Item eventKey={"Bank Name"}>
                Bank Name
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex" onSubmit={handleSubmit}>
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e) => handleOnChange(e.target.value)}
            />
          </Form>
          <Nav>
            <Nav.Link>
              <Link to="/favourite" className="link">
                Favourite
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
