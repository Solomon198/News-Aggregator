import { Box, CircularProgress } from "@mui/material";

const Loader = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", my: 2 }}>
      <CircularProgress color="inherit" />
    </Box>
  );
};

export default Loader;
