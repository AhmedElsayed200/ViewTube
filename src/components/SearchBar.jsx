import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import SearchIcon from "@mui/icons-material/Search";
import { Paper, IconButton } from "@mui/material";

const SearchBar = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (searchKeyword.trim()) {
      navigate(`/search/${searchKeyword.trim()}`);
      setSearchKeyword("");
    }
  };

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        padding: { xs: "10px", sm: "10px" },
        width: { xs: "200px", sm: "400px" },
        border: "1px solid #e3e3e3",
        borderRadius: 20,
        paddingLeft: 2,
        boxShadow: "none",
      }}
    >
      <input
        className="search-bar"
        placeholder="Search..."
        style={{
          width: "90%",
          padding: { xs: "30px", sm: "10px" },
          marginLeft: "6px",
          flex: 1,
        }}
        value={searchKeyword}
        onChange={(e) => setSearchKeyword(e.target.value)}
      />
      <IconButton
        type="submit"
        aria-label="search"
        sx={{
          padding: 0,
          color: "red",
          display: { xs: "none", sm: "inline" },
        }}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
