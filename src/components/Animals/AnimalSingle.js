import React from "react";
import { useHistory, useParams } from "react-router-dom";

const AnimalSingle = () => {
  //   let animals = useParams();
  let { animal } = useParams();
  let history = useHistory();
  //   console.log(animal);
  //   console.log(history);
  //   console.log(animals);
  return (
    <div>
      <div className="animal-details">
        <p>This is the page for {animal}</p>

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
