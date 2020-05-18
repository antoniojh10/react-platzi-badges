import React, { Component } from "react";

import "./styles/Badge.css";
import confLogo from "../images/badge-header.svg";

//function Badge () {}
//const Badge = () => {}

class Badge extends Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo de la Conf" />
        </div>

        <div className="Badge__section-name">
          <img
            className="Badge__avatar"
            src="https://www.gravatar.com/avatar?d=identicon"
            alt="avatar"
          />
          <h1>
            Richard <br /> Kaufman
          </h1>
        </div>

        <div className="Badge__section-info">
          <h3>Frontend Engineer</h3>
          <div>@Sparragus</div>
        </div>

        <div className="Badge__footer">#platziconf</div>
      </div>
    );
  }
}

export default Badge;
