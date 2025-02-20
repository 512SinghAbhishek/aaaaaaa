import { AppBar, Toolbar, Box, Tabs, Tab } from "@mui/material";
import { useState } from "react";
import Link from "next/link";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ContactsIcon from "@mui/icons-material/Contacts";
import LayersIcon from "@mui/icons-material/Layers";
import EventIcon from "@mui/icons-material/Event";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import DescriptionIcon from "@mui/icons-material/Description";

const primaryColor = "#0a5578";
const secondaryColor = "#FFFFFF";

const Navbar = () => {
  const [value, setValue] = useState(0); // Default active tab index

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: primaryColor, boxShadow: "none" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        {/* Logo on the left */}
        <Box
          component="img"
          src="/images/logo.png"
          alt="Career Cruise Consulting ME logo white"
          sx={{
            width: "80px",
            height: "auto",
            marginTop: "10px",
            marginRight: "20px",
            borderRadius: "7px",
          }}
        />

        {/* Menu on the right */}
        <div className="nav_menu">
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="inherit"
            TabIndicatorProps={{ style: { display: "none" } }} // Hide default indicator
            sx={{
              "& .MuiTab-root": {
                color: "rgba(255, 255, 255, 0.7)", // Default tab color
                textTransform: "none",
                fontWeight: 500,
                padding: "6px 12px",
                borderRadius: "5px",
                minHeight: "auto",
              },
              "& .Mui-selected": {
                color: primaryColor,
                backgroundColor: secondaryColor,
                borderRadius: "5px",
              },
            }}
          >
            <Tab component={Link} href="/" icon={<DashboardIcon />} label="Home" />
            <Tab component={Link} href="/About" icon={<ContactsIcon />} label="About" />
            <Tab component={Link} href="/Services" icon={<LayersIcon />} label="Apply" />
            <Tab component={Link} href="/calendar" icon={<EventIcon />} label="Calendar" />
            <Tab component={Link} href="/charts" icon={<InsertChartIcon />} label="Charts" />
            <Tab component={Link} href="/documents" icon={<DescriptionIcon />} label="Documents" />
          </Tabs>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
