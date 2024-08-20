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
        marginRight: { sm: 5 },
        border: "1px solid #e3e3e3",
        borderRadius: 20,
        paddingLeft: 2,
        boxShadow: "none",
      }}
    >
      <input
        className="search-bar"
        placeholder="Search..."
        value={searchKeyword}
        onChange={(e) => setSearchKeyword(e.target.value)}
      />
      <IconButton
        type="submit"
        aria-label="search"
        sx={{ padding: "10px", color: "red" }}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
