import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../../css/PsychiatricExaminations.css";

const PsychiatricExaminations = () => {
  const navigate = useNavigate();

  return (
    <Box className="psychiatric-section">
      <Container maxWidth="lg">
        <div className="psychiatric-wrapper">
          {/* Left Content */}
          <div className="psychiatric-content">
            <Typography variant="h4" component="div" className="psychiatric-number">
              06.
            </Typography>

            <Typography variant="h4" component="h2" className="psychiatric-title">
              Psychiatric Examinations
            </Typography>

            <Typography variant="body1" className="psychiatric-description">
              Psychological conditions are capable of instigating disruptions in
              mental and behavioral patterns, which may manifest with varying
              degrees of intensity, encompassing but not restricted to
              post-traumatic stress disorder (PTSD) and General Mental
              Disorders.
            </Typography>

            <Button variant="outlined" className="psychiatric-button" onClick={() => navigate('/contact')}>
              Report a Case
            </Button>
          </div>

          {/* Right Image */}
          <div className="psychiatric-image">
            <img
              src="/images/aaaa-768x525.png"
              alt="Psychiatric Examinations"
            />
          </div>
        </div>
      </Container>
    </Box>
  );
};

export default PsychiatricExaminations;
