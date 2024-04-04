import { Box, CircularProgress } from "@mui/material";

type Props = {
  className?: string;
};
export const Loader = ({ className }: Props) => {
  return (
    <Box
      className={className}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "120px",
      }}
    >
      <CircularProgress />
    </Box>
  );
};
