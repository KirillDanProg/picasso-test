import { Typography } from "@mui/material";
import s from "./Header.module.scss";
export const Header = () => {
  return (
    <header className={s.header}>
      <Typography
        fontWeight={"bold"}
        fontSize={"1.5rem"}
        sx={{ textTransform: "uppercase", color: "#df496b" }}
      >
        пикассо тест
      </Typography>
    </header>
  );
};
