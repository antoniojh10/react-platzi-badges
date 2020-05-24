import React, { Component } from "react";

import "./styles/BadgeDetails.css";

import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";
import BadgeDetails from "./BadgeDetails";
import api from "../api";

class BadgeDetailsContainer extends Component {
  state = {
    loading: true,
    error: null,
    data: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      twitter: "",
    },
    modalIsOpen: false,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.badges.read(this.props.match.params.badgeId);
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  handleCloseModal = () => {
    this.setState({ modalIsOpen: false });
  };

  handleOpenModal = () => {
    this.setState({ modalIsOpen: true });
  };

  handleDeleteBadge = async () => {
    this.setState({ loading: true });
    try {
      await api.badges.remove(this.props.match.params.badgeId);
      this.props.history.push("/badges");
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    const badge = this.state.data;
    if (this.state.loading) {
      return <PageLoading />;
    }
    if (this.state.error) {
      return <PageError error={this.error} />;
    }
    return (
      <BadgeDetails
        badge={badge}
        onCloseModal={this.handleCloseModal}
        onOpenModal={this.handleOpenModal}
        onDeleteBadge={this.handleDeleteBadge}
        deleteModal={this.state.modalIsOpen}
      />
    );
  }
}

export default BadgeDetailsContainer;
