import { useEffect, useRef, useState } from "react";

const UseRef = () => {
  const [count, setCount] = useState(0);

  const ref = useRef("-");

  useEffect(() => {
    ref.current = count;
  });

  return (
    <>
      <h1>PREV:VAL {ref.current}</h1>
      <h1>Current Val {count}</h1>
      <button
        onClick={() => {
          setCount((old) => old + 1);
        }}
      >
        Click
      </button>
    </>
  );
};

export default UseRef;
