import React from "react";
import { animals } from "./animals";
import AnimalsCard from "./AnimalsCard";
import AnimalSingle from "./AnimalSingle";
import { Switch, Route, useRouteMatch } from "react-router-dom";

const AnimalsList = () => {
  const match = useRouteMatch();
  const animalListing = animals.map((item) => (
    <AnimalsCard key={item.name} name={item.name} />
  ));

  return (
    <div className="animals-lists">
      <Switch>
        <Route exact path={match.path}>
          {animalListing}
        </Route>
        <Route path={`${match.path}/:animal`}>
          <AnimalSingle />
        </Route>
      </Switch>
    </div>
  );
};

export default AnimalsList;
