import "bootstrap/dist/css/bootstrap.min.css";

import { Button, Container, FormControl, Row } from "react-bootstrap";
import fantasy from "../data/books/fantasy.json";
import history from "../data/books/history.json";
import horror from "../data/books/horror.json";
import romance from "../data/books/romance.json";
import scifi from "../data/books/scifi.json";
import { Component } from "react";
import SingleBook from "./singleBook";

class BooksList extends Component {
  state = {
    books: fantasy,
    filteredBooks: ""
  };

  render() {
    return (
      <Container fluid="md" className="mt-5">
        <div className="d-flex justify-content-center mb-5 gap-4 ">
          <Button onClick={() => this.setState({ books: fantasy })}>
            Fantasy
          </Button>
          <Button onClick={() => this.setState({ books: history })}>
            History
          </Button>
          <Button onClick={() => this.setState({ books: horror })}>
            Horror
          </Button>
          <Button onClick={() => this.setState({ books: romance })}>
            Romance
          </Button>
          <Button onClick={() => this.setState({ books: scifi })}>Scifi</Button>
        </div>

        <FormControl
          type="text"
          placeholder="filtra i libri"
          value={this.state.filteredBooks}
          className="d-flex mb-3 w-50 mx-auto"
          role="search"
          onChange={(e) => this.setState({ filteredBooks: e.target.value })}
        />

        <Row className="justify-content-center">
          {this.state.books
            .filter((book) =>
              book.title
                .toLowerCase()
                .includes(this.state.filteredBooks.toLocaleLowerCase())
            )
            .map((book) => (
              <SingleBook key={book.asin} src={book.img} title={book.title} />
            ))}
        </Row>
      </Container>
    );
  }
}
export default BooksList;
