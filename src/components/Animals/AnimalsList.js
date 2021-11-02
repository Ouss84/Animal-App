import { animals } from "./animals";
import AnimalsCard from "./AnimalsCard";
import AnimalSingle from "./AnimalSingle";
import { Switch, Route, withRouter } from "react-router-dom";

import React, { Component } from "react";

class AnimalsList extends Component {
  state = {
    searchInput: "",
  };

  searchInputHandler = (event) => {
    this.setState({
      searchInput: event.target.value,
    });
  };

  render() {
    const animalFilter = animals.filter((animal) => {
      return animal.name
        .toLowerCase()
        .includes(this.state.searchInput.toLowerCase());
    });
    const animalListing = animalFilter.map((item) => (
      <AnimalsCard key={item.name} name={item.name} />
    ));
    return (
      <div className="animals-lists">
        <Switch>
          <Route exact path={this.props.match.path}>
            <div className="search-field">
              <label>Search your favorite animal:</label>
              <input type="text" onChange={this.searchInputHandler} />
            </div>
            {animalListing}
          </Route>
          <Route path={`${this.props.match.path}/:animal`}>
            <AnimalSingle />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default withRouter(AnimalsList);
