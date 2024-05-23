import { useEffect, useState } from "react";

function DigitalClock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      //   obj = null;
      //   clearInterval(intervalID);
    };
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      className="text-5xl"
    >
      {time}
    </div>
  );
}

export default DigitalClock;
