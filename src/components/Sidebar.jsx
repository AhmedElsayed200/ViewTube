import React from "react";
import { Stack, useTheme } from "@mui/material";
import { categoryList } from "../utils/constants";

const Categories = ({ selectedCategory, setSelectedCategory }) => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { xs: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categoryList.map((category) => (
        <button
          key={category.label}
          className="category-btn"
          onClick={() => setSelectedCategory(category.label)}
          style={{
            backgroundColor:
              category.label === selectedCategory ? "#FC1503" : "transparent",
            color: isDarkMode ? "white" : "black",
          }}
        >
          <span
            style={{
              color: category.label === selectedCategory ? "white" : "#FC1503",
              marginRight: "15px",
            }}
          >
            {category.icon}
          </span>
          <span
            style={{
              opacity: category.label === selectedCategory ? 1 : 0.8,
              color:
                category.label === selectedCategory
                  ? "white"
                  : isDarkMode
                  ? "white"
                  : "black",
            }}
          >
            {category.label}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default Categories;
