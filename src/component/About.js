import React, { useEffect } from "react";
import { Card, Button, CardBody, Container } from "reactstrap";

const About = () => {
  useEffect(() => {
    document.title = "About";
  }, []);
  return (
    <div>
      <Card className="text-center bg-dark" inverse>
        <CardBody>
          <h1>About</h1>
          <p>
            Hello, I'm IBM Employee. My Real Name is Tushar and My internet name
            is "DedSec-Tush".
          </p>
          <p>You can find me below.</p>
          <Container className="text-center">
            <Button color="primary">Github</Button>
            <Button color="primary">Email</Button>
            <Button color="primary">Discord</Button>
          </Container>
        </CardBody>
      </Card>
    </div>
  );
};

export default About;
