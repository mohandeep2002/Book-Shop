import React, { Component } from "react";
import { Card, Table } from "react-bootstrap";

class BookList extends Component {
  render() {
    return (
      <div className="text-white">
        <Card className={"border border-dark bg-dark text-white"}>
          <Card.Header>
            <strong>Book List</strong>
          </Card.Header>
          <Card.Body>
            <Table className="text-white" bordered hover striped variant="dark">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Author</th>
                  <th>ISBN Number</th>
                  <th>Price</th>
                  <th>Language</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={6}>No Books Available</td>
                </tr>
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default BookList;
