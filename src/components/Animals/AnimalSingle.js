import React from "react";
import { useParams } from "react-router-dom";

const AnimalSingle = () => {
  let { animal } = useParams();
  console.log(animal);
  return (
    <div>
      <div>This is the page for {animal}</div>
      <div className="animal-details">
        <img
          src={`https://source.unsplash.com/1600x900/?${animal}`}
          alt="animal-pic"
        />
      </div>
    </div>
  );
};
export default AnimalSingle;
