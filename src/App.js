import { Grid } from "@mui/material";
import "./App.css";
import Dashboard from "./components/dashboard/Dashboard";
import Sidebar from "./components/sidebar/sidebar";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(true);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    // a container with two columns, one for the sidebar and one for the main content
    <Grid container spacing={3}>
      <Grid item xs={2}>
        <Sidebar isOpen={isOpen} />
      </Grid>
      <Grid item xs={10}>
        <Dashboard />
      </Grid>
    </Grid>
  );
}

export default App;
