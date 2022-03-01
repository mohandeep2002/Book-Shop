import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Book from "./components/Book";
import BookList from "./components/BookList";
import Footer from "./components/Footer";
import NavigationBar from "./components/NavigationBar";
import Welcome from "./components/Welcome";

function App() {
  const marginTop = {
    marginTop: "20px",
  };
  return (
    <div className="">
      <Router>
        <NavigationBar />
        <Container>
          <Row>
            <Col lg={12} style={marginTop}>
              <Switch>
                <Route path="/" exact component={Welcome}></Route>
                <Route path="/add" exact component={Book}></Route>
                <Route path="/list" exact component={BookList}></Route>
              </Switch>
            </Col>
          </Row>
        </Container>
        <div></div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
