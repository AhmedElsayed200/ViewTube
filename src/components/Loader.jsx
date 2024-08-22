import React from "react";
import { Box, CircularProgress, Stack } from "@mui/material";

const Loader = () => (
  <Box
    sx={{
      minHeight: "95vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Stack
      sx={{
        height: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress />
    </Stack>
  </Box>
);

export default Loader;
