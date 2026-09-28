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
import { useNavigate } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const HomeFooter = () => {
  const navigate = useNavigate();

  return (
    <Box
      component="footer"
      sx={{
        width: "100vw",
        bgcolor: "#1a56db",
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
              src="/logo.png"
              alt="Opportunity Medical"
              sx={{ width: 120, mb: 2 }}
            />

            <Typography variant="body2" sx={{ mb: 1 }}>
              Copyright © 2025 Opportunity Medical | Powered by Opportunity
              Medical
            </Typography>

            <Box>
              <IconButton
                color="inherit"
                component="a"
                href="https://www.facebook.com/opportunitymedical"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Opportunity Medical on Facebook (opens in a new tab)"
              >
                <FacebookIcon />
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
              <Link 
                component="button" 
                onClick={() => navigate('/')} 
                color="inherit" 
                underline="hover"
                sx={{ textAlign: 'left', cursor: 'pointer' }}
              >
                Home
              </Link>
              <Link 
                component="button" 
                onClick={() => navigate('/services')} 
                color="inherit" 
                underline="hover"
                sx={{ textAlign: 'left', cursor: 'pointer' }}
              >
                Services
              </Link>
              <Link 
                component="button" 
                onClick={() => navigate('/contact')} 
                color="inherit" 
                underline="hover"
                sx={{ textAlign: 'left', cursor: 'pointer' }}
              >
                Contact Us
              </Link>
              <Link 
                component="button" 
                onClick={() => navigate('/careers')} 
                color="inherit" 
                underline="hover"
                sx={{ textAlign: 'left', cursor: 'pointer' }}
              >
                Careers
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
                1494 S. Robertson, Suite #100 Los Angeles CA 90035
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" mb={1} gap={1}>
              <PhoneIcon fontSize="small" />
              <Link
                href="tel:424-208-7434"
                color="inherit"
                underline="hover"
                variant="body2"
              >
                424-208-7434
              </Link>
            </Box>
            <Box display="flex" alignItems="center" gap={1}>
              <EmailIcon fontSize="small" />
              <Link
                href="mailto:info@oppmed.com"
                color="inherit"
                underline="hover"
                variant="body2"
              >
                info@oppmed.com
              </Link>
            </Box>
          </Grid>
        </Grid>

        {/* Bottom bar */}
        <Box textAlign="center" mt={4}>
          <Box display="flex" justifyContent="center" gap={3} mb={2} flexWrap="wrap">
            <Link
              component="button"
              onClick={() => navigate('/terms-privacy#terms')}
              color="inherit"
              underline="always"
              sx={{ cursor: 'pointer', fontSize: '0.875rem', color: '#ffffff' }}
            >
              Terms of Use
            </Link>
            <Link
              component="button"
              onClick={() => navigate('/terms-privacy#privacy')}
              color="inherit"
              underline="always"
              sx={{ cursor: 'pointer', fontSize: '0.875rem', color: '#ffffff' }}
            >
              Privacy Policy
            </Link>
          </Box>
          <Typography variant="body2">
            Copyright © 2025 Opportunity Medical
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default HomeFooter;
