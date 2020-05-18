import React, { Component } from "react";

import "./styles/BadgeNew.css";
import header from "../images/badge-header.svg";

import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";

class BadgeNew extends Component {
  state = {
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      twitter: "",
    },
  };
  handleChange = (e) => {
    console.log("Resiviendo en BadgeNew...");
    /* this.setState({
      form: {
        [e.target.name]: e.target.value,
      },
    }); */
    // Para que no se reescriba todo

    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };
  render() {
    return (
      <React.Fragment>
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firstName={this.state.form.firstName}
                lastName={this.state.form.lastName}
                avatarUrl=""
                email={this.state.form.email}
                jobTitle={this.state.form.jobTitle}
                twitter={this.state.form.twitter}
              />
            </div>

            <div className="col">
              <BadgeForm
                onChange={this.handleChange}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeNew;
