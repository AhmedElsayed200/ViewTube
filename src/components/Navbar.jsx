import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { logoUrl } from "../utils/constants";
import { SearchBar } from "./";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    padding={2}
    sx={{
      position: "sticky",
      top: 0,
      backgroundColor: "#000",
      justifyContent: "space-between",
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logoUrl} alt="viewTube Logo" height={45} />
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
