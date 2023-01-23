import React from "react";
import {
  Card,
  Button,
  CardBody,
  Container,
  CardSubtitle,
  CardText,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import base_url from "../bootapi/server";
import { toast } from "react-toastify";

const Song = ({ song }) => {
  const deleteSong = (id) => {
    axios.delete(`${base_url}/{id}`).then(
      (response) => {
        toast.success("Song Deleted !", {
          toastId: "success1",
        });
      },
      (error) => {
        console.log(error);
      }
    );
  };
  return (
    <div>
      <Card className="text-center bg-dark" inverse>
        <CardBody>
          <CardSubtitle>{song.title}</CardSubtitle>
          <CardText className="mb-2 text-muted">{song.description}</CardText>
          <Container>
            <Button color="warning" outline>
              Update
            </Button>
            <Button
              color="danger mr-3"
              outline
              onClick={() => {
                deleteSong(song.id);
              }}
            >
              Delete
            </Button>
          </Container>
        </CardBody>
      </Card>
    </div>
  );
};

export default Song;
