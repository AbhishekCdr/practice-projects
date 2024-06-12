import { useState } from "react";

function MultipleState() {
  const [state, seState] = useState({
    counter: 0,
    name: "abhishek",
    isDay: true,
  });

  const { counter, name, isDay } = state;

  return (
    <>
      <h1 style={isDay ? { color: "blue" } : { color: "black" }}>{name}</h1>
      <p>{counter}</p>
      <p>{isDay ? <div>Day</div> : <div>night</div>}</p>

      <button
        onClick={() => {
          seState((oldState) => {
            return {
              ...oldState,
              counter: oldState.counter + 1,
              isDay: !oldState.isDay,
            };
          });
        }}
      >
        Click
      </button>
    </>
  );
}

export default MultipleState;
