import { Component } from "react";
import { Container } from "react-bootstrap";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

class CommentArea extends Component {
  state = {
    comments: {
      comment: "",
      rate: "",
      elementId: ""
    }
  };

  fetchComments = async (id) => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + id,
        {
          method: "GET",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzQ4N2RlODA2ZmM4YzAwMTU2Yjg3MzEiLCJpYXQiOjE3MzI4MDQwNzMsImV4cCI6MTczNDAxMzY3M30.1H79z_u2sVpY2cGcDlfI_8HzekltCZVso28SH131mI8"
          }
        }
      );
      if (response.ok) {
        const comments = await response.json();
        console.log("comments", comments);
      } else {
        throw new Error("Errore API");
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    console.log("componentDidMount()");

    this.fetchComments();
  }

  render() {
    return (
      <Container>
        <CommentList />
        <AddComment />
      </Container>
    );
  }
}

export default CommentArea;
