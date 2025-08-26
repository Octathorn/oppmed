import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import "../../css/Musculoskeletal.css";

const Musculoskeletal = () => {
  return (
    <Box className="musculo-section">
      <Container maxWidth="lg">
        <div className="musculo-wrapper">
          {/* Left Content */}
          <div className="musculo-content">
            <Typography variant="h4" className="musculo-number">
              02.
            </Typography>

            <Typography variant="h4" className="musculo-title">
              Extra-Musculoskeletal
            </Typography>

            <Typography variant="body1" className="musculo-description">
              The extra-musculoskeletal realm encompasses aspects beyond bones,
              muscles, tendons, ligaments, or soft tissues.
            </Typography>

            <Typography variant="body1" className="musculo-description">
              This pertains to pain originating from internal organs, such as
              those caused by conditions like scarring, arthritis, gout, or
              erectile dysfunction (E.D.).
            </Typography>

            <Button variant="outlined" className="musculo-button">
              Report a Case
            </Button>
          </div>

          {/* Right Image */}
          <div className="musculo-image">
            <img
              src="/images/7206784.jpg" 
              alt="Extra-Musculoskeletal"
            />
          </div>
        </div>
      </Container>
    </Box>
  );
};

export default Musculoskeletal;
