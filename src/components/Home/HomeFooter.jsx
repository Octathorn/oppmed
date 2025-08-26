import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const HomeFooter = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        bgcolor: "#4285f4",
        color: "white",
        pt: 6,
        pb: 2,
        mt: 0,
        transform: "translateX(-50%)",
        marginLeft: "50%"
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} justifyContent="center">
          {/* Logo + Copyright + Socials */}
          <Grid item xs={12} md={4} textAlign={{ xs: "center", md: "left" }}>
            <Box
              component="img"
              src="src\assets\logo.png"
              alt="Opportunity Medical"
              sx={{ width: 120, mb: 2 }}
            />

            <Typography variant="body2" sx={{ mb: 1 }}>
              Copyright © 2025 Opportunity Medical | Powered by Opportunity
              Medical
            </Typography>

            <Box>
              <IconButton color="inherit">
                <FacebookIcon />
              </IconButton>
              <IconButton color="inherit">
                <TwitterIcon />
              </IconButton>
              <IconButton color="inherit">
                <InstagramIcon />
              </IconButton>
              <IconButton color="inherit">
                <YouTubeIcon />
              </IconButton>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={4} textAlign={{ xs: "center", md: "left" }}>
            <Typography variant="h6" sx={{ mb: 1, fontWeight: "bold" }}>
              Quick Links
            </Typography>
            <Divider sx={{ bgcolor: "white", opacity: 0.5, mb: 2 }} />

            <Box display="flex" flexDirection="column" gap={1}>
              <Link href="#" color="inherit" underline="hover">
                Home
              </Link>
              <Link href="#" color="inherit" underline="hover">
                Services
              </Link>
              <Link href="#" color="inherit" underline="hover">
                Contact Us
              </Link>
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={4} textAlign={{ xs: "center", md: "left" }}>
            <Typography variant="h6" sx={{ mb: 1, fontWeight: "bold" }}>
              Contact Info
            </Typography>
            <Divider sx={{ bgcolor: "white", opacity: 0.5, mb: 2 }} />

            <Box display="flex" alignItems="center" mb={1} gap={1}>
              <LocationOnIcon fontSize="small" />
              <Typography variant="body2">
                1494 S. Robertson, Suite #203 Los Angeles CA 90035
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" mb={1} gap={1}>
              <PhoneIcon fontSize="small" />
              <Typography variant="body2">424-208-7434</Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={1}>
              <EmailIcon fontSize="small" />
              <Typography variant="body2">office@oppmed.local</Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Bottom bar */}
        <Box textAlign="center" mt={4}>
          <Typography variant="body2">
            Copyright © 2025 Opportunity Medical
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default HomeFooter;