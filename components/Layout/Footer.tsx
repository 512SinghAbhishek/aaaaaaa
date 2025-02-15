import React from "react";
import { Box, Typography, Link } from "@mui/material";

const drawerWidth = 240;
const primaryColor = "#18A0C3";
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
               href="mailto:humans@sapiens-me.com"
               sx={{ color: secondaryColor, textDecoration: "none" }}
            >
               humans@sapiens-me.com
            </Link>
         </Typography>
         <Box
            component="img"
            src="https://sapiens-me.com/wp-content/uploads/2024/07/white-logo.png"
            alt="Sapiens ME logo white"
            sx={{
               width: "200px",
               height: "auto",
               marginTop: "10px",
            }}
         />
      </Box>
   );
};

export default Footer;
