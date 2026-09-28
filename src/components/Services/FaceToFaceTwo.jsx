import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../../css/FaceToFaceTwo.css";

const FaceToFaceTwo = () => {
  const navigate = useNavigate();

  return (
    <Box className="facetwo-section">
      <Container maxWidth="lg">
        <div className="facetwo-wrapper">
          {/* Left Content */}
          <div className="facetwo-content">
            <Typography variant="h4" component="div" className="facetwo-number">
              07.
            </Typography>

            <Typography variant="h4" component="h2" className="facetwo-title">
              Face-to-Face
            </Typography>

            <Typography variant="body1" className="facetwo-description">
              Opportunity Medical is offering in-office assessments aimed at
              aiding Veterans through a one-on-one encounter with a certified
              medical professional in a private environment for the purpose of
              conducting their disability medical evaluation.
            </Typography>

            <Button variant="outlined" className="facetwo-button" onClick={() => navigate('/contact')}>
              Report a Case
            </Button>
          </div>

          {/* Right Image */}
          <div className="facetwo-image">
            <img
              src="/images/meeting-1.png"
              alt="Face-to-Face Assessment"
            />
          </div>
        </div>
      </Container>
    </Box>
  );
};

export default FaceToFaceTwo;
