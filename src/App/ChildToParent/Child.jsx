export default function Child(props) {
  const { childComunicator, pi } = props;

  return (
    <>
      <h1>Child ...</h1>
      {pi}

      <button onClick={() => childComunicator("hello from child", 100)}>
        Pass the info
      </button>
    </>
  );
}
