import React from "react";
import { Stack, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { Brightness4, Brightness7 } from "@mui/icons-material";

import logoUrl from "../assets/images/viewtubelogo.png";
import { SearchBar } from "./";

const Navbar = ({ darkMode, setDarkMode }) => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  return (
    <Stack
      direction="row"
      alignItems="center"
      padding={2}
      sx={{
        position: "sticky",
        top: 0,
        backgroundColor: darkMode ? "#000" : "#fff",
        justifyContent: "space-between",
      }}
    >
      <Link
        to="/"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={logoUrl} alt="viewTube Logo" height={45} />
        <Typography
          variant="h6"
          fontWeight="bold"
          ml={1}
          sx={{ color: isDarkMode ? "white" : "black" }}
        >
          ViewTube
        </Typography>
      </Link>
      <SearchBar />
      <IconButton
        sx={{ ml: 1 }}
        onClick={() => setDarkMode(!darkMode)}
        color="inherit"
      >
        {darkMode ? <Brightness7 /> : <Brightness4 />}
      </IconButton>
    </Stack>
  );
};

export default Navbar;
