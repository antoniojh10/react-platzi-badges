import React, { Component } from "react";

import md5 from "md5";

import "./styles/BadgeNew.css";
import header from "../images/platziconf-logo.svg";

import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import PageLoading from "../components/PageLoading";

import api from "../api";

class BadgeNew extends Component {
  state = {
    loading: false,
    error: null,
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

  handleSubmit = async (e) => {
    e.preventDefault();
    const hash = await md5(this.state.form.email);
    this.setState({
      loading: true,
      error: null,
      form: {
        ...this.state.form,
        avatarUrl: `https://www.gravatar.com/avatar/${hash}?d=identicon`,
      },
    });

    try {
      await api.badges.create(this.state.form);
      this.setState({ loading: false });

      this.props.history.push("/badges");
    } catch (error) {
      this.setState({
        loading: false,
        error: error,
      });
    }
  };
  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }
    return (
      <React.Fragment>
        <div className="BadgeNew__hero">
          <img
            className="img-fluid BadgeNew__hero-img"
            src={header}
            alt="Logo"
          />
        </div>

        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firstName={this.state.form.firstName || "FIRST_NAME"}
                lastName={this.state.form.lastName || "LAST_NAME"}
                email={this.state.form.email || "email@email.com"}
                jobTitle={this.state.form.jobTitle || "JOB_TITLE"}
                twitter={this.state.form.twitter || "user"}
              />
            </div>

            <div className="col">
              <BadgeForm
                title="New Attendant"
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeNew;
