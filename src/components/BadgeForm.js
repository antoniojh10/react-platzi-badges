import React, { Component } from "react";

class BadgeForm extends Component {
  state = {};

  // Reemplazado por this.props.onChange
  /* handleChange = (e) => {
    console.log(e.target.value);
    this.setState({
      firstName: e.target.value,
    });
    // Se espera que cada uno de los espacios, guarde la informacion en su propio espacio, para eso:

    this.setState({
      [e.target.name]: e.target.value,
    });
  }; */

  handleClick = (e) => {
    console.log("Button has been clicked");
  };

  /* handleSubmit = (e) => {
    e.preventDefault();
  }; */

  render() {
    return (
      <React.Fragment>
        <h1>{this.props.title}</h1>

        <form onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="firstName"
              value={this.props.formValues.firstName}
            />
            <label>Last Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="lastName"
              value={this.props.formValues.lastName}
            />
            <label>Email</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="email"
              name="email"
              value={this.props.formValues.email}
            />
            <label>Job Title</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="jobTitle"
              value={this.props.formValues.jobTitle}
            />
            <label>Twitter</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="twitter"
              value={this.props.formValues.twitter}
            />
          </div>

          {this.props.error && (
            <p className="text-danger">{this.props.error.message}</p>
          )}

          <button onClick={this.handleClick} className="btn btn-primary">
            Save
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default BadgeForm;
