import React, { Component, useState, useMemo } from "react";
import { Link } from "react-router-dom";

import "./styles/BadgesList.css";

class BadgesListItem extends Component {
  render() {
    const badge = this.props.badge;
    return (
      <div className="BadgesListItem">
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
      </div>
    );
  }
}

function useSearchBadges(badges) {
  const [query, setQuery] = useState("");

  const [filteredBadges, setFilteredBadges] = useState(badges);

  useMemo(() => {
    const result = badges.filter((badge) => {
      const wholeName = `${badge.firstName} ${badge.lastName}`.toLowerCase();
      const jobTitle = badge.jobTitle.toLowerCase();
      const twitter = badge.twitter.toLowerCase();
      return (
        wholeName.includes(query.toLowerCase()) ||
        jobTitle.includes(query.toLowerCase()) ||
        twitter.includes(query.toLowerCase())
      );
    });

    setFilteredBadges(result);
  }, [badges, query]);

  return { query, setQuery, filteredBadges };
}

function BadgesList(props) {
  const badges = props.badges;
  const { query, setQuery, filteredBadges } = useSearchBadges(badges);

  if (badges.length === 0) {
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
      <div className="form-group">
        <label>Filter Badges</label>
        <input
          type="text"
          className="form-control"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
      </div>
      <ul className="list-unstyled">
        {filteredBadges.map((badge) => {
          return (
            <li key={badge.id}>
              <Link
                className="text-reset text-decoration-none"
                to={`/badges/${badge.id}`}
              >
                <BadgesListItem badge={badge} />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default BadgesList;
