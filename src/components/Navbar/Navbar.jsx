import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import '../../css/navbar.css'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate()

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const menuItems = ['Home', 'Services', 'Contact Us', 'Careers'];

  return (
    <>
      <AppBar position="static" className="navbar-container">
        <Container maxWidth="xl">
          <Toolbar className="navbar-toolbar">
            {/* Logo Section */}
            <Box className="logo-section">
              <Box className="logo-icon">
                <img 
                  src="/src/assets/logo.png" 
                  alt="Opportunity Medical Logo" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain'
                  }}
                />
              </Box>
            </Box>

            {/* Navigation Links and Emergency Button */}
            <Box className="nav-links">
              <Button className="nav-button" onClick={()=>navigate('/')}>Home</Button>
              <Button className="nav-button" onClick={()=>navigate('/services')}>Services</Button>
              <Button className="nav-button" onClick={()=>navigate('/contact')}>Contact Us</Button>
              <Button className="nav-button" onClick={()=>navigate('/careers')}>Careers</Button>
              
              {/* Mobile Menu Button */}
              <IconButton
                className="mobile-menu-button"
                onClick={toggleMobileMenu}
                edge="start"
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>
              
              <Button variant="contained" className="emergency-button">
                Emergency Call
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer Menu */}
      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={toggleMobileMenu}
        sx={{
          '& .MuiDrawer-paper': {
            width: 250,
            padding: '20px 0',
          },
        }}
      >
        <List>
          {menuItems.map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemButton onClick={toggleMobileMenu}>
                <ListItemText 
                  primary={item}
                  sx={{
                    '& .MuiTypography-root': {
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '16px',
                      color: '#495057'
                    }
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem disablePadding sx={{ mt: 2, px: 2 }}>
            <Button 
              variant="outlined"
              fullWidth
              sx={{
                backgroundColor: 'transparent',
                color: '#4285f4',
                border: '1px solid #4285f4',
                borderRadius: '6px',
                textTransform: 'none',
                fontWeight: 500,
                '&:hover': {
                  backgroundColor: '#4285f4',
                  color: 'white',
                  border: '1px solid #4285f4',
                }
              }}
            >
              Emergency Call
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;