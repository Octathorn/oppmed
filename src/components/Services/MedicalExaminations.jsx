import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../../css/MedicalExaminations.css";

const MedicalExaminations = () => {
  const navigate = useNavigate();

  return (
    <Box className="exam-section">
      <Container maxWidth="lg">
        <div className="exam-wrapper">
          {/* Left Content */}
          <div className="exam-content">
            <Typography variant="h4" component="div" className="exam-number">
              05.
            </Typography>

            <Typography variant="h4" component="h2" className="exam-title">
              Medical Examinations
            </Typography>

            <Typography variant="body1" className="exam-description">
              Musculoskeletal disabilities comprise of bones, muscles, tendons,
              ligaments, and various soft tissues, all operating in unison to
              uphold your body's load and facilitate your mobility.
            </Typography>

            <Typography variant="body1" className="exam-description">
              Ailments, illnesses, and the natural aging process can lead to
              discomfort, rigidity, and impairments in mobility and bodily
              operations.
            </Typography>

            <Button variant="outlined" className="exam-button" onClick={() => navigate('/contact')}>
              Report a Case
            </Button>
          </div>

          {/* Right Image */}
          <div className="exam-image">
            <img
              src="/images/aaaa-768x525.png"
              alt="Medical Examinations"
            />
          </div>
        </div>
      </Container>
    </Box>
  );
};

export default MedicalExaminations;
