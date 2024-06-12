import { useEffect, useState } from "react";
import ListItem from "./ListItem";

function ListComponent() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const url = "https://dummyjson.com/users";
    async function fetchData(url) {
      const response = await fetch(url);
      const data = await response.json();
      //   console.log(data.users);
      setUser(data.users);
    }

    fetchData(url);
  }, []);

  //   console.log(user);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, 200px)",
        gap: "10px",
      }}
    >
      {user.map((users) => {
        return <ListItem key={users.id} {...users} />;
      })}
    </div>
  );
}

export default ListComponent;
