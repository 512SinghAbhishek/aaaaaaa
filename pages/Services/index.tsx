// import React, { useState } from "react";
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   List,
//   ListItem,
//   ListItemText,
//   MenuItem,
//   TextField,
//   Paper,
//   Container,
//   Link,
//   Box,
//   Button,
//   ListItemIcon,
//   IconButton, Card, CardContent, Avatar, Grid
// } from "@mui/material";
// import axios from "axios";
// import MenuIcon from "@mui/icons-material/Menu";
// import Navbar from "../../components/Layout/Navbar";

// const drawerWidth = 240;
// const primaryColor = "#008acb";
// const secondaryColor = "#000000";

// function index() {
//   const [sidebarOpen, setSidebarOpen] = useState(true);

//   // Toggle Sidebar
//   const handleToggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };
//   const menuItems = [
//     { text: "Home", route: "/" },
//     { text: "About Us", route: "/About" },
//     { text: "Services", route: "/Services" },
//     { text: "Contact", route: "/contact" },
//   ];

//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     contactNum: "",
//     applyFor: "",
//     currentCTC: "",
//     expectedCTC: "",
//     noticePeriod: "",
//     location: "",
//     currentLocation: "",
//     preferredLocation: "",
//     mode: "",
//     totalExperience: "",
//     expertise: "",
//     experience: "",
//     clients: "",
//     successfulPlacements: ""
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!formData.firstName || !formData.lastName || !formData.email) {
//       alert("Please fill all required fields.");
//       return;
//     }
//   // alert(formData)
//     try {
//       // const response = await axios.post(`https://carrerapi-production.up.railway.app/api/form`, formData);
//       const response = await axios.post(`xyz/form`, formData);

//       alert("Application submitted successfully!");

//     } catch (error) {
//       alert("Error submitting application");
//     }
//   };



//   return (
//     <div>
//       {/* <Box
//         sx={{
//           width: sidebarOpen ? drawerWidth : 0,
//           overflow: "hidden",
//           transition: "width 0.3s ease-in-out",
//           backgroundColor: primaryColor,
//           color: secondaryColor,
//           height: "100%",
//           position: "fixed",
//           left: 0,
//           top: 0,
//           paddingTop: "64px", // To avoid overlap with AppBar
//         }}
//       >
//         <List>
//           {menuItems.map(({ text, route }) => (
//             <ListItem key={text} component={Link} href={route}>
//               <ListItemText sx={{ color: "#fff" }} primary={text} />
//             </ListItem>
//           ))}
//         </List>
//       </Box> */}

//       {/* Main Content */}
//       <Box
//         component="main"
//         sx={{
//           flexGrow: 1,
//           // p: 3,
//           // ml: sidebarOpen ? `${drawerWidth}px` : 0,
//           transition: "margin 0.3s ease-in-out",
//           backgroundColor: secondaryColor,
//           height: "100%",
//           // width: `calc(100% - ${sidebarOpen ? drawerWidth : 0}px)`,
//         }}
//       >
//      <Navbar />

//         <Box sx={{ backgroundColor: secondaryColor, padding: 3, borderRadius: 2 }}>
//           <Typography variant="h4" sx={{ color: primaryColor, marginBottom: 2 }}>Apply for Job</Typography>
//           <form onSubmit={handleSubmit}>
//             <Grid container spacing={2}>
//               <Grid item xs={6}><TextField fullWidth label="First Name" name="firstName" onChange={handleChange} /></Grid>
//               <Grid item xs={6}><TextField fullWidth label="Last Name" name="lastName" onChange={handleChange} /></Grid>
//               <Grid item xs={6}><TextField fullWidth label="Email" name="email" type="email" onChange={handleChange} /></Grid>
//               <Grid item xs={6}><TextField fullWidth label="Contact Number" name="contactNum" onChange={handleChange} /></Grid>
//               <Grid item xs={12}><TextField fullWidth label="Apply for Profile" name="applyFor" onChange={handleChange} /></Grid>
//               <Grid item xs={6}><TextField fullWidth label="Current CTC" name="currentCTC" onChange={handleChange} /></Grid>
//               <Grid item xs={6}><TextField fullWidth label="Expected CTC" name="expectedCTC" onChange={handleChange} /></Grid>
//               <Grid item xs={6}><TextField fullWidth label="Notice Period" name="noticePeriod" onChange={handleChange} /></Grid>
//               <Grid item xs={6}><TextField fullWidth label="Current Location" name="currentLocation" onChange={handleChange} /></Grid>
//               <Grid item xs={6}><TextField fullWidth label="Preferred Location" name="preferredLocation" onChange={handleChange} /></Grid>
//               <Grid item xs={6}>
//                 <TextField select fullWidth label="Mode" name="mode" onChange={handleChange}>
//                   <MenuItem value="Work from Home">Work from Home</MenuItem>
//                   <MenuItem value="Work from Office">Work from Office</MenuItem>
//                   <MenuItem value="Freelance">Freelance</MenuItem>
//                   <MenuItem value="Hybrid">Hybrid</MenuItem>
//                 </TextField>
//               </Grid>
//               <Grid item xs={6}><TextField fullWidth label="Total Experience" name="totalExperience" onChange={handleChange} /></Grid>
//               <Grid item xs={12}><TextField fullWidth label="Expertise" name="expertise" onChange={handleChange} /></Grid>
//               <Grid item xs={6}><TextField fullWidth label="Experience" name="experience" onChange={handleChange} /></Grid>
//               <Grid item xs={6}><TextField fullWidth label="Clients" name="clients" onChange={handleChange} /></Grid>
//               <Grid item xs={6}><TextField fullWidth label="Successful Placements" name="successfulPlacements" onChange={handleChange} /></Grid>
//             </Grid>
//             <Button type="submit" variant="contained" sx={{ backgroundColor: primaryColor, marginTop: 2 }}>Submit</Button>
//           </form>
//         </Box>


//       </Box>
//     </div>
//   )
// }

// export default index


import React, { useState } from "react";
import {
  Typography,
  MenuItem,
  TextField,
  Box,
  Button,
  Grid
} from "@mui/material";
import axios from "axios";
import Navbar from "../../components/Layout/Navbar";

const primaryColor = "#008acb";
const secondaryColor = "#000000"; // Black background

function Index() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNum: "",
    applyFor: "",
    currentCTC: "",
    expectedCTC: "",
    noticePeriod: "",
    currentLocation: "",
    preferredLocation: "",
    mode: "",
    totalExperience: "",
    expertise: "",
    experience: "",
    clients: "",
    successfulPlacements: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email) {
      alert("Please fill all required fields.");
      return;
    }
    try {
      // const response = await axios.post(`https://carrerapi-production.up.railway.app/api/form`, formData);
      const response = await axios.post(`xyz/form`, formData);

      alert("Application submitted successfully!");
    } catch (error) {
      alert("Error submitting application");
    }
  };

  return (
    <div>
      <Box component="main" sx={{ flexGrow: 1, backgroundColor: secondaryColor, height: "100%" }}>
        <Navbar />

        <Box sx={{ backgroundColor: secondaryColor, padding: 3, borderRadius: 2, color: "#ffffff" }}>
          <Typography variant="h4" sx={{ color: primaryColor, marginBottom: 2 }}>
            Apply for Job
          </Typography>

          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              {[
                { label: "First Name", name: "firstName" },
                { label: "Last Name", name: "lastName" },
                { label: "Email", name: "email", type: "email" },
                { label: "Contact Number", name: "contactNum" },
                { label: "Apply for Profile", name: "applyFor" },
                { label: "Current CTC", name: "currentCTC" },
                { label: "Expected CTC", name: "expectedCTC" },
                { label: "Notice Period", name: "noticePeriod" },
                { label: "Current Location", name: "currentLocation" },
                { label: "Preferred Location", name: "preferredLocation" },
                { label: "Total Experience", name: "totalExperience" },
                { label: "Expertise", name: "expertise" },
                { label: "Experience", name: "experience" },
                { label: "Clients", name: "clients" },
                { label: "Successful Placements", name: "successfulPlacements" }
              ].map(({ label, name, type = "text" }, index) => (
                <Grid item xs={12} md={6} key={name}>
                  <TextField
                    fullWidth
                    label={label}
                    name={name}
                    type={type}
                    onChange={handleChange}
                    InputLabelProps={{ style: { color: "#ffffff" } }}
                    InputProps={{ style: { color: "#ffffff" } }}
                    sx={{ backgroundColor: "#333", borderRadius: 1 }}
                  />
                </Grid>
              ))}

              {/* Mode Dropdown */}
              <Grid item xs={12} md={6}>
                <TextField
                  select
                  fullWidth
                  label="Mode"
                  name="mode"
                  onChange={handleChange}
                  InputLabelProps={{ style: { color: "#ffffff" } }}
                  sx={{ backgroundColor: "#333", borderRadius: 1 }}
                >
                  {["Work from Home", "Work from Office", "Freelance", "Hybrid"].map((option) => (
                    <MenuItem key={option} value={option} sx={{ color: "#ffffff", backgroundColor: "#333" }}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
            </Grid>

            <Button type="submit" variant="contained" sx={{ backgroundColor: primaryColor, marginTop: 2, width: "100%" }}>
              Submit
            </Button>
          </form>

        </Box>
      </Box>
    </div>
  );
}

export default Index;
