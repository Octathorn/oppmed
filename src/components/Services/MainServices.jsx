import React from "react";
import {
  Box,
  Container,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import '../../css/mainservice.css'

const MainServices = () => {
  const services = [
    "Skeletal-Muscular",
    "Psychological",
    "Extra-Musculoskeletal",
    "Contaminate Object",
  ];

  return (
    <Box className="services-section">
      <Container maxWidth="lg">
        <div className="services-wrapper">
          {/* Left Image */}
          <div className="services-image">
            <img src="src/assets/images/4394320.jpg" alt="Our Services" />
          </div>

          {/* Right Content */}
          <div className="services-content">
            <Typography
              variant="subtitle2"
              className="services-subtitle"
              gutterBottom
            >
              OPPORTUNITY MEDICAL SERVICES
            </Typography>

            <Typography variant="h3" className="services-title">
              Our Services
            </Typography>

            <Typography variant="body1" className="services-description">
              Comprehensive Care for Veterans’ Physical and Mental Health.
              Face-to-Face Assessments and Precise Support for Disability
              Benefits.
            </Typography>

            <div className="services-list">
              {services.map((service, index) => (
                <List key={index} disablePadding>
                  <ListItem disableGutters>
                    <ListItemIcon className="services-icon">
                      <ArrowDownwardIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary={service}
                      primaryTypographyProps={{
                        fontSize: "16px",
                        fontWeight: 500,
                      }}
                    />
                  </ListItem>
                </List>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Box>
  );
};

export default MainServices;
