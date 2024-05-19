import React, { useEffect, useState } from "react";

const CallingApi = () => {
  const [pokeData, setPokeData] = useState("");

  const { name = "" } = pokeData;
  //use effect is used to perfom side effect
  //-> useEffect two argument 1-> callback function 2-> dependency array
  useEffect(() => {
    async function fetchPokemon() {
      console.log("inside async");
      const url = "https://pokeapi.co/api/v2/pokemon/pikachu";
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setPokeData(data);
    }

    fetchPokemon();
  }, []);

  return (
    <>
      <h1>Pokemon</h1>
      {name}
    </>
  );
};

export default CallingApi;
