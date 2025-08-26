import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import "../../css/SkeletalService.css";

const SkeletalService = () => {
  return (
    <Box className="skeletal-section">
      <Container maxWidth="lg">
        <div className="skeletal-wrapper">
          {/* Left Content */}
          <div className="skeletal-content">
            <Typography variant="h4" className="skeletal-number">
              01.
            </Typography>

            <Typography variant="h4" className="skeletal-title">
              Skeletal-Muscular
            </Typography>

            <Typography variant="body1" className="skeletal-description">
              <strong>Muscular</strong> The skeletal-muscular complex comprises
              bones, muscles, tendons, ligaments, and various soft tissues, all
              operating in unison to uphold your body’s load and facilitate your
              mobility.
            </Typography>

            <Typography variant="body1" className="skeletal-description">
              Ailments, illnesses, and the natural aging process can lead to
              discomfort, rigidity, and impairments in mobility and bodily
              operations.
            </Typography>

            <Button variant="outlined" className="skeletal-button">
              Report a Case
            </Button>
          </div>

          {/* Right Image */}
          <div className="skeletal-image">
            <img
              src="/images/6906772.jpg" 
              alt="Skeletal-Muscular"
            />
          </div>
        </div>
      </Container>
    </Box>
  );
};

export default SkeletalService;
