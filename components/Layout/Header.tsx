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
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import MenuIcon from "@mui/icons-material/Menu";

const drawerWidth = 240;
const primaryColor = "#18A0C3";
const secondaryColor = "#FFFFFF";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const testimonials = [
    {
      name: "Ahmed Khalid",
      role: "CEO of Horizon Technologies",
      quote:
        "Working with Sapiens was an absolute game-changer for our business. Their tailor-made approach allowed us to complete our project on time, with a level of customization that exceeded our expectations.",
    },
    {
      name: "Fatima Al Mansoori",
      role: "Operations Director at Gulf Innovations",
      quote:
        "Sapiens helped us execute a complex project with flawless precision. Their deep understanding of the Middle Eastern market, combined with their expertise in creating tailor-made solutions, made them the perfect partner for our expansion.",
    },
    {
      name: "Sultan Bin Zayed",
      role: "Founder of Zenith Construction",
      quote:
        "The team at Sapiens went above and beyond to ensure our project aligned perfectly with our vision. Their Dubai-based expertise, paired with their attention to detail, gave us confidence from day one.",
    },
    {
      name: "Laila Abbas",
      role: "Managing Director at Al Noor Enterprises",
      quote:
        "Sapiens provided exceptional service and innovative solutions tailored to our needs. Their understanding of the regional landscape in the Middle East was clear in every aspect of their work.",
    },
  ];
  const menuItems = [
    { text: "Home", route: "/" },
    { text: "About Us", route: "/About" },
    { text: "Services", route: "/Services" },
    { text: "Contact", route: "/contact_us" },
  ];

  return (

    <>
      <Box sx={{ display: "flex" }}>

        {/* Sidebar (Not Drawer) */}
        <Box
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
        </Box>

        {/* Main Content */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            ml: sidebarOpen ? `${drawerWidth}px` : 0,
            transition: "margin 0.3s ease-in-out",
            backgroundColor: secondaryColor,
            height: "100%",
            width: `calc(100% - ${sidebarOpen ? drawerWidth : 0}px)`,
          }}
        >
          {/* Top Navbar */}
          <AppBar position="fixed" sx={{ width: "100%", backgroundColor: primaryColor }}>
            <Toolbar>
              {/* Toggle Sidebar Button */}
              <IconButton edge="start" color="inherit" onClick={handleToggleSidebar} sx={{ mr: 2 }}>
                <MenuIcon />
              </IconButton>

              <Typography variant="h6" noWrap sx={{ color: secondaryColor }}>
                Career Cruise Consulting
              </Typography>
            </Toolbar>
          </AppBar>

          <Toolbar />

          <Container maxWidth="md">
            <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
              Transform Your <span style={{ color: primaryColor }}>Events</span> with Expert <span style={{ color: primaryColor }}>Staffing Solutions</span>: Hire a Hostess Agency in Dubai
            </Typography>
            <Typography variant="body1" paragraph>
              Discover how our hostess agency in Dubai connects you with top talent, helping you hire hostesses for events and ensuring success in every project.
            </Typography>
            <Button
              variant="outlined"
              sx={{
                mt: 2,
                borderColor: primaryColor,
                color: primaryColor,
                '&:hover': {
                  backgroundColor: primaryColor,
                  color: secondaryColor,
                }
              }}
            >
              Get Started Today!
            </Button>
          </Container>
          <Box component="main" sx={{ flexGrow: 1, p: 3, ml: `${drawerWidth}px` }}>
            <Toolbar />
            <Typography variant="h4" sx={{ color: primaryColor, fontWeight: "bold" }}>
              Event Staffing Services in Dubai
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              ✔ Temporary Event Staffing: Skilled personnel for front and back of house, sourced through our trusted event staffing agency.
            </Typography>
            <Typography variant="body1" sx={{ mt: 1 }}>
              ✔ End-to-End Event Management: From sourcing to execution, our Dubai-based agency covers every detail.
            </Typography>
            <Typography variant="body1" sx={{ mt: 1 }}>
              ✔ Freelancer Hostess Selection: Access a curated pool of vetted hostesses perfect for any event.
            </Typography>

          </Box>

          <Box sx={{ bgcolor: secondaryColor, color: "black", p: 4 }}>
            <Grid container spacing={4} alignItems="center">
              {/* Text Section */}
              <Grid item xs={12} md={6}>
                <Typography variant="h4" sx={{ fontWeight: "bold", color: primaryColor }}>
                  Comprehensive <span style={{ fontWeight: "bold" }}>Event Staffing Services</span> in Dubai
                </Typography>

                <List>
                  {[
                    {
                      text: "Skilled personnel for front and back of house, sourced through our trusted event staffing agency.",
                    },
                    {
                      text: "From sourcing to execution, our Dubai-based event staffing agency covers every detail.",
                    },
                    {
                      text: "Access a curated pool of vetted hostesses in Dubai, perfect to hire for any event.",
                    },
                  ].map((item, index) => (
                    <ListItem key={index}>
                      <ListItemIcon>
                        <CheckCircleIcon sx={{ color: primaryColor }} />
                      </ListItemIcon>
                      <Typography variant="body1">
                        <strong>{item.text}</strong>
                      </Typography>
                    </ListItem>
                  ))}
                </List>
              </Grid>

              {/* Image Section */}
              <Grid item xs={12} md={6} textAlign="center">
                <img
                  src="https://sapiens-me.com/wp-content/uploads/2024/10/hostess-agency.jpg"
                  alt="Hostess Agency"
                  style={{ width: "100%", borderRadius: "8px" }}
                />
              </Grid>
            </Grid>

            {/* Services Section */}
            <Box sx={{ textAlign: "center", mt: 6 }}>
              <img
                src="https://sapiens-me.com/wp-content/uploads/2024/07/Screenshot_2024-07-29_134432-removebg-preview.png"
                alt="Sapiens ME Logo"
                style={{ width: "200px", marginBottom: "20px" }}
              />
              <Typography variant="h4" sx={{ color: primaryColor, fontWeight: "bold" }}>
                Services.
              </Typography>
            </Box>

            {/* Additional Image */}
            <Box sx={{ textAlign: "center", mt: 4 }}>
              <img
                src="https://sapiens-me.com/wp-content/uploads/2024/10/event-staffing-agency-dubai.jpg"
                alt="Event Staffing"
                style={{ width: "300px", borderRadius: "8px" }}
              />
            </Box>
          </Box>
          <Typography variant="h4" fontWeight="bold" color={secondaryColor}>
            What Our Clients Are <span style={{ color: primaryColor }}>Saying.</span>
          </Typography>

          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={2}
            spaceBetween={30}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            style={{ padding: "20px", maxWidth: "80%", margin: "auto" }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <Card sx={{ backgroundColor: secondaryColor, borderRadius: "10px", boxShadow: 3 }}>
                  <CardContent>
                    <Typography variant="h6" fontStyle="italic">
                      “{testimonial.quote}”
                    </Typography>
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: 2 }}>
                      <Avatar sx={{ bgcolor: primaryColor }}>{testimonial.name.charAt(0)}</Avatar>
                      <Typography variant="subtitle1" fontWeight="bold">
                        {testimonial.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {testimonial.role}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
          <Grid container spacing={4} alignItems="center">
            {/* Left Section - Contact Info */}
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ p: 3, backgroundColor: primaryColor, color: secondaryColor }}>
                <Typography variant="h4" fontWeight="bold">
                  Contact <span style={{ fontWeight: "lighter" }}>Information</span>
                </Typography>
                <Box display="flex" alignItems="center" mt={2}>
                  <EmailIcon sx={{ mr: 1 }} />
                  <Typography variant="body1">
                    <strong>Email:</strong> <a href="mailto:humans@sapiens-me.com" style={{ color: secondaryColor }}>humans@sapiens-me.com</a>
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center" mt={2}>
                  <LocationOnIcon sx={{ mr: 1 }} />
                  <Typography variant="body1">
                    <strong>Address:</strong> Office Bldg, Office 307 0136, Dubai Investment Park, Dubai
                  </Typography>
                </Box>
              </Paper>
            </Grid>

            {/* Right Section - Contact Form */}
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ p: 3 }}>
                <Typography variant="h5" gutterBottom>
                  Get in Touch
                </Typography>
                <form>
                  <TextField fullWidth label="Full Name" variant="outlined" margin="normal" required />
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth label="Email" type="email" variant="outlined" margin="normal" required />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth label="Phone" type="tel" variant="outlined" margin="normal" required />
                    </Grid>
                  </Grid>
                  <TextField fullWidth label="Organization Name" variant="outlined" margin="normal" required />
                  <TextField fullWidth label="How can we help you?" variant="outlined" multiline rows={4} margin="normal" required />
                  <Button variant="contained" sx={{ mt: 2, backgroundColor: primaryColor, color: secondaryColor }} fullWidth>
                    Send Message
                  </Button>
                </form>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Header;
