import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../../css/FaceToFace.css";

const FaceToFace = () => {
  const navigate = useNavigate();

  return (
    <Box className="face-section">
      <Container maxWidth="lg">
        <div className="face-wrapper">
          {/* Left Content */}
          <div className="face-content">
            <Typography variant="h4" component="div" className="face-number">
              04.
            </Typography>

            <Typography variant="h4" component="h2" className="face-title">
              Face-to-Face Assessments
            </Typography>

            <Typography variant="body1" className="face-description">
              Opportunity Medical offers personalized, in-office assessments for
              Veterans.
            </Typography>

            <Typography variant="body1" className="face-description">
              Our certified medical professionals provide one-on-one disability
              medical evaluations in a private and comfortable setting, ensuring
              every Veteran receives the attention and care they deserve. This
              personalized approach allows us to address each individual’s
              unique needs, similar to how betano italia tailors its services
              for optimal user satisfaction.
            </Typography>

            <Button variant="outlined" className="face-button" onClick={() => navigate('/contact')}>
              Report a Case
            </Button>
          </div>

          {/* Right Image */}
          <div className="face-image">
            <img
              src="/images/5005356.jpg"
              alt="Face-to-Face Assessments"
            />
          </div>
        </div>
      </Container>
    </Box>
  );
};

export default FaceToFace;
