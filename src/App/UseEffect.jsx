import { useEffect, useState } from "react";

function UseEffect() {
  const [names, setNames] = useState({
    name: "",
    height: "",
    weigth: "",
  });
  console.log("START OF PROGRAM");

  const { name, height, weight } = names;

  useEffect(() => {
    async function fetchData() {
      console.log("INSIDE FETCH FUNCTION");
      const url = "https://pokeapi.co/api/v2/pokemon/pikachu";
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);

      const { name, height, weight } = data; //destructure data
      setNames({
        ...names,
        name,
        height,
        weight,
      });
    }
    fetchData();
  }, []);
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {console.log("INSIDE UI")}
        <div>{name}</div>
        <div>{height}</div>
        <div>{weight}</div>
      </div>
    </>
  );
}

export default UseEffect;
