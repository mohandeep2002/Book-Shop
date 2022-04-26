import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

class NavigationBar extends React.Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Link to={""} className="navbar-brand">
              KL Bank
            </Link>
            <Nav className="me-auto">
              {/* <Nav.Link>
                <Link to={"add"}>Add Book</Link>
              </Nav.Link> */}
              <Nav.Link as={Link} to={"/add"}>
                Create An Account
              </Nav.Link>
              <Nav.Link as={Link} to={"/list"}>
                Login
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
  }
}
export default NavigationBar;
