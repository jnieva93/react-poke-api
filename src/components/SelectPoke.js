import React, { useState, useEffect } from "react";
import Select from "react-select";
import { Switch, Route } from "react-router-dom";
import PokeTable from "./PokeTable";
import PokeCard from "./PokeCard";

const SelectPoke = () => {
  // Select autocomplete state
  const [selectedOption, setSelectedOption] = useState(null);
  const [options, setOptions] = useState([]);

  // Table data state
  const [pokeList, setPokeList] = useState([]);

  // Obtain all the pokemon names and set them as options for the select
  const getPokemons = async () => {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon?offset=0&limit=-1"
    );
    const data = await response.json();
    setOptions(
      data.results.map(result => ({
        value: result.name,
        label: result.name.charAt(0).toUpperCase() + result.name.slice(1)
      }))
    );
  };

  const handleChange = selectedOption => {
    setSelectedOption({ selectedOption });
    console.log(`Option selected: ${selectedOption.value}`);
    getPokemonData(selectedOption.value);
  };

  // Remove a pokemon row
  const removePoke = index => {
    setPokeList(
      pokeList.filter((element, i) => {
        return i !== index;
      })
    );
  };

  // Obtain specific pokemon data and add it to pokeList
  const getPokemonData = async pokemonName => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
    const data = await response.json();
    setPokeList([...pokeList, data]);
  };

  // Execute when page is first rendered
  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <div>
      <Select
        value={selectedOption}
        onChange={handleChange}
        options={options}
      />
      <br />
      <Switch>
        <Route
          path="/"
          exact
          render={() => (
            <PokeTable pokeList={pokeList} removePoke={removePoke} />
          )}
        />
        <Route
          path="/table"
          exact
          render={() => (
            <PokeTable pokeList={pokeList} removePoke={removePoke} />
          )}
        />
        <Route
          path="/card"
          exact
          render={() => (
            <PokeCard pokeList={pokeList} removePoke={removePoke} />
          )}
        />
      </Switch>
    </div>
  );
};

export default SelectPoke;
