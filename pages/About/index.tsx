import React, { useState } from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    List,
    ListItem,
    ListItemText,
    TextField,
    Paper,
    Container,
    Link,
    Box,
    Button,
    ListItemIcon,
    IconButton, Card, CardContent, Avatar, Grid
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import MenuIcon from "@mui/icons-material/Menu";
import "swiper/css";
import "swiper/css/pagination";
import { ThumbUp, Chat, SupportAgent, BusinessCenter } from "@mui/icons-material";
import Navbar from "../../components/Layout/Navbar";


const drawerWidth = 240;
const primaryColor = "#0a5578";
const secondaryColor = "#FFFFFF";

const roles = [
    "Brand Ambassador",
    "Cashier / Ticketing",
    "Event Producer",
    "Event Coordinator",
    "Guest Management Specialist",
    "Host & Hostess",
    "Logistics Coordinator",
    "Model",
    "Operation Manager",
    "Promoter",
    "Project Manager",
    "Production Manager",
    "Retail Sales Support",
    "RSVP Manager",
    "Registration Staff",
];


const features = [
    {
        icon: <ThumbUp sx={{ fontSize: 50, color: primaryColor }} />,
        title: "Expertise",
        description: "Over 30 years of combined industry experience.",
    },
    {
        icon: <Chat sx={{ fontSize: 50, color: primaryColor }} />,
        title: "Quick Response",
        description: "Efficient communication and prompt support.",
    },
    {
        icon: <SupportAgent sx={{ fontSize: 50, color: primaryColor }} />,
        title: "Ongoing Assistance",
        description: "Support throughout the recruitment process.",
    },
    {
        icon: <BusinessCenter sx={{ fontSize: 50, color: primaryColor }} />,
        title: "On-Site Management",
        description: "Ensuring smooth operations in real-time.",
    },
];

const index = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    // Toggle Sidebar
    const handleToggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };
    const menuItems = [
        { text: "Home", route: "/" },
        { text: "About Us", route: "/About" },
        { text: "Services", route: "/Services" },
        { text: "Contact", route: "/contact" },
    ];
    return (
        <>
            {/* <Box
                sx={{
                    width: sidebarOpen ? drawerWidth : 0,
                    overflow: "hidden",
                    transition: "width 0.3s ease-in-out",
                    backgroundColor: primaryColor,
                    color: secondaryColor,
                    height: "100%",
                    position: "fixed",
                    left: 0,
                    top: 0,
                    paddingTop: "64px", // To avoid overlap with AppBar
                }}
            >
            
            <List>
            {menuItems.map(({ text, route }) => (
                <ListItem key={text} component={Link} href={route}>
                <ListItemText sx={{ color: "#fff" }} primary={text} />
                </ListItem>
                ))}
                </List>
                </Box> */}
                <Navbar />
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    // ml: sidebarOpen ? `${drawerWidth}px` : 0,
                    transition: "margin 0.3s ease-in-out",
                    backgroundColor: secondaryColor,
                    height: "100%",
                    // width: `calc(100% - ${sidebarOpen ? drawerWidth : 0}px)`,
                    
                }}
            >
                <Box sx={{ padding: "40px 0px 70px 0", textAlign: "center" }}>
                    <Typography
                        variant="h4"
                        component="h2"
                        sx={{
                            fontWeight: "bold",
                            color: "#333",
                            animation: "fadeInUp 1s",
                            marginTop: "60px",
                            textAlign: "center"
                        }}
                    >
                        About <span style={{ color: "#0a5578" }}>Career Cruise Consulting.</span> - The Event
                        Staffing Agency Dubai
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            marginTop: 2,
                            color: "#666",
                            animation: "fadeIn 1s",
                        }}
                    >
                        With over a decade of experience, Career Cruise Consulting, an event staffing agency in
                        Dubai, specializes in understanding your unique needs and providing
                        tailored solutions whenever event staff is required, ensuring your
                        events run smoothly.
                    </Typography>
                    <Button
                        variant="outlined"
                        href="#contact"
                        sx={{
                            marginTop: 3,
                            borderColor: "#18A0C3",
                            color: "#18A0C3",
                            animation: "fadeInUp 1s",
                            ":hover": {
                                backgroundColor: "#18A0C3",
                                color: "#FFFFFF",
                            },
                        }}
                    >
                        Start Hiring
                    </Button>
                </Box>


                <Box sx={{ padding: "0px 0px 70px 0", textAlign: "center" }}>


                    <Typography variant="h4" fontWeight="bold" sx={{ marginBottom: "30px", textAlign: "center" }}>
                        Why Work with <span style={{ color: primaryColor }}>Career Cruise Consulting?</span>
                    </Typography>

                    <Grid container spacing={4} justifyContent="center">
                        {features.map((feature, index) => (
                            <Grid item xs={12} sm={6} md={3} key={index}>
                                <Box
                                    sx={{
                                        padding: "20px",
                                        borderRadius: "8px",
                                        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                                        transition: "transform 0.3s",
                                        "&:hover": { transform: "scale(1.05)" },
                                    }}
                                >
                                    {feature.icon}
                                    <Typography variant="h6" fontWeight="bold" sx={{ marginTop: "15px" }}>
                                        {feature.title}
                                    </Typography>
                                    <Typography variant="body2" sx={{ marginTop: "10px" }}>
                                        {feature.description}
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>

                    <Button
                        variant="outlined"
                        sx={{
                            marginTop: "40px",
                            borderColor: primaryColor,
                            color: primaryColor,
                            padding: "10px 20px",
                            fontWeight: "bold",
                            "&:hover": {
                                backgroundColor: primaryColor,
                                color: secondaryColor,
                            },
                        }}
                        href="#contact"
                    >
                        Request a Consultation
                    </Button>

                </Box>

                <Typography variant="h4" component="h2" sx={{ textAlign: "center" }} gutterBottom>
                    We got you <strong style={{ color: primaryColor }}>covered.</strong>
                </Typography>

                <Grid item xs={12} container spacing={2}>
                    <Grid item xs={12} md={9} sx={{ paddingRight: "20px" }}>
                        <Typography variant="body1" paragraph>
                            Freelancers of the highest caliber to support various roles for your event
                            through our event staffing agency in Dubai. Whether you need <strong style={{ color: primaryColor }}>pre-event
                                support, hostesses in Dubai, or on-site personnel during the live phase</strong>,
                            we ensure a flawless experience from beginning to end.
                        </Typography>

                        <Grid container spacing={2}>
                            <Grid item xs={12} md={12}>
                                <List>
                                    <Grid container spacing={2}>
                                        {roles.map((role, index) => (
                                            <Grid item xs={12} sm={6} md={4} key={index}> {/* 3 per row on md+ screens */}
                                                <ListItem style={{ border: "solid 1px", marginRight: "5px" }}>
                                                    <ListItemIcon style={{ minWidth: "29px" }}>
                                                        <CheckCircleIcon style={{ maxWidth: "42px" }} color="primary" />
                                                    </ListItemIcon>
                                                    <ListItemText primary={role} />
                                                </ListItem>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </List>
                            </Grid>
                        </Grid>


                    </Grid>
                    <Grid item xs={12} sx={{ backgroundImage: 'url("/images/first.jpg")' }} md={3}>

                    </Grid>
                </Grid>

            </Box>
        </>
    );
};

export default index;
