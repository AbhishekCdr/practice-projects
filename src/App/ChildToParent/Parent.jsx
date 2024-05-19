import { useState } from "react";
import Child from "./Child";

function Parent() {
  const pi = 3.14;

  const [marksOfStudent, setMarks] = useState();

  if (marksOfStudent < 40) {
    console.log("scold them");
  } else {
    console.log("happy");
  }

  function childComunicator(info, score) {
    console.log("info from child inside Parent Component", info, score);
    setMarks(score);
  }

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
        <h1>Parent</h1>
        {marksOfStudent}
        <Child childComunicator={childComunicator} pi={pi} />
      </div>
    </>
  );
}

export default Parent;
