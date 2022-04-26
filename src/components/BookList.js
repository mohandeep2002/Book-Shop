import React, { Component } from "react";

import { Card, Form, Button } from "react-bootstrap";

class BookList extends Component {
  render() {
    return (
      <div>
        <Card className={"border border-dark bg-dark text-white"}>
          <Card.Header>Login</Card.Header>
          <Card.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  className={"bg-dark text-white"}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter first name"
                  className={"bg-dark text-white"}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter last name"
                  className={"bg-dark text-white"}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  className={"bg-dark text-white"}
                />
              </Form.Group>
              <center>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </center>
            </Form>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default BookList;
