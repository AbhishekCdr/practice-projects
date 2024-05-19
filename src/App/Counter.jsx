import React, { useEffect, useState } from "react";

const Counter = () => {
  console.log("component rerendering");
  const [count, setCount] = useState(0);

  const handlePlus = () => {
    // setCount(count + 1);//NOT A GOOD WAY
    setCount((old) => old + 1);
    //THIS WILL NOT WORK
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);

    //THIS WILL WORK
    // setCount((old) => old + 1);
    // setCount((old) => old + 1);
    // setCount((old) => old + 1);
    // setCount((old) => old + 1);
    // setCount((old) => old + 1);

    console.log(count, "count");
  };

  const handleMinus = () => {
    if (count > 0) {
      //setCount(count - 1);//NOT A GOOD WAY
      setCount((old) => old - 1); //if latest state is dependent on old state then only do this
    }
  };

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);
  //second parameter specifies which value of the effect depends on

  return (
    <div className="grid justify-center gap-3">
      <div>{count}</div>
      <button onClick={() => setCount(0)}>Zero</button>
      <button onClick={handlePlus}>Plus</button>
      <button onClick={handleMinus}>Minus</button>
    </div>
  );
};

export default Counter;
