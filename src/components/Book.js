import axios from "axios";
import React, { Component } from "react";
import { Card, Form, Button, Container, Row, Col } from "react-bootstrap";

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = this.initialState;
    this.recordChange = this.recordChange.bind(this);
    this.submitRecord = this.submitRecord.bind(this);
    this.state.show = false;
  }

  initialState = {
    first_name: "",
    last_name: "",
    phone_number: "",
    password: "",
    address: "",
    pincode: "",
    noOfDefects: "",
    timeTaken: "",
    sqa: "",
  };

  submitRecord(event) {
    event.preventDefault();

    const record = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      phone_number: this.state.phone_number,
      password: this.state.password,
      address: this.state.address,
      pincode: this.state.pincode,
    };

    axios
      .post("http://localhost:8000/api/user_create/", this.state)
      .then((response) => {
        if (response.data != null) {
          console.log(record);
          this.setState(this.initialState);
          alert("Account Created Successfully");
          window.location.reload(false);
        }
      });
  }

  resetRecord = () => {
    this.setState(() => this.initialState);
  };

  recordChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const { first_name, last_name, phone_number, password, address, pincode } =
      this.state;

    return (
      <div>
        <br />
        <Container>
          <Card className="rounded border border-dark bg-dark text-white">
            <Card.Header>
              {" "}
              <center>
                <h3>Sign Up</h3>
              </center>{" "}
            </Card.Header>
            <Form
              onReset={this.resetRecord}
              onSubmit={this.submitRecord}
              id="recordid"
            >
              <Card.Body>
                <Row>
                  <Form.Group className="mb-3 Col-md-6" as={Col} controlId="f1">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Frist Name"
                      name="first_name"
                      defaultValue={first_name}
                      onChange={this.recordChange}
                      required
                      autoComplete="off"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3 Col-md-6" as={Col} controlId="f2">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Last Name"
                      name="last_name"
                      defaultValue={last_name}
                      onChange={this.recordChange}
                      required
                      autoComplete="off"
                    />
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group className="mb-3 Col-md-6" as={Col} controlId="f3">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Phone Number"
                      name="phone_number"
                      defaultValue={phone_number}
                      onChange={this.recordChange}
                      required
                      autoComplete="off"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3 Col-md-6" as={Col} controlId="f4">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Password"
                      name="password"
                      defaultValue={password}
                      onChange={this.recordChange}
                      required
                      autoComplete="off"
                    />
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group className="mb-3 Col-md-6" as={Col} controlId="f5">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Address"
                      name="address"
                      defaultValue={address}
                      onChange={this.recordChange}
                      required
                      autoComplete="off"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3 Col-md-6" as={Col} controlId="f6">
                    <Form.Label>PIN Code</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Enter PIN Code"
                      name="pincode"
                      defaultValue={pincode}
                      onChange={this.recordChange}
                      required
                      autoComplete="off"
                    />
                  </Form.Group>
                </Row>
              </Card.Body>
              <Card.Footer style={{ textAlign: "right" }}>
                <Button variant="success" type="submit">
                  Create
                </Button>
                &nbsp;&nbsp;
                <Button variant="info" type="reset">
                  Reset
                </Button>
              </Card.Footer>
            </Form>
          </Card>
        </Container>
      </div>
    );
  }
}

export default Book;
