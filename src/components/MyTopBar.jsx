import Nav from "react-bootstrap/Nav";
import viteLogo from "/vite.svg";
import { Button, NavDropdown } from "react-bootstrap";

const TopBar = () => {
  return (
    <Nav className="align-items-center bg-dark sticky-top">
      <Nav.Item>
        <Nav.Link href="#" className="align-items-center ">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </Nav.Link>
      </Nav.Item>
      <Nav.Item className="text-white">
        <b>EpicBooks</b>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#">About</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#">Browse</Nav.Link>
      </Nav.Item>

      <NavDropdown title="Categories" id="nav-dropdown">
        <NavDropdown.Item eventKey="4.1">Fantasy</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">History</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">Horror</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.4">Romance</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.4">Scifi</NavDropdown.Item>
      </NavDropdown>

      <Nav.Item className="ms-auto me-4">
        <Button className="bg-dark border border-2 ">
          <i className="bi bi-cart4 text-white "></i>
        </Button>
      </Nav.Item>
    </Nav>
  );
};

export default TopBar;
