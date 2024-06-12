function ListItem(props) {
  const { firstName, lastName, age } = props;

  //   console.log(firstName);

  return (
    <div style={{ border: "2px solid purple", padding: "10px" }}>
      <div>
        Name: {firstName} {lastName}
      </div>
      <div>Age: {age}</div>
    </div>
  );
}

export default ListItem;
