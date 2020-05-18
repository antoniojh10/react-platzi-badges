import React from "react";
import { Link } from "react-router-dom";

import "./styles/Home.css";
import confLogo from "../images/platziconf-logo.svg";
import astronauts from "../images/astronauts.svg";

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <div className="container">
          <div className="row">
            <div className="Home__col col-12 col-md-4">
              <img
                src={confLogo}
                alt="Platzi Conf"
                className="img-fluid mb-2"
              />
              <h1>Badge Management System</h1>
              <Link className="btn btn-primary" to="/badges">
                Start Now
              </Link>
            </div>
            <div className="Home__col d-none d-md-block col-md-8">
              <img
                src={astronauts}
                alt="Platzi Astronauts"
                className="img-fluid p-4"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
