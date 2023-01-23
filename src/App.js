import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./component/Home";
import About from "./component/About";
import { Col, Row } from "reactstrap";
import "react-toastify/dist/ReactToastify.css";
import Menus from "./component/Menus";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllSongs from "./component/AllSongs";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddSong from "./component/AddSong";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Row>
          <Col xl={3}>
            <Menus />
          </Col>
          <Col xl={9}>
            <Routes>
              <Route path="/" element={<Home />} exact />
              <Route path="/songs" element={<AllSongs />} exact />
              <Route path="/Add-Song" element={<AddSong />} exact />
              <Route path="/About" element={<About />} exact />
            </Routes>
            <ToastContainer />
          </Col>
        </Row>
      </Router>
    </div>
  );
}

export default App;
