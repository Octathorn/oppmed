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

  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Contact Us', path: '/contact' },
    { label: 'Careers', path: '/careers' },
  ];

  const handleNav = (path) => {
    navigate(path);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <AppBar position="static" className="navbar-container">
        <Container maxWidth="xl">
          <Toolbar className="navbar-toolbar">
            {/* Logo Section */}
            <Box className="logo-section">
              <Box
                component="button"
                onClick={() => navigate('/')}
                aria-label="Opportunity Medical — go to homepage"
                className="logo-icon"
                sx={{
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  cursor: 'pointer',
                }}
              >
                <img
                  src="/logo.png"
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
                aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-navigation-drawer"
              >
                <MenuIcon />
              </IconButton>

              <Button
                variant="contained"
                className="emergency-button"
                href="tel:424-208-7434"
                aria-label="Emergency call 4 2 4, 2 0 8, 7 4 3 4"
              >
                Emergency Call
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer Menu */}
      <Drawer
        id="mobile-navigation-drawer"
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
        <List component="nav" aria-label="Main navigation">
          {menuItems.map((item) => (
            <ListItem key={item.label} disablePadding>
              <ListItemButton onClick={() => handleNav(item.path)}>
                <ListItemText
                  primary={item.label}
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
              href="tel:424-208-7434"
              aria-label="Emergency call 4 2 4, 2 0 8, 7 4 3 4"
              sx={{
                backgroundColor: 'transparent',
                color: '#1a56db',
                border: '1px solid #1a56db',
                borderRadius: '6px',
                textTransform: 'none',
                fontWeight: 500,
                '&:hover': {
                  backgroundColor: '#1a56db',
                  color: 'white',
                  border: '1px solid #1a56db',
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