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
  useMediaQuery
} from "@mui/material";
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from "@mui/lab";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Flip } from "react-awesome-reveal";
import BusinessIcon from "@mui/icons-material/Business";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import GroupIcon from "@mui/icons-material/Group";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import axios from "axios";

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
    color: "#D32F2F",
    image: "onboarding.png",
    description: [
      "Accept the job offer and sign the contract.",
      "Attend onboarding sessions and training programs.",
      "Get assigned to a team and start your professional journey."
    ]
  }
];


const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);


  const items = [
    { type: "image", src: "/images/build recruitment business.jpeg" },
    { type: "image", src: "/images/employment-recruitment-business-company-office-260nw-1757603684.webp" },
    { type: "image", src: "/images/how-to-choose-a-recruiting-agency.webp" },
    { type: "image", src: "/images/job-candidate-selection-process-260nw-331128260.webp" }
  ];

  const testimonials = [
    {
      name: "Ahmed Khalid",
      role: "CEO of Horizon Technologies",
      quote:
        "Partnering with Ahmed Khalid has transformed our customer support operations. Their 24/7 multilingual assistance and AI-driven chatbots have significantly improved response times and customer satisfaction. Their ability to scale with our business needs has been a game-changer",
    },
    {
      name: "Fatima Al Mansoori",
      role: "Operations Director at Gulf Innovations",
      quote:
        "We needed a reliable IT partner to streamline our cloud migration and cybersecurity processes. The expertise and proactive approach of Fatima Al Mansoori have not only enhanced our IT infrastructure but also ensured data security and compliance. Their customized solutions have given us a competitive edge in the market.",
    },
    {
      name: "Sultan Bin Zayed",
      role: "Founder of Zenith Construction",
      quote:
        "Outsourcing our back-office operations to Sultan Bin Zayed has reduced our operational costs by 40% while increasing process accuracy. Their use of RPA (Robotic Process Automation) and AI analytics has optimized our workflow, allowing us to focus on business growth",
    },
    {
      name: "Laila Abbas",
      role: "Managing Director at Al Noor Enterprises",
      quote:
        "From IT helpdesk support to cloud-based solutions,Laila Abbas has been instrumental in ensuring smooth IT operations across our global offices. Their team is highly responsive and committed to delivering innovative solutions that align with our digital strategy",
    },
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
      // const response = await axios.post("https://carrerapi-production.up.railway.app/api/contact", formData);
      const response = await axios.post("xyz/contact", formData);

      alert(response.data.message);
      setFormData({ fullName: "", email: "", phone: "", organizationName: "", message: "" });
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
    // { title: "Total Clients", value: 500 },
    // { title: "Total Employees", value: 5845 },
    // { title: "Total Projects", value: 45 },
    { title: "Years Experience", value: parseValue("20+"), image: "https://linksuae.ae/wp-content/uploads/2025/01/exp.png" },
    { title: "Dedicated Team", value: parseValue("100+"), image: "https://linksuae.ae/wp-content/uploads/2025/01/team.png" },
    { title: "Hired Via Links", value: parseValue("40,000+"), image: "https://linksuae.ae/wp-content/uploads/2025/01/hire.png" },
    { title: "DataBase", value: parseValue("1M+"), image: "https://linksuae.ae/wp-content/uploads/2025/01/data.png" },
    { title: "Compliance", value: parseValue("100%"), image: "https://linksuae.ae/wp-content/uploads/2025/01/comp.png" }
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
          {/* sx={{ backgroundImage: 'url("/images/r1.jpg")' }} */}
          {/* <Box className="Head" >
            
            <Container maxWidth="md" sx={{ padding: "40px 0" }}>
              <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: "#ffffff" }}>
                Enhance Your <span style={{ color: primaryColor }}>Operations</span> with Expert <span style={{ color: primaryColor }}>Staffing Solutions</span>: Hire Skilled Professionals for BPO & IT Services in Delhi NCR
              </Typography>
              <Typography variant="body1" paragraph style={{ color: "#ffffff" }}>
                Discover how our BPO & IT staffing agency in Noida connects you with top talent, helping you hire skilled professionals for customer support, technical assistance, and IT projects to ensure success in every endeavor.
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
          </Box> */}

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
                height: "90%",
                objectFit: "cover",
                zIndex: "-1",
              }}
            >
              <source src="/images/Auto_Video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
              <Container maxWidth="md" sx={{ padding: "40px 0" }}>
                <Typography
                  variant="h3"
                  component="h1"
                  gutterBottom
                  sx={{ fontWeight: "bold", color: "#000000" }}
                >
                  Enhance Your{" "}
                  <span style={{ color: primaryColor }}>Operations</span> with Expert{" "}
                  <span style={{ color: primaryColor }}>Staffing Solutions</span>: Hire Skilled
                  Professionals for BPO & IT Services in Delhi NCR
                </Typography>
                <Typography variant="body1" paragraph sx={{ color: "#000000" }}>
                  Discover how our BPO & IT staffing agency in Noida connects you with top talent,
                  helping you hire skilled professionals for customer support, technical assistance,
                  and IT projects to ensure success in every endeavor.
                </Typography>
                <Button
                  variant="outlined"
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
            </Box>
          </Box>


          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Toolbar />
            <Typography variant="h4" sx={{ color: primaryColor, fontWeight: "bold" }}>
              Staffing Services in Delhi NCR
            </Typography>
            <Typography variant="body1" sx={{ mt: 2, color: "#ffffff" }}>
              ✔ Temporary Staffing: Skilled personnel for front and back office operations, sourced through our trusted staffing agency.
            </Typography>
            <Typography variant="body1" sx={{ mt: 1, color: "#ffffff" }}>
              ✔ End-to-End Management: From sourcing to execution, our Noida-based agency covers every detail.
            </Typography>
            <Typography variant="body1" sx={{ mt: 1, color: "#ffffff" }}>
              ✔ Freelancer Selection: Access a curated pool of vetted professionals perfect for any requirement.
            </Typography>

          </Box>





          <Box sx={{ bgcolor: secondaryColor, color: "black", p: 4 }}>
            <Grid container spacing={4} alignItems="center">
              {/* Text Section */}
              <Grid item xs={12} md={6}>
                <Typography variant="h4" sx={{ fontWeight: "bold", color: primaryColor }}>
                  Comprehensive <span style={{ fontWeight: "bold" }}>BPO and IT Staffing Services</span> in Delhi NCR
                </Typography>

                <List>
                  {[
                    {
                      text: "Skilled professionals for front-office and back-office operations, sourced through our trusted staffing agency.",
                    },
                    {
                      text: "From talent acquisition to seamless execution, our Noida-based staffing agency handles every detail.",
                    },
                    {
                      text: "Access a curated pool of vetted professionals in Noida, ideal for customer support, IT services, and business operations.",
                    },
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


          <Box sx={{ margin: "50px 0" }}>
            <Typography variant="h4" fontWeight="bold" sx={{ textAlign: "center" }} color={primaryColor}>
              What Our Clients Are <span style={{ color: primaryColor }}>Saying.</span>
            </Typography>

            {/* <Swiper
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
            </Swiper> */}
            <Swiper
              modules={[Pagination, Autoplay]}
              slidesPerView={isMobile ? 1 : isTablet ? 2 : 3}
              spaceBetween={isMobile ? 10 : 30}
              autoplay={{ delay: 3000 }}
              pagination={{ clickable: true }}
              style={{ padding: "20px", maxWidth: "90%", margin: "auto" }}
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <Card
                    sx={{
                      backgroundColor: secondaryColor,
                      color: "#ffffff",
                      borderRadius: "10px",
                      height: "500px",
                      boxShadow: 3,
                    }}
                  >
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



          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Toolbar />
            <Typography variant="h4" sx={{ color: primaryColor, fontWeight: "bold", textAlign: "center" }}>
              Who We Are ?
            </Typography>
            <Typography variant="body1" sx={{ mt: 2, color: "#ffffff" }}>
              At <span style={{ color: primaryColor, fontWeight: "bold" }}>Career Cruise Consulting</span>, we are a leading IT and BPO solutions provider, committed to delivering cutting-edge technology and business process outsourcing services. With a passion for innovation and excellence, we empower businesses worldwide by optimizing operations, enhancing customer experiences, and driving digital transformation.
            </Typography>
            <br />
            <Typography variant="body1" sx={{ mt: 1, color: "#ffffff" }}>
              ✔ <span style={{ color: primaryColor, fontWeight: "bold" }}> IT Solutions –</span>From software development and cloud computing to cybersecurity and AI-driven solutions, we offer end-to-end IT services that drive growth and efficiency.
            </Typography>
            <Typography variant="body1" sx={{ mt: 1, color: "#ffffff" }}>
              ✔ <span style={{ color: primaryColor, fontWeight: "bold" }}>BPO Services – </span> Our business process outsourcing solutions, including customer support, back-office operations, data management, and HR outsourcing, ensure seamless business functions with top-tier quality and efficiency.
            </Typography>
            <Typography variant="body1" sx={{ mt: 1, color: "#ffffff" }}>
              ✔ <span style={{ color: primaryColor, fontWeight: "bold" }}>Digital Transformation –</span>We help businesses transition into the digital age with automation, AI, and customized tech solutions that streamline workflows and improve productivity.
            </Typography>
            <Typography variant="body1" sx={{ mt: 1, color: "#ffffff" }}>
              ✔ <span style={{ color: primaryColor, fontWeight: "bold" }}>Customer-Centric Approach – </span>Our focus is on delivering exceptional customer experiences through AI-powered chat support, multilingual call centers, and personalized service models.
            </Typography>

          </Box>


          {/* <Box sx={{ margin: "20px 0 50px 0" }}>
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
          </Box> */}

          <Box sx={{ margin: "20px 0 50px 0" }}>
            <Typography variant="h4" fontWeight="bold" sx={{ textAlign: "center" }} color={primaryColor}>
              What Our Clients Are <span style={{ color: primaryColor }}>Saying.</span>
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
              Links Consultant Outsourcing <span style={{ color: primaryColor }}>Solutions.</span>
            </Typography>
            <Box display="flex" justifyContent="space-around" flexWrap="wrap" gap={2}>

              <FlipBox
                icon={<BusinessIcon fontSize="large" color="primary" />}
                title="Contractual Hiring"
                description=" IT sector, contractual hiring is crucial for project-based work, software development, cybersecurity, and cloud computing. "
              />
              <FlipBox
                icon={<CalendarTodayIcon fontSize="large" color="primary" />}
                title="Permanent Staffing"
                description="Fuel Long-Term Success with Handpicked Permanent Talent, we build future-ready teams."
              />
              <FlipBox
                icon={<GroupIcon fontSize="large" color="primary" />}
                title="HR Outsourcing"
                description="Our dynamic HR outsourcing solutions are crafted to simplify workforce management."
              />

              <FlipBox
                icon={<GroupIcon fontSize="large" color="primary" />}
                title="Part Time Outsourcing"
                description="Part-Time outsourcing has become a game-changer for businesses in both the BPO (Business Process Outsourcing) and IT sectors. "
              />
            </Box>
          </Box>
          <Box sx={{ margin: "20px 0 50px 0" }}>
            <Typography variant="h4" fontWeight="bold" sx={{ textAlign: "center" }} color={primaryColor}>
              <span style={{ color: primaryColor }}>Roadmap</span>
            </Typography>
            <Timeline sx={{ padding: 3 }}>
              {roadmapData.map((item, index) => (
                <TimelineItem key={index}>
                  {index % 2 === 0 ? (
                    <>
                      <TimelineContent>
                        <Box display="inline-block" maxWidth={400}>
                          <Card sx={{ backgroundColor: item.color, color: "#ffffff", marginTop: 1 }}>
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
                      <TimelineContent>
                        <Box display="inline-block" maxWidth={400}>
                          <Card sx={{ backgroundColor: item.color, color: "#ffffff", marginTop: 1 }}>
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
                      <strong>Address:</strong> Office Bldg, Office 307 0136, Noida Investment Park, Noida
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
