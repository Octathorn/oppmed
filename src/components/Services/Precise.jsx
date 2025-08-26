import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import "../../css/Precise.css";

const Precise = () => {
  return (
    <Box className="precise-section">
      <Container maxWidth="lg">
        <div className="precise-wrapper">
          {/* Left Content */}
          <div className="precise-content">
            <Typography variant="h4" className="precise-number">
              08.
            </Typography>

            <Typography variant="h4" className="precise-title">
              Precise
            </Typography>

            <Typography variant="body1" className="precise-description">
              Opportunity Medical delivers dependable, precise, and expedient
              assistance to Veterans in need of in-person evaluations for their
              disability benefits questionnaires. Our goal is to become the top
              choice among medical providers for administering assessments
              related to disability benefits.
            </Typography>

            <Button variant="outlined" className="precise-button">
              Report a Case
            </Button>
          </div>

          {/* Right Image */}
          <div className="precise-image">
            <img
              src="src\assets\images\7206784 (1).jpg"
              alt="Precise Assessment"
            />
          </div>
        </div>
      </Container>
    </Box>
  );
};

export default Precise;
