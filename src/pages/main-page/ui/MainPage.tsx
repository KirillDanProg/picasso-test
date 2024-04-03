import { Header } from "@/widgets/header";
import { Outlet } from "react-router-dom";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";

export const MainPage = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <Container maxWidth="md" style={{ height: "100vh" }}>
        <Outlet />
      </Container>
    </>
  );
};
