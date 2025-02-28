import React, { useState, useEffect } from "react";
import {
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
  IconButton, Card, CardContent, Avatar, Grid,
  useMediaQuery, ListItemAvatar
} from "@mui/material";
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from "@mui/lab";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Flip } from "react-awesome-reveal";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import axios from "axios";
import ComputerIcon from "@mui/icons-material/Computer";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import HotelIcon from "@mui/icons-material/Hotel";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import CampaignIcon from "@mui/icons-material/Campaign";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import ConstructionIcon from "@mui/icons-material/Construction";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FactoryIcon from "@mui/icons-material/Factory";
import SchoolIcon from "@mui/icons-material/School";
import MovieIcon from "@mui/icons-material/Movie";
import TheatersIcon from "@mui/icons-material/Theaters";

import Navbar from "./Navbar";

const drawerWidth = 240;
const primaryColor = " #008acb";
const secondaryColor = "#000000";
// #0a5578
const roadmapData = [
  {
    year: "Step 1",
    title: "Graduation",
    color: "#74AF27",
    image: "graduation.png",
    description: [
      "Complete your degree or relevant certification in IT/BPO-related fields.",
      "Enhance skills with online courses or internships.",
      "Build a strong resume and LinkedIn profile."
    ]
  },
  {
    year: "Step 2",
    title: "Apply on Hiring Platforms",
    color: "#0288D1",
    image: "job_portal.png",
    description: [
      "Register on job portals like LinkedIn, Naukri, Indeed, etc.",
      "Apply for relevant job openings in IT and BPO sectors.",
      "Customize your resume and cover letter for each application."
    ]
  },
  {
    year: "Step 3",
    title: "Application Accepted",
    color: "#880E4F",
    image: "application_accepted.png",
    description: [
      "Receive confirmation from recruiters.",
      "Prepare for online assessments or technical screenings.",
      "Research about the company and role."
    ]
  },
  {
    year: "Step 4",
    title: "Interview Call",
    color: "#F57C00",
    image: "interview_call.png",
    description: [
      "Schedule interviews as per the company's process.",
      "Practice common IT/BPO interview questions.",
      "Prepare for HR and technical rounds."
    ]
  },
  {
    year: "Step 5",
    title: "Interview Rounds",
    color: "#7B1FA2",
    image: "interview_round.png",
    description: [
      "Attend technical and HR interviews.",
      "Demonstrate problem-solving and communication skills.",
      "Negotiate salary and job role if required."
    ]
  },
  {
    year: "Step 6",
    title: "Documentation Process",
    color: "#388E3C",
    image: "documentation.png",
    description: [
      "Submit required documents like ID proof, education certificates, and experience letters.",
      "Complete background verification if applicable.",
      "Receive an official job offer letter."
    ]
  },
  {
    year: "Step 7",
    title: "Selection & Company Onboarding",
    color: "#009595",
    image: "onboarding.png",
    description: [
      "Accept the job offer and sign the contract.",
      "Attend onboarding sessions and training programs.",
      "Get assigned to a team and start your professional journey."
    ]
  }
];


const roles = [
  { name: "Information Technology", icon: <ComputerIcon color="primary" /> },
  { name: "Healthcare", icon: <LocalHospitalIcon color="primary" /> },
  { name: "Hospitality", icon: <HotelIcon color="primary" /> },
  { name: "Telecommunications", icon: <PhoneAndroidIcon color="primary" /> },
  { name: "Real Estate", icon: <HomeWorkIcon color="primary" /> },
  { name: "Marketing", icon: <CampaignIcon color="primary" /> },
  { name: "Agriculture", icon: <AgricultureIcon color="primary" /> },
  { name: "Construction", icon: <ConstructionIcon color="primary" /> },
  { name: "Transportation", icon: <DirectionsCarIcon color="primary" /> },
  { name: "Accounting", icon: <AccountBalanceIcon color="primary" /> },
  { name: "Finance", icon: <AttachMoneyIcon color="primary" /> },
  { name: "E commerce", icon: <ShoppingCartIcon color="primary" /> },
  { name: "Manufacturing", icon: <FactoryIcon color="primary" /> },
  { name: "Education", icon: <SchoolIcon color="primary" /> },
  { name: "Media", icon: <MovieIcon color="primary" /> },
  { name: "Entertainment", icon: <TheatersIcon color="primary" /> }
];

const services = [
  {
    title: "Quick response",
    image: "/images/Quick.jpg",
    description:
      "Looking for an urgent hire? We’ve got you! At 24-7, we provide quick turn-around, we can provide you with expert solutions within 24 hours for the initial concentration.",
  },
  {
    title: "Rich-database",
    image: "/images/Database.png",
    description:
      "We have access to number of different recruitment portals, which enables us to provide quality resources in accordance with your specific requirement.",
  },
  {
    title: "Domain Expert",
    image: "/images/Domain.jpg",
    description:
      "At 24-7 we assign industry specific recruiters to help you find the right personnel who can contribute to your business growth.",
  },
  {
    title: "Personalized Services",
    image: "/images/IMG-20250225-WA0011.jpg",
    description:
      "Regardless of the size of your business, we assign you an account manager who will work with you on urgent basis.",
  },
  {
    title: "Targeted Delivery",
    image: "/images/Target.jpeg",
    description:
      "We select top quality resources through careful screening process and deliver talent solutions across industries.",
  },
  {
    title: "Replacement Assurance",
    image: "/images/Rep.webp",
    description:
      "We provide 100% replacement guarantee. If any resource provided by us leaves within 90 days, we replace the resource at no additional cost.",
  },
];

const clients = [
  "images/igtsolutions_logo.jpeg",
  "images/lovelocalindia_logo.jpeg",
];


const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);


  const items = [
    { type: "image", src: "/images/employment-recruitment-business-company-office-260nw-1757603684.jpg" },
    { type: "image", src: "/images/job-candidate-selection-process-260nw-331128260.jpg" },
    { type: "image", src: "/images/build recruitment business.jpeg" },
    { type: "image", src: "/images/how-to-choose-a-recruiting-agency.webp" },
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
      <Card sx={{ backgroundColor: primaryColor, color: "#ffffff", textAlign: "center", padding: 2, minWidth: 200 }}>
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
    firstName: "",
    lastName: "",
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
      // const response = await axios.post("https://carrerapi-production.up.railway.app/api/contact", formData);
      const response = await axios.post("xyz/contact", formData);

      alert(response.data.message);
      setFormData({ firstName: "", lastName: "", email: "", phone: "", organizationName: "", message: "" });
    } catch (error) {
      alert("Error: " + error.response?.data?.error || "Something went wrong");
    }
  };

  const isMobile = useMediaQuery("(max-width:600px)");
  const isTablet = useMediaQuery("(max-width:900px)");

  const FlipBox = ({ icon, title, description }) => {
    return (
      <Flip>
        <Card sx={{ width: 300, height: 200, textAlign: "center", p: 2, cursor: "pointer" }}>
          <CardContent>
            <IconButton>{icon}</IconButton>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              {title}
            </Typography>
            <Typography variant="body2">{description}</Typography>
          </CardContent>
        </Card>
      </Flip>
    );
  };

  const parseValue = (value) => {
    if (typeof value === "string") {
      return parseFloat(value.replace(/[^0-9.]/g, "")) || 0; // Remove non-numeric characters
    }
    return value;
  };

  const stats = [

    { title: "Years Of Experience", value: parseValue("20+"), image: "https://linksuae.ae/wp-content/uploads/2025/01/exp.png" },
    { title: "Dedicated Team", value: parseValue("100+"), image: "https://linksuae.ae/wp-content/uploads/2025/01/team.png" },
    { title: "Successful Placements", value: parseValue("40,000+"), image: "https://linksuae.ae/wp-content/uploads/2025/01/hire.png" },
    { title: "Strong Clientele", value: parseValue("1M+"), image: "https://linksuae.ae/wp-content/uploads/2025/01/data.png" },
  ];

  return (

    <>
      <Box sx={{ display: "flex" }}>

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            // p: 3,
            // ml: sidebarOpen ? `${drawerWidth}px` : 0,
            transition: "margin 0.3s ease-in-out",
            backgroundColor: secondaryColor,
            height: "100%",
            width: `calc(100% - ${sidebarOpen ? drawerWidth : 0}px)`,
          }}
        >

          <Navbar />


          <Box sx={{ position: "relative", width: "100%", height: "100vh", overflow: "hidden" }}>
            {/* Background Video */}


            {/* Content */}
            <Box
              className="Head"
              sx={{
                position: "relative",
                zIndex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                textAlign: "center",
                // backgroundColor: "rgba(0, 0, 0, 0.5)", // Optional overlay for better readability
              }}
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                onError={(e) => console.error("Video failed to load", e)}
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100%",
                  objectFit: "fill",
                  zIndex: "-1",
                }}
              >
                <source src="/images/Auto_Video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="header_data" style={{ padding: "125px 0", backgroundColor: "rgb(255 255 255 / 50%)", height: "100%", width: "100%" }}>
                <Container maxWidth="md" sx={{ padding: "40px 0" }}>
                  <Typography
                    variant="h3"
                    component="h1"
                    gutterBottom
                    sx={{ fontWeight: "bold", color: "#000000" }}
                  >
                    Enhance Your{" "}
                    <span style={{ color: primaryColor }}>Operations</span> with Expert{" "}
                    <span style={{ color: primaryColor }}>Staffing Solutions</span>: Get hired as a skilled professional across India
                  </Typography>
                  <Typography variant="body1" paragraph sx={{ color: "#000000" }}>
                    {/* Discover how our BPO & IT staffing agency in Noida connects you with top talent,
                    helping you hire skilled professionals for customer support, technical assistance,
                    and IT projects to ensure success in every endeavor. */}
                    Are you looking for your next career move? Browse our latest job openings, submit your resume, and
                    let our expert recruiters connect you with the right opportunities. We work closely with job seekers
                    to understand their skills, goals, and aspirations, ensuring the perfect job match.
                  </Typography>
                  <Button
                    variant="outlined"
                    href="/Services"
                    sx={{
                      mt: 2,
                      borderColor: primaryColor,
                      color: primaryColor,
                      "&:hover": {
                        backgroundColor: primaryColor,
                        color: secondaryColor,
                      },
                    }}

                  >
                    Get Started Today!
                  </Button>
                </Container>
              </div>
            </Box>
          </Box>


          <Box sx={{ bgcolor: secondaryColor, color: "black", p: 4 }}>
            <Grid container spacing={4} alignItems="center">
              {/* Text Section */}
              <Grid item xs={12} md={6}>
                <Typography variant="h4" sx={{ fontWeight: "bold", color: primaryColor }}>
                  Find the right job to grow your career
                  {/* <span style={{ fontWeight: "bold" }}>BPO and IT Staffing Services</span> in Delhi NCR */}
                </Typography>

                <List>
                  {[
                    {
                      text: "We are hiring for blue collar and white collar positions.",
                    },
                    {
                      text: "Helping Hands All Over India.",
                    },
                    // {
                    //   text: "Access a curated pool of vetted professionals in Noida, ideal for customer support, IT services, and business operations.",
                    // },
                  ].map((item, index) => (
                    <ListItem key={index}>
                      <ListItemIcon>
                        <CheckCircleIcon sx={{ color: primaryColor }} />
                      </ListItemIcon>
                      <Typography variant="body1" sx={{ color: "#ffffff" }}>
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
                          color: "#ffffff",
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


          <Box sx={{ py: 6, padding:"0 0 50px 0" }}>
            <Container>
              <Typography variant="h2" sx={{ color: primaryColor }} align="center" gutterBottom>
                What we do
              </Typography>
              <Typography variant="h6" sx={{ fontSize: "bold", color: primaryColor }} align="center" fontWeight="bold">
                “Great vision without great people is irrelevant”
              </Typography>
              <Typography align="center" sx={{ color: "#fff" }} paragraph>
                {/* We connect game-changing Organizations and Multi-national’s with top talent, specifically focusing on C Level Placement, covering over 60 Industries and helping clients across 23 countries.
                We support both contract and full-time requirements, covering a broad spectrum of industries like Recruitment for Accounting & Finance, Customer Services, Hospitality, and Transportation, etc.
                We advocate our client’s vision and environment to a highly selective market of resources. */}
                Employers
                Need to hire top talent? Our recruitment experts take the time to understand your company culture,
                business needs, and hiring goals to deliver candidates who align perfectly with your organization.
                Partner with us for efficient, high-quality hiring solutions.
              </Typography>
              <Grid container spacing={4} mt={3}>
                {services.map((service, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <Box
                      sx={{
                        p: 3,
                        textAlign: "center",
                        backgroundColor: "white",
                        borderRadius: "8px",
                        boxShadow: 3,
                        height: "250px",
                        transition: "transform 0.3s ease-in-out",
                        "&:hover": {
                          transform: "scale(1.05)", // Zoom in on hover
                        },
                      }}
                    >
                      <Image src={service.image} alt={service.title} width={80} height={80} />
                      <Typography variant="h5" color="primary" gutterBottom>
                        {service.title}
                      </Typography>
                      <Typography>{service.description}</Typography>
                    </Box>

                  </Grid>
                ))}
              </Grid>
            </Container>
          </Box>


          <Typography variant="h4" component="h2" sx={{ textAlign: "center", color: "#ffffff" }} gutterBottom>
            Our Area Of <strong style={{ color: primaryColor }}> Expertise.</strong>
          </Typography>

          <Grid item xs={12} container spacing={2}>
            <Grid item xs={12} md={12} sx={{ paddingRight: "20px" }}>
              {/* <Typography variant="body1" paragraph style={{ color: "#ffffff" }}>
                Freelancers of the highest caliber to support various roles for your event
                through our Hiring agency in Delhi NCR. Whether you need <strong style={{ color: primaryColor }}>pre-event
                  support, hostesses in Delhi NCR, or on-site personnel during the live phase</strong>,
                we ensure a flawless experience from beginning to end.
              </Typography> */}

              <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                  <List>
                    {/* <Grid container spacing={2}>
                      {roles.map((role, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}> 
                          <ListItem style={{ border: "solid 1px", marginRight: "5px" }}>
                            <ListItemIcon style={{ minWidth: "29px" }}>
                              <CheckCircleIcon style={{ maxWidth: "42px" }} color="primary" />
                            </ListItemIcon>
                            <ListItemText style={{ color: "#ffffff" }} primary={role} />
                          </ListItem>
                        </Grid>
                      ))}
                    </Grid> */}

                    <Grid container spacing={2}>
                      {roles.map((role, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                          <ListItem style={{ border: "solid 1px", marginRight: "5px", backgroundColor: "#1a1a1a", borderRadius: "8px" }}>
                            
                            <ListItemIcon style={{ minWidth: "50px" }}>
                              {role.icon}
                            </ListItemIcon>

                            {/* Role Name */}
                            <ListItemText style={{ color: "#ffffff" }} primary={role.name} />
                          </ListItem>
                        </Grid>
                      ))}
                    </Grid>
                  </List>
                </Grid>
              </Grid>


            </Grid>
          
          </Grid>


          <Box sx={{ margin: "50px 0 50px 0" }}>
            <Typography variant="h4" fontWeight="bold" sx={{ textAlign: "center" , color:"#fff" }} >
            Local <span style={{ color: primaryColor }}>Excellence.</span>
            </Typography>

            <Grid container spacing={2} justifyContent="center" sx={{ padding: 3 }}>
              {stats.map((stat, index) => (
                <Grid item key={index}>
                  <CounterCard title={stat.title} target={stat.value} />
                </Grid>
              ))}
            </Grid>
          </Box>

         

          <Box sx={{ margin: "20px 0 50px 0" }}>
            <Typography variant="h4" fontWeight="bold" sx={{ textAlign: "center" }} color={primaryColor}>
              <span style={{ color: primaryColor }}>Roadmap</span>
            </Typography>

            <Timeline sx={{ padding: 3 }}>
              {roadmapData.map((item, index) => (
                <TimelineItem key={index} sx={{ flexDirection: { xs: "column", md: "row" } }}>
                  {index % 2 === 0 ? (
                    <>
                      <TimelineContent sx={{ width: "100%", display: "flex", justifyContent: { xs: "center", md: "flex-start" } }}>
                        <Box display="block" maxWidth="100%" width="100%">
                          <Card sx={{ backgroundColor: item.color, color: "#ffffff", marginTop: 1, width: "100%" }}>
                            <CardContent>
                              <Typography variant="subtitle1" sx={{ fontWeight: "bold", textAlign: "center" }}>
                                {item.title}
                              </Typography>
                              {item.description.map((desc, i) => (
                                <Typography key={i} variant="body2" sx={{ marginTop: 1, color: "#ffffff", textAlign: "center" }}>
                                  {desc}
                                </Typography>
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
                      <TimelineContent sx={{ width: "100%", display: "flex", justifyContent: { xs: "center", md: "flex-end" } }}>
                        <Box display="block" maxWidth="100%" width="100%">
                          <Card sx={{ backgroundColor: item.color, color: "#ffffff", marginTop: 1, width: "100%" }}>
                            <CardContent>
                              <Typography variant="subtitle1" sx={{ fontWeight: "bold", textAlign: "center" }}>
                                {item.title}
                              </Typography>
                              {item.description.map((desc, i) => (
                                <Typography key={i} variant="body2" sx={{ marginTop: 1, color: "#ffffff", textAlign: "center" }}>
                                  {desc}
                                </Typography>
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
          <Typography variant="h4" fontWeight="bold" sx={{ textAlign: "center" , margin:"40px 0" }} color={primaryColor}>
              <span style={{ color: primaryColor }}>Our Clients</span>
            </Typography>
        
          <Box sx={{  backgroundColor:"#fff" }}>
            <Container>
           
              <Grid container spacing={2} justifyContent="center">
                {clients.map((logo, index) => (
                  <Grid item xs={12} sm={6} md={2} key={index}>
                    <Box display="flex" justifyContent="center" alignItems="center" p={2}>
                      <img src={logo} alt="Client Logo" style={{ maxWidth: "70px", height: "70px" }} />
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Container>
          </Box>

          {/* backgroundImage: 'url("/images/interview.jpg")', */}
          <Box sx={{ padding: "50px 10px" }}>

            <Grid container spacing={4} alignItems="center">
              {/* Left Section - Contact Info */}
              <Grid item xs={12} md={6}>
                <Paper elevation={3} sx={{ p: 3, backgroundColor: primaryColor, color: secondaryColor }}>
                  <Typography variant="h4" fontWeight="bold" style={{ color: "#ffffff" }}>
                    Contact <span style={{ fontWeight: "lighter" }}>Information</span>
                  </Typography>
                  <Box display="flex" alignItems="center" mt={2}>
                    <EmailIcon sx={{ mr: 1 }} />
                    <Typography variant="body1" style={{ color: "#ffffff" }}>
                      <strong>Email:</strong> <a href="mailto:humans@Career Cruise Consulting-me.com" style={{ color: "#ffffff" }}>humans@Career Cruise Consulting-me.com</a>
                    </Typography>
                  </Box>
                  <Box display="flex" alignItems="center" mt={2}>
                    <LocationOnIcon sx={{ mr: 1 }} />
                    <Typography variant="body1" style={{ color: "#ffffff" }}>
                      <strong>Address:</strong> Tower B-141, 1st Floor, iThum Tower, Noida , UP 201301
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
                    <Grid container spacing={2}>

                      <Grid item xs={12} sm={6}>
                        <TextField fullWidth label="First Name" name="firstName" value={formData.firstName} onChange={handleChange} variant="outlined" margin="normal" required />

                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField fullWidth label="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} variant="outlined" margin="normal" required />

                      </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <TextField fullWidth label="Email" name="email" type="email" value={formData.email} onChange={handleChange} variant="outlined" margin="normal" required />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField fullWidth label="Phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} variant="outlined" margin="normal" required />
                      </Grid>
                    </Grid>
                    <TextField fullWidth label="Organization Name" name="organizationName" value={formData.organizationName} onChange={handleChange} variant="outlined" margin="normal" />
                    <TextField fullWidth label="How can we help you?" name="message" value={formData.message} onChange={handleChange} variant="outlined" multiline rows={4} margin="normal" />
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
