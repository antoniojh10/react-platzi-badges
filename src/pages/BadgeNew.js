import React, { Component } from "react";

import "../components/styles/BadgeNew.css";
import logo from "../images/logo.svg";

import Badge from "../components/Badge";
import Navbar from "../components/Navbar";

class BadgeNew extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={logo} alt="Logo" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firstName="Richard"
                lastName="Kaufman"
                avatarUrl=""
                jobTitle="FrontEnd Engineer"
                twitter="Sparragus"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
