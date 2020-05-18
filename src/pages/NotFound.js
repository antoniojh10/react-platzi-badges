import React from "react";

import "./styles/Home.css";
import astronauts from "../images/astronauts.svg";

function NotFound() {
  return (
    <div className="Home">
      <div className="container">
        <div className="row">
          <div className="Home__col">
            <h1>404: Not Found</h1>
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

export default NotFound;
