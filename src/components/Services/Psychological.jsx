import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import "../../css/Psychological.css";

const Psychological = () => {
  return (
    <Box className="psych-section">
      <Container maxWidth="lg">
        <div className="psych-wrapper">
          {/* Left Content */}
          <div className="psych-content">
            <Typography variant="h4" className="psych-number">
              03.
            </Typography>

            <Typography variant="h4" className="psych-title">
              Psychological
            </Typography>

            <Typography variant="body1" className="psych-description">
              We understand the complexities of mental health.
            </Typography>

            <Typography variant="body1" className="psych-description">
              Our services cater to a range of psychological conditions,
              including post-traumatic stress disorder (PTSD), providing
              comprehensive support to Veterans in need.
            </Typography>

            <Button variant="outlined" className="psych-button">
              Report a Case
            </Button>
          </div>

          {/* Right Image */}
          <div className="psych-image">
            <img
              src="src\assets\images\10610.jpg" 
              alt="Psychological Service"
            />
          </div>
        </div>
      </Container>
    </Box>
  );
};

export default Psychological;
