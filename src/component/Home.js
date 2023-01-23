import React, { useEffect, useState } from "react";
import { Button, Card, CardBody, Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);
  const notify = () => {
    toast("Yess I'm Ready");
  };
  return (
    <div>
      <Card className="text-center" color="dark" inverse>
        <CardBody>
          <h1>Learn with Tushar</h1>
          <p>This is the Song app made with Sping boot, MySQL, React JS</p>
          <Container>
            <Button color="primary" onClick={notify}>
              Ready
            </Button>
            <ToastContainer />
          </Container>
        </CardBody>
      </Card>
    </div>
  );
};

export default Home;
