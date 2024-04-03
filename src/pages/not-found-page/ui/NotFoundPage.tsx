import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

export const NotFoundPage = () => {
  const navigate = useNavigate();
  const redirect = () => {
    navigate("/");
  };
  return (
    <div>
      <h2>Not found</h2>
      <Button variant="outlined" onClick={redirect}>
        Back to main page
      </Button>
    </div>
  );
};
