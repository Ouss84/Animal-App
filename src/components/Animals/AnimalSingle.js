import React from "react";
import { useHistory, useParams } from "react-router-dom";

const AnimalSingle = () => {
  //   let animals = useParams();
  let { animal } = useParams();
  let history = useHistory();

  return (
    <div className="animal-single">
      <div className="animal-details">
        <p>
          This is the page for <span>{animal}</span>
        </p>

        <img
          src={`https://source.unsplash.com/1600x900/?${animal}`}
          alt="animal-pic"
        />
      </div>
      <button onClick={() => history.goBack()}>GO Back</button>
    </div>
  );
};
export default AnimalSingle;
