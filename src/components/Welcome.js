import React from "react";
import { Card } from "react-bootstrap";
class Welcome extends React.Component {
  render() {
    return (
      <div>
        <Card className="bg-dark text-white App">
          <h1>Hellow </h1>
          <Card.Body>This is some text within a card body.</Card.Body>
        </Card>
      </div>
    );
  }
}
export default Welcome;
