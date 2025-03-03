import React, { useState } from "react";
import {
    Typography,
    Container,
    Box,
    Button, Card, CardContent, Grid
} from "@mui/material";
import { styled } from "@mui/system";
import "swiper/css";
import "swiper/css/pagination";
import { ThumbUp, Chat, SupportAgent, BusinessCenter } from "@mui/icons-material";
import Navbar from "../../components/Layout/Navbar";


const drawerWidth = 240;
const primaryColor = "#008acb";
const secondaryColor = "#000000";




const services = [
    {
        title: "HR Services",
        description:
            "We are the most trusted HR & Placements companies in Noida /(Delhi NCR), offering outstanding Services to our esteemed clients.",
        image: "/images/1Ser.jpg",
    },
    {
        title: "Manpower Recruitment Services",
        description:
            "We have got a widespread network of clients to whom we render these recruitment services as per their specific industry.",
        image: "/images/2Ser.jpg",
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
        image: "/images/4ser.jpg",
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


// const services = [
//     { title: "HR Services", description: "Trusted HR & Placements services.", position: { top: "5%", left: "50%" }, icon: <Business sx={{ width: 70, height: 70 }} /> },
//     { title: "Manpower Recruitment", description: "Widespread network for hiring.", position: { top: "25%", right: "10%" }, icon: <Group sx={{ width: 70, height: 70 }} /> },
//     { title: "Placement Services", description: "Connecting candidates & companies.", position: { top: "55%", right: "5%" }, icon: <Work sx={{ width: 70, height: 70 }} /> },
//     { title: "Org. Management", description: "Best employee output & efficiency.", position: { bottom: "20%", right: "15%" }, icon: <AccountTree sx={{ width: 70, height: 70 }} /> },
//     { title: "Customer Insight", description: "Customers at core of our business.", position: { bottom: "5%", left: "10%" }, icon: <Insights sx={{ width: 70, height: 70 }} /> },
//     { title: "Advanced Analytics", description: "Data-driven business decisions.", position: { top: "25%", left: "5%" }, icon: <BarChart sx={{ width: 70, height: 70 }} /> }
// ];

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
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedService, setSelectedService] = useState(null);

    const handleClick = (event, service) => {
        setAnchorEl(event.currentTarget);
        setSelectedService(service);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setSelectedService(null);
    };

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
                        About <span style={{ color: "#008acb" }}>Career Cruise Consulting.</span>
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
                        to connecting top-tier professionals with industry-leading organizations.
                        {/* <br />
                        Our mission is simple to
                        bridge the gap between exceptional talent and companies that value their skills, expertise, and passion. */}

                    </Typography>

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

                <Container sx={{ padding: "70px 0px 70px 0", textAlign: "center" }}>
                    <Typography variant="h4" sx={{ color: "#fff", marginBottom: "50px" }} align="center" gutterBottom>
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

                <Box sx={{ padding: "0px 0px 70px 0", textAlign: "center" }}>
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
                        Our <span style={{ color: "#008acb" }}> Mission</span>
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            marginTop: 2,
                            color: "#ffffff",
                            animation: "fadeIn 1s",
                            padding: "7px 0px 70px 0",
                        }}
                    >

                        Our mission is simple to
                        bridge the gap between exceptional talent and companies that value their skills, expertise, and passion.

                    </Typography>

                    <div className="mission_img">
                        <img src="/images/Mission.jpg" alt="" style={{ width: "100%", height: "500px", borderRadius: "20px" }} />

                    </div>

                </Box>



                <Box sx={{ padding: "0px 0px 70px 0" }}>
                    <Grid container spacing={2}>

                        <Grid item xs={12} sm={6}>
                            <Typography
                                variant="h4"
                                component="h2"
                                sx={{
                                    fontWeight: "bold",
                                    color: "#ffffff",
                                    animation: "fadeInUp 1s",
                                    marginTop: "60px",
                                    textAlign: "start"
                                }}
                            >
                                For <span style={{ color: "#008acb" }}> Job Seekers</span>
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    marginTop: 2,
                                    color: "#ffffff",
                                    animation: "fadeIn 1s",
                                }}
                            >

                                Are you looking for your next career move? Browse our latest job openings, submit your resume, and
                                let our expert recruiters connect you with the right opportunities. We work closely with job seekers
                                to understand their skills, goals, and aspirations, ensuring the perfect job match
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <img src="/images/Sikker.png" alt="" style={{ width: "96%", height: "400px", borderRadius: "10px" }} />
                        </Grid>
                    </Grid>

                </Box>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <img src="/images/Clint.jpg" alt="" style={{ width: "96%", height: "400px", borderRadius: "10px" }} />
                    </Grid>
                    <Grid item xs={12} sm={6}>

                        <Box sx={{ padding: "0px 0px 70px 0" }}>
                            <Typography
                                variant="h4"
                                component="h2"
                                sx={{
                                    fontWeight: "bold",
                                    color: "#ffffff",
                                    animation: "fadeInUp 1s",
                                    marginTop: "60px",
                                    textAlign: "start"
                                }}
                            >
                                For <span style={{ color: "#008acb" }}> Cients Tieup</span>
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    marginTop: 2,
                                    color: "#ffffff",
                                    animation: "fadeIn 1s",
                                }}
                            >
                                Need to hire top talent? Our recruitment experts take the time to understand your company culture,
                                business needs, and hiring goals to deliver candidates who align perfectly with your organization.
                                Partner with us for efficient, high-quality hiring solutions.
                            </Typography>

                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default index;
