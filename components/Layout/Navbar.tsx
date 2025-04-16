import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { AppBar, Toolbar, Box, Tabs, Tab, IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText, useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ContactsIcon from "@mui/icons-material/Contacts";
import LayersIcon from "@mui/icons-material/Layers";
import ArticleIcon from '@mui/icons-material/Article';
import Link from "next/link";

const primaryColor = "#0a5578";
const secondaryColor = "#FFFFFF";

const menuItems = [
  { text: "Home", href: "/", icon: <DashboardIcon /> },
  { text: "About", href: "/About", icon: <ContactsIcon /> },
  { text: "Apply", href: "/Services", icon: <LayersIcon /> },
  { text: "Blogs", href: "/", icon: <ArticleIcon /> }

  // { text: "Charts", href: "/", icon: <InsertChartIcon /> },
  // { text: "Documents", href: "/", icon: <DescriptionIcon /> },
];

const Navbar = () => {
  const router = useRouter();
  const [value, setValue] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  // Sync active tab with current route
  useEffect(() => {
    const currentIndex = menuItems.findIndex((item) => item.href === router.pathname);
    setValue(currentIndex === -1 ? 0 : currentIndex);
  }, [router.pathname]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: primaryColor, boxShadow: "none" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Box>
        <Box
          component="img"
          src="/images/01.png"
          alt="Career Cruise Consulting ME logo white"
          sx={{ width: "50px", height: "auto", marginTop: "10px", borderRadius: "5px" }}
        />
        {/* <Box
          component="img"
          className="CCS"
          src="/images/02.png"
          alt="Career Cruise Consulting ME logo white"
          sx={{ width: "250px", height: "auto", marginTop: "10px",marginLeft:"20px", borderRadius: "5px" }}
        /> */}
        </Box>
        {/* <Box
          component="img"
          src="/images/"
          className="CCS"
        
          alt="Career Cruise Consulting ME logo white"
          sx={{ width: "200px", height: "auto", marginTop: "10px",color:"#fff", borderRadius: "5px" }}
        /> */}
        {isMobile ? (
          <>
            <IconButton edge="end" color="inherit" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
              <List>
                {menuItems.map((item, index) => (
                  <ListItem key={index} component={Link} href={item.href} onClick={toggleDrawer(false)}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </>
        ) : (
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="inherit"
            TabIndicatorProps={{ style: { display: "none" } }}
            sx={{
              "& .MuiTab-root": {
                color: "rgba(255, 255, 255, 0.7)",
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
            {menuItems.map((item, index) => (
              <Tab key={index} component={Link} href={item.href} icon={item.icon} label={item.text} />
            ))}
          </Tabs>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

