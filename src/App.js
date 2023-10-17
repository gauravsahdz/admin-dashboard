import { useState } from "react";
import { Grid } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import "./App.css";
import Dashboard from "./components/dashboard/Dashboard";
import Sidebar from "./components/sidebar/sidebar";
import Navbar from "./components/navbar/Navbar";
import SideBarResponsive from "./components/sidebar/sidebarResponsive";

function App() {
  const [isOpen, setIsOpen] = useState(true);
  const [isOpenRes, setIsOpenRes] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    setIsOpenRes(!isOpenRes);
    console.log(isOpen);
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
          <div className="responsiveSidebar">
            <SideBarResponsive
              isOpen={isOpenRes}
              toggleSidebar={toggleSidebar}
            />
          </div>
        </Grid>
        <Grid item xs={10}>
          <Dashboard />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
