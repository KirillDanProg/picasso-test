import { Header } from "@/widgets/header";
import { Outlet } from "react-router-dom";

export const MainPage = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
