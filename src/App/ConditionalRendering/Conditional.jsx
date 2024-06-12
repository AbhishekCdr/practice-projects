import { useState } from "react";

function Conditional() {
  const [day, setDay] = useState(true);
  return (
    <>
      <h1>CONDITIONAL RENDERING</h1>
      {day && <div>Day</div>}
      {day ? null : <div>night</div>}

      <button onClick={() => setDay((old) => !old)}>Toggle</button>
    </>
  );
}

export default Conditional;
