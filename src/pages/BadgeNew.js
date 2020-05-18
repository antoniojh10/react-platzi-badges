import React, { Component } from "react";

import "./styles/BadgeNew.css";
import header from "../images/badge-header.svg";

import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import Navbar from "../components/Navbar";

class BadgeNew extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo" />
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

            <div className="col">
              <BadgeForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
