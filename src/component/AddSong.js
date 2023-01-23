import React, { useEffect, useState } from "react";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import axios from "axios";
import base_url from "../bootapi/server";
import { toast } from "react-toastify";

const AddSong = () => {
  useEffect(() => {
    document.title = "Add-Song";
  }, []);
  const [song, addSong] = useState({});

  //Form handler function
  const handleFom = (e) => {
    console.log(song);
    postSongToServer(song);
    e.preventDefault();
  };

  useEffect(() => {
    postSongToServer(song);
  });

  //post data to server

  const postSongToServer = (data) => {
    axios.post(`${base_url}/songs`, data).then(
      (response) => {
        toast.success("Song Added !", {
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
      <h1 className="text-center">Details</h1>
      <Form onSubmit={handleFom}>
        <FormGroup floating>
          <Input
            id="id"
            name="SongId"
            type="text"
            placeholder="ID"
            onChange={(e) => {
              addSong({ ...song, id: e.target.value });
            }}
          />
          <Label>ID</Label>
        </FormGroup>
        <FormGroup floating>
          <Input
            id="title"
            name="Title"
            type="text"
            placeholder="Title"
            onChange={(e) => {
              addSong({ ...song, title: e.target.value });
            }}
          />
          <Label>Title</Label>
        </FormGroup>
        <FormGroup floating>
          <Input
            id="description"
            name="Description"
            type="textarea"
            placeholder="Description"
            style={{ height: 150 }}
            onChange={(e) => {
              addSong({ ...song, description: e.target.value });
            }}
          />
          <Label>Description</Label>
          <Container className="text-center">
            <Button type="submit" color="success">
              Add
            </Button>
            <Button type="reset" color="dark">
              Clear
            </Button>
          </Container>
        </FormGroup>
      </Form>
    </div>
  );
};

export default AddSong;
