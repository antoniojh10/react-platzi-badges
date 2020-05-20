import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./styles/BadgesList.css";

class BadgesList extends Component {
  render() {
    if (this.props.badges.length === 0) {
      return (
        <div>
          <h3>No badges were found</h3>
          <Link className="btn btn-primary" to="/badges/new">
            Create New Badge
          </Link>
        </div>
      );
    }
    return (
      <div className="BadgesList">
        <ul>
          {this.props.badges.map((badge) => {
            return (
              <li className="BadgesListItem" key={badge.id}>
                <img
                  className="BadgesListItem__avatar"
                  src={badge.avatarUrl}
                  alt={`${badge.firstName} ${badge.lastName}`}
                />
                <div>
                  <div className="font-weight-bold">
                    {badge.firstName} {badge.lastName}
                  </div>

                  <a href={`https://www.twitter.com/${badge.twitter}`}>
                    @{badge.twitter}
                  </a>

                  <div>{badge.jobTitle}</div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default BadgesList;
