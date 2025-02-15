import React, { useState, useEffect } from "react";
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
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from "@mui/lab";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import axios from "axios";

import MenuIcon from "@mui/icons-material/Menu";

const drawerWidth = 240;
const primaryColor = "#0a5578";
const secondaryColor = "#FFFFFF";

const roadmapData = [
  {
    year: "2016",
    title: "STARTING UP",
    color: "#74AF27",
    description: [
      "Research on aviation market",
      "Research on cryptocurrency",
      "Research on traditional online payment system & alternative payment solution"
    ]
  },
  {
    year: "2017 Q2",
    title: "OPENING NEW BUSINESS",
    color: "#0288D1",
    description: [
      "Finish necessarily legal procedure to enable operations"
    ]
  },
  {
    year: "2017 Q1",
    title: "BUILDING UP AND GETTING REAL EXPERIENCES",
    color: "#880E4F",
    description: [
      "Integrate Bitair payment solution into real business network regarding booking airline ticket (trial version) to conduct research",
      "Make survey of user's experiences & choices",
      "Approach airlines, travel & tourism"
    ]
  },
  {
    year: "2017 Q2",
    title: "OPENING NEW BUSINESS",
    color: "#0288D1",
    description: [
      "Finish necessarily legal procedure to enable operations"
    ]
  },
  {
    year: "2017 Q1",
    title: "BUILDING UP AND GETTING REAL EXPERIENCES",
    color: "#880E4F",
    description: [
      "Integrate Bitair payment solution into real business network regarding booking airline ticket (trial version) to conduct research",
      "Make survey of user's experiences & choices",
      "Approach airlines, travel & tourism"
    ]
  },

];


const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const items = [
    { type: "image", src: "/images/interview.jpg" },
    { type: "image", src: "/images/Job.webp" },
    { type: "image", src: "/images/Job.webp" },
    { type: "image", src: "/images/1723224215434.png" }
  ];

  const testimonials = [
    {
      name: "Ahmed Khalid",
      role: "CEO of Horizon Technologies",
      quote:
        "Working with Career Cruise Consulting was an absolute game-changer for our business. Their tailor-made approach allowed us to complete our project on time, with a level of customization that exceeded our expectations.",
    },
    {
      name: "Fatima Al Mansoori",
      role: "Operations Director at Gulf Innovations",
      quote:
        "Career Cruise Consulting helped us execute a complex project with flawless precision. Their deep understanding of the Middle Eastern market, combined with their expertise in creating tailor-made solutions, made them the perfect partner for our expansion.",
    },
    {
      name: "Sultan Bin Zayed",
      role: "Founder of Zenith Construction",
      quote:
        "The team at Career Cruise Consulting went above and beyond to ensure our project aligned perfectly with our vision. Their Dubai-based expertise, paired with their attention to detail, gave us confidence from day one.",
    },
    {
      name: "Laila Abbas",
      role: "Managing Director at Al Noor Enterprises",
      quote:
        "Career Cruise Consulting provided exceptional service and innovative solutions tailored to our needs. Their understanding of the regional landscape in the Middle East was clear in every aspect of their work.",
    },
  ];
  const menuItems = [
    { text: "Home", route: "/" },
    { text: "About Us", route: "/About" },
    { text: "Services", route: "/Services" },
    { text: "Contact", route: "/contact_us" },
  ];

  const CounterCard = ({ title, target }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const duration = 2000;
      const incrementTime = 20;
      const step = Math.ceil(target / (duration / incrementTime));

      const timer = setInterval(() => {
        start += step;
        if (start >= target) {
          start = target;
          clearInterval(timer);
        }
        setCount(start);
      }, incrementTime);

      return () => clearInterval(timer);
    }, [target]);

    return (
      <Card sx={{ backgroundColor: primaryColor, color: secondaryColor, textAlign: "center", padding: 2, minWidth: 200 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            {count}
          </Typography>
          <Typography variant="subtitle1">{title}</Typography>
        </CardContent>
      </Card>
    );
  };

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    organizationName: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/contact", formData);
      alert(response.data.message);
      setFormData({ fullName: "", email: "", phone: "", organizationName: "", message: "" });
    } catch (error) {
      alert("Error: " + error.response?.data?.error || "Something went wrong");
    }
  };

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
              <Box
                component="img"
                src="/images/logo.png"
                alt="Career Cruise Consulting ME logo white"
                sx={{
                  width: "80px",
                  height: "auto",
                  marginTop: "10px",
                  marginRight: "20px",
                  borderRadius: "7px"
                }}
              />
              {/* <Typography variant="h6" noWrap sx={{ color: secondaryColor }}>
                Career Cruise Consulting
              </Typography> */}
            </Toolbar>
          </AppBar>

          <Toolbar />

          <Box className="Head" sx={{ backgroundImage: 'url("/images/1723224215434.png")', height: "500px" }}>
            <Container maxWidth="md" sx={{ padding: "100px 0" }}>
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
          </Box>


          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
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
                <Grid container spacing={2} justifyContent="center">
                  {items.map((item, index) => (
                    <Grid
                      item
                      key={index}
                      xs={12} sm={6}
                      sx={{
                        height: 250,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: 2,
                        overflow: "hidden",
                        position: "relative",
                      }}
                    >
                      <Box
                        component="img"
                        src={item.src}
                        alt="Grid Item"
                        sx={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          transition: "transform 0.3s ease-in-out",
                          '&:hover': {
                            transform: "scale(1.1)",
                          },
                        }}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>


          </Box>


          <Box sx={{ margin: "50px 0" }}>
            <Typography variant="h4" fontWeight="bold" sx={{ textAlign: "center" }} color={primaryColor}>
              What Our Clients Are <span style={{ color: primaryColor }}>Saying.</span>
            </Typography>

            <Swiper
              modules={[Pagination, Autoplay]}
              slidesPerView={3}
              spaceBetween={30}
              autoplay={{ delay: 3000 }}
              pagination={{ clickable: true }}
              style={{ padding: "20px", maxWidth: "80%", margin: "auto" }}
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <Card sx={{ backgroundColor: secondaryColor, borderRadius: "10px", height: "500px", boxShadow: 3 }}>
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
          </Box>

          <Box sx={{ margin: "20px 0 50px 0" }}>
            <Typography variant="h4" fontWeight="bold" sx={{ textAlign: "center" }} color={primaryColor}>
              What Our Clients Are <span style={{ color: primaryColor }}>Saying.</span>
            </Typography>

            <Grid container spacing={20} justifyContent="center" sx={{ padding: 3 }}>
              <Grid item>
                <CounterCard title="Total Clients" target={500} />
              </Grid>
              <Grid item>
                <CounterCard title="Total Employees" target={5845} />
              </Grid>
              <Grid item>
                <CounterCard title="Total Projects" target={45} />
              </Grid>
            </Grid>
          </Box>

          <Box>
            <Timeline sx={{ padding: 3 }}>
              {roadmapData.map((item, index) => (
                <TimelineItem key={index}>
                  {index % 2 === 0 ? (
                    <>
                      <TimelineContent >
                        <Box display="inline-block" maxWidth={400}>
                          <Card sx={{ backgroundColor: item.color, color: secondaryColor, marginTop: 1 }}>
                            <CardContent>
                              <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>{item.title}</Typography>
                              {item.description.map((desc, i) => (
                                <Typography key={i} variant="body2" sx={{ marginTop: 1 }}>{desc}</Typography>
                              ))}
                            </CardContent>
                          </Card>
                        </Box>
                      </TimelineContent>
                      <TimelineSeparator>
                        <TimelineDot sx={{ backgroundColor: item.color }} />
                        {index !== roadmapData.length - 1 && <TimelineConnector />}
                      </TimelineSeparator>
                      <TimelineContent></TimelineContent>
                    </>
                  ) : (
                    <>
                      <TimelineContent></TimelineContent>
                      <TimelineSeparator>
                        <TimelineDot sx={{ backgroundColor: item.color }} />
                        {index !== roadmapData.length - 1 && <TimelineConnector />}
                      </TimelineSeparator>
                      <TimelineContent>
                        <Box display="inline-block" maxWidth={400}>
                          <Card sx={{ backgroundColor: item.color, color: secondaryColor, marginTop: 1 }}>
                            <CardContent>
                              <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>{item.title}</Typography>
                              {item.description.map((desc, i) => (
                                <Typography key={i} variant="body2" sx={{ marginTop: 1 }}>{desc}</Typography>
                              ))}
                            </CardContent>
                          </Card>
                        </Box>
                      </TimelineContent>
                    </>
                  )}
                </TimelineItem>
              ))}
            </Timeline>
          </Box>

          <Box sx={{ backgroundImage: 'url("/images/interview.jpg")', padding: "50px 10px" }}>
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
                      <strong>Email:</strong> <a href="mailto:humans@Career Cruise Consulting-me.com" style={{ color: secondaryColor }}>humans@Career Cruise Consulting-me.com</a>
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
                  <form onSubmit={handleSubmit}>
                    <TextField fullWidth label="Full Name" name="fullName" value={formData.fullName} onChange={handleChange} variant="outlined" margin="normal" required />
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <TextField fullWidth label="Email" name="email" type="email" value={formData.email} onChange={handleChange} variant="outlined" margin="normal" required />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField fullWidth label="Phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} variant="outlined" margin="normal" required />
                      </Grid>
                    </Grid>
                    <TextField fullWidth label="Organization Name" name="organizationName" value={formData.organizationName} onChange={handleChange} variant="outlined" margin="normal" required />
                    <TextField fullWidth label="How can we help you?" name="message" value={formData.message} onChange={handleChange} variant="outlined" multiline rows={4} margin="normal" required />
                    <Button type="submit" variant="contained" sx={{ mt: 2 }} fullWidth>
                      Send Message
                    </Button>
                  </form>
                </Paper>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Header;
