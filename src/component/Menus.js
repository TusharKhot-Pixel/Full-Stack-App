import React from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Menus = () => {
  return (
    <div>
      <ListGroup className="text-center">
        <Link
          className="list-group-item List-group-item-action"
          color="dark"
          tag="a"
          to="/"
          action
        >
          Home
        </Link>
        <Link
          className="list-group-item List-group-item-action"
          color="dark"
          tag="a"
          to="/Songs"
          action
        >
          All Songs
        </Link>
        <Link
          className="list-group-item List-group-item-action"
          color="dark"
          tag="a"
          to="/Add-Song"
          action
        >
          Add Song
        </Link>
        <Link
          className="list-group-item List-group-item-action"
          color="dark"
          tag="a"
          to="/About"
          action
        >
          About
        </Link>
      </ListGroup>
    </div>
  );
};

export default Menus;
