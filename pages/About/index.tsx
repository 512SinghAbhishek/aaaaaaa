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
import { styled } from "@mui/system";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import MenuIcon from "@mui/icons-material/Menu";
import "swiper/css";
import "swiper/css/pagination";
import { ThumbUp, Chat, SupportAgent, BusinessCenter } from "@mui/icons-material";
import Navbar from "../../components/Layout/Navbar";


const drawerWidth = 240;
const primaryColor = "#008acb";
const secondaryColor = "#000000";

const roles = [
    "Information Technology",
    "Healthcare",
    "Hospitality",
    "Telecommunications",
    "Real Estate",
    "Marketing",
    "Agriculture",
    "Construction",
    "Transportation",
    "Accounting",
    "Finance",
    "E commerce",
    "Manufacturing",
    "Education",
    "Media ",
    "Entertainment"

];


const services = [
    {
        title: "HR Services",
        description:
            "We are the most trusted HR & Placements companies in Noida /(Delhi NCR), offering outstanding Services to our esteemed clients.",
        image: "/images/HR-Services.jpg",
    },
    {
        title: "Manpower Recruitment Services",
        description:
            "We have got a widespread network of clients to whom we render these recruitment services as per their specific industry.",
        image: "/images/40.jpg",
    },
    {
        title: "Placement Services",
        description:
            "We have served several organizations by providing competent candidates and Job Seekers with prospective opportunities.",
        image: "/images/Placement.jpeg",
    },
    {
        title: "Organization Management",
        description:
            "Organization management helps to extract the best out of employees so that they accomplish the tasks within the given time frame.",
        image: "/images/Org.webp",
    },
    {
        title: "Customer Insight",
        description:
            "We do this because we realize that consumers are at the core of why we are in business in the first place. We do this, because we care.",
        image: "/images/Customer.jpg",
    },
    {
        title: "Advanced Analytics",
        description:
            "Advanced analytics refers to a broad range of analytics that are intended to give businesses greater insight into their data.",
        image: "images/Analytics.jpg",
    },
];

const StyledCard = styled(Card)({
    transition: "0.3s",
    "&:hover": {
        transform: "scale(1.05)",
    },
    textAlign: "center",
    padding: "20px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
});


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

    return (
        <>
           
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
                            color: "#ffffff",
                            animation: "fadeInUp 1s",
                            marginTop: "60px",
                            textAlign: "center"
                        }}
                    >
                        About <span style={{ color: "#008acb" }}>Career Cruise Consulting.</span> - The
                        Staffing Agency in Delhi NCR
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            marginTop: 2,
                            color: "#ffffff",
                            animation: "fadeIn 1s",
                        }}
                    >
                        Welcome to <span style={{ color: "#008acb" }}>Career Cruise consulting </span>your trusted recruitment partner. We connect top talent with
                        leading employers, ensuring the perfect match for career growth and business success. Whether you’re
                        an employer seeking skilled professionals or a job seeker looking for your next opportunity, we
                        are here to help.<br />
                        Career Cruise Consulting where talent meets opportunity! We are a dynamic recruitment agency dedicated
                        to connecting top-tier professionals with industry-leading organizations. Our mission is simple: to
                        bridge the gap between exceptional talent and companies that value their skills, expertise, and passion.

                    </Typography>
                    <Button
                        variant="outlined"
                        href="/Services"
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


                    <Typography variant="h4" fontWeight="bold" sx={{ marginBottom: "30px", textAlign: "center", color: "#ffffff" }}>
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
                                    <Typography variant="h6" fontWeight="bold" sx={{ marginTop: "15px", color: "#ffffff" }}>
                                        {feature.title}
                                    </Typography>
                                    <Typography variant="body2" sx={{ marginTop: "10px", color: "#ffffff" }}>
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
                        href="/"
                    >
                        Request a Consultation
                    </Button>

                </Box>

                <Typography variant="h4" component="h2" sx={{ textAlign: "center", color: "#ffffff" }} gutterBottom>
                    We got you <strong style={{ color: primaryColor }}>covered.</strong>
                </Typography>

                <Grid item xs={12} container spacing={2}>
                    <Grid item xs={12} md={9} sx={{ paddingRight: "20px" }}>
                        <Typography variant="body1" paragraph style={{ color: "#ffffff" }}>
                            Freelancers of the highest caliber to support various roles for your event
                            through our Hiring agency in Delhi NCR. Whether you need <strong style={{ color: primaryColor }}>pre-event
                                support, hostesses in Delhi NCR, or on-site personnel during the live phase</strong>,
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
                                                    <ListItemText style={{ color: "#ffffff" }} primary={role} />
                                                </ListItem>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </List>
                            </Grid>
                        </Grid>


                    </Grid>
                    <Grid item xs={12} sx={{ backgroundImage: 'url("/images/UK-Recruitment-Agencies.jpg")' }} md={3}>

                    </Grid>
                </Grid>

                <Container sx={{ padding: "70px 0px 70px 0", textAlign: "center" }}>
                    <Typography variant="h4" sx={{ color: "#fff" , marginBottom:"50px"}} align="center" gutterBottom>
                        OUR <strong style={{ color: primaryColor }}>SERVICES</strong>
                    </Typography>
                    <Grid container spacing={3}>
                        {services.map((service, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <StyledCard>
                                    <CardContent>
                                        <Box display="flex" justifyContent="center" mb={2}>
                                            <img src={service.image} alt={service.title} width={100} height={100} />
                                        </Box>
                                        <Typography variant="h6" gutterBottom>
                                            {service.title}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            {service.description}
                                        </Typography>
                                    </CardContent>
                                </StyledCard>
                            </Grid>
                        ))}
                    </Grid>
                </Container>

            </Box>
        </>
    );
};

export default index;
