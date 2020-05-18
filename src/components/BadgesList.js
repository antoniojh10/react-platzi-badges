import React, { Component } from "react";

import "./styles/BadgesList.css";

class BadgesList extends Component {
  render() {
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
