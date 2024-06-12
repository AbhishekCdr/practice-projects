import { useNavigate } from "react-router-dom";

export default function () {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Not Found Page!</h1>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Go to HomePage
      </button>
    </div>
  );
}
