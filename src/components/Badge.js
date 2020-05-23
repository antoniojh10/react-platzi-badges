import React, { Component } from "react";

import "./styles/Badge.css";
import confLogo from "../images/badge-header.svg";

import Gravatar from "./Gravatar";
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
          <Gravatar
            className="Badge__avatar"
            email={this.props.email}
            alt={`${this.props.firstName} ${this.props.lastName}`}
          />
          <h1>
            {this.props.firstName} <br /> {this.props.lastName}
          </h1>
        </div>

        <div className="Badge__section-info">
          <h3>{this.props.jobTitle}</h3>
          <div>@{this.props.twitter}</div>
        </div>

        <div className="Badge__footer">#platziconf</div>
      </div>
    );
  }
}

export default Badge;
