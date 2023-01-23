import React from "react";
import { Card, CardBody, Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <div>
      <Card
        className=" text-center bg-secondary ml-3"
        color="secondary"
        inverse
      >
        <CardBody>
          <h1>SONG APP</h1>
        </CardBody>
      </Card>
    </div>
  );
};

export default Header;
