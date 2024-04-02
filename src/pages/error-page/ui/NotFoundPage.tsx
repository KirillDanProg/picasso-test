import { useNavigate } from "react-router-dom";

export const NotFoundPage = () => {
  const navigate = useNavigate();
  const redirect = () => {
    navigate("/");
  };
  return (
    <div>
      <h2>Not found</h2>
      <button onClick={redirect}>Back to main page</button>
    </div>
  );
};
