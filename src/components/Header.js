import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

function Header({ currentPage, handlePageChange }) {
  return (
    <>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand
            style={{ color: "white" }}
            href="#about"
            onClick={() => handlePageChange("About")}
          >
            Katie Wine
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              style={{ color: "white" }}
              href="#about"
              onClick={() => handlePageChange("About")}
              className={
                currentPage === "About" ? "nav-link active" : "nav-link"
              }
            >
              About Me
            </Nav.Link>
            <Nav.Link
              style={{ color: "white" }}
              href="#portfolio"
              onClick={() => handlePageChange("Portfolio")}
              className={
                currentPage === "Portfolio" ? "nav-link active" : "nav-link"
              }
            >
              Portfolio
            </Nav.Link>
            <Nav.Link
              style={{ color: "white" }}
              href="#contact"
              onClick={() => handlePageChange("Contact")}
              className={
                currentPage === "Contact" ? "nav-link active" : "nav-link"
              }
            >
              Contact
            </Nav.Link>
            <Nav.Link
              style={{ color: "white" }}
              href="#resume"
              onClick={() => handlePageChange("Resume")}
              className={
                currentPage === "Resume" ? "nav-link active" : "nav-link"
              }
            >
              Resume
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
