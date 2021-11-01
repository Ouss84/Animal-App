import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

const AnimalsCard = (props) => {
  let match = useRouteMatch();
  return (
    <div className="card-wrapper">
      <div className="card">
        <h2> {props.name}</h2>
        <img
          src={`https://source.unsplash.com/1600x900/?${props.name}`}
          alt="animal-pic"
        />
        <Link to={`${match.url}/${props.name}`} className="animal-link">
          Read more
        </Link>
      </div>
    </div>
  );
};

export default AnimalsCard;
