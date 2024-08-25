import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Typography, Box, useTheme } from "@mui/material";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos } from "./";

const SearchFeed = () => {
  const { searchTerm } = useParams();
  const [videos, setVideos] = useState([]);

  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const { items } = await fetchFromAPI(
          `search?part=snippet&q=${encodeURIComponent(searchTerm)}`
        );
        setVideos(items);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };

    fetchSearchResults();
  }, [searchTerm]);

  return (
    <Box p={2} minHeight="95vh">
      <Typography
        variant="h4"
        mb={3}
        ml={{ sm: "100px" }}
        fontWeight={900}
        color={isDarkMode ? "white" : "black"}
      >
        Search Results for{" "}
        <span style={{ color: "#FC1503" }}>{searchTerm}</span> videos
      </Typography>
      <Box display="flex" justifyContent="center">
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default SearchFeed;
