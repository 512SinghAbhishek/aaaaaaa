import React from "react";
import { Box, Typography, Link } from "@mui/material";

const drawerWidth = 240;
const primaryColor = "#0a5578";
const secondaryColor = "#FFFFFF";

const Footer = () => {
   return (
      <Box
         sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: primaryColor,
            padding: "20px",
            textAlign: "center",
         }}
      >
         <Typography variant="h6" component="div" sx={{ color: secondaryColor }}>
            <Link
               href="mailto:humans@Career Cruise Consulting-me.com"
               sx={{ color: secondaryColor, textDecoration: "none" }}
            >
               humans@Career Cruise Consulting-me.com
            </Link>
         </Typography>
         <Box
            component="img"
            src="/images/logo.png"
            alt="Career Cruise Consulting ME logo white"
            sx={{
               width: "150px",
               height: "auto",
               marginTop: "10px",
               borderRadius:"25px"
            }}
         />
      </Box>
   );
};

export default Footer;
