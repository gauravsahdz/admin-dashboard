import { useState } from "react";
import { Grid } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import "./App.css";
import Dashboard from "./components/dashboard/Dashboard";
import Sidebar from "./components/sidebar/sidebar";
import Navbar from "./components/navbar/Navbar";

function App() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    // a container with two columns, one for the sidebar and one for the main content
    <>
      <div className="navbar">
        <Navbar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      </div>

      <Grid container spacing={3}>
        <Grid item xs={2}>
          <Sidebar isOpen={isOpen} />
        </Grid>
        <Grid item xs={10}>
          <Dashboard />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
