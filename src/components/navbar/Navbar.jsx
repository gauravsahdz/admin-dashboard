import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchBar from "../searchbar/SearchBar";

const Navbar = ({ toggleSidebar }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar
          style={{
            backgroundColor: "white",
            color: "black",
          }}
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleSidebar}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1 }}></Box>
          <SearchBar size="small" width={150} />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
