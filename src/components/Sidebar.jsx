import React from "react";
import { Stack } from "@mui/material";
import { categoryList } from "../utils/constants";

const Categories = ({ selectedCategory, setSelectedCategory }) => (
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
          color: "white",
        }}
      >
        <span
          style={{
            color: category.label === selectedCategory ? "white" : "red",
            marginRight: "15px",
          }}
        >
          {category.icon}
        </span>
        <span
          style={{
            opacity: category.label === selectedCategory ? 1 : 0.8,
          }}
        >
          {category.label}
        </span>
      </button>
    ))}
  </Stack>
);

export default Categories;
