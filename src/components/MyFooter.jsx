import Nav from "react-bootstrap/Nav";

const Footer = () => {
  return (
    <Nav className="align-items-center bg-dark">
      <Nav.Item>
        <Nav.Link href="#">Su di noi</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#">Contattaci</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#">Lavora con noi</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default Footer;
