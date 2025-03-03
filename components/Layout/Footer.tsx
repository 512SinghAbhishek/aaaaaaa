import React from "react";
import { Box, Typography, Link, IconButton, Tooltip } from "@mui/material";
import { Facebook, Twitter, LinkedIn } from "@mui/icons-material";

const drawerWidth = 240;
const primaryColor = "#0a5578";
const secondaryColor = "#FFFFFF";

const Footer = () => {
   return (
      <Box
         sx={{
            display: "flex",
            flexDirection: "column",
            
            backgroundColor: primaryColor,
            padding: "20px",
            
         }}
      >
         <div className="Footer_sec" >
            <Typography variant="h6" component="div" sx={{ color: secondaryColor }}>
               <Link
                  href="Info@careercruiseconsulting.co"
                  sx={{ color: secondaryColor, textDecoration: "none" }}
               >
                  Info@careercruiseconsulting.co
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
                  borderRadius: "10px"
               }}
            />

            <Box display="flex" gap={2}>
               <Tooltip title="Facebook">
                  <IconButton
                     component="a"
                     href="#"
                     target="_blank"
                     sx={{ width: 70, height: 70, color: "#fff" }}
                  >
                     <Facebook />
                  </IconButton>
               </Tooltip>
               <Tooltip title="Twitter">
                  <IconButton
                     component="a"
                     href="#"
                     target="_blank"
                     sx={{ width: 70, height: 70, color: "#fff" }}
                  >
                     <Twitter />
                  </IconButton>
               </Tooltip>
               <Tooltip title="LinkedIn">
                  <IconButton
                     component="a"
                     href="#"
                     target="_blank"
                     sx={{ width: 70, height: 70, color: "#fff" }}
                  >
                     <LinkedIn />
                  </IconButton>
               </Tooltip>
            </Box>
         </div>
      </Box>
   );
};

export default Footer;
