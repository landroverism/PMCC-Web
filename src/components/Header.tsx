import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, Box, Divider, ListItemButton, useScrollTrigger, Slide, Chip } from '@mui/material';
import DehazeIcon from '@mui/icons-material/Dehaze';
import { Link } from 'react-scroll';
import ChurchIcon from '@mui/icons-material/Church';
import DirectionsIcon from '@mui/icons-material/Directions';
import { trackEvent } from '../lib/analytics';

const navItems = [
  { name: "Home", href: "home" },
  { name: "About", href: "about" },
  { name: "Services", href: "services" },
  { name: "Team", href: "team" },
  { name: "Gallery", href: "gallery" },
  { name: "FAQs", href: "faq" },
  { name: "Donate", href: "donations" },
];

interface Props {
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawer = (
    <Box
      sx={{ width: '100vw', display: 'flex', flexDirection: 'column', height: '100%', bgcolor: 'secondary.main', color: 'white' }}
      role="presentation"
    >
      <Box sx={{ py: 3, textAlign: 'center' }}>
        <Typography variant="h5" component="div" fontWeight="bold">Menu</Typography>
      </Box>
      <Divider sx={{ bgcolor: 'rgba(255, 255, 255, 0.2)' }} />
      <List sx={{ flexGrow: 1 }}>
        {[...navItems, { name: "Contact", href: "contact" }].map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton 
              component={Link} 
              to={item.href} 
              smooth={true} 
              duration={500} 
              sx={{ 
                textAlign: 'center', 
                py: 3,
                mx: 2,
                borderRadius: 2,
                mb: 1,
                '&:hover': {
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                  transform: 'translateX(8px)',
                },
                transition: 'all 0.3s ease',
              }} 
              onClick={handleDrawerToggle}
            >
              <ListItemText 
                primary={item.name} 
                primaryTypographyProps={{ 
                  fontWeight: 600,
                  fontSize: '1.1rem',
                }} 
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider sx={{ bgcolor: 'rgba(255, 255, 255, 0.2)' }} />
      <Box sx={{ p: 2 }}>
        <Button 
          variant="outlined" 
          color="inherit" 
          fullWidth 
          component={Link} 
          to="donations" 
          smooth={true} 
          duration={500}
        >
          Donate Now
        </Button>
      </Box>
    </Box>
  );

  return (
    <>
      <HideOnScroll>
        <AppBar position="sticky" color="secondary">
          <Toolbar sx={{ justifyContent: 'space-between', py: { xs: 1.5, md: 2.5 } }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box
                component="img"
                src="/images/pmcc-logo.png"
                alt="PMCC Logo"
                loading="eager"
                fetchpriority="high"
                sx={{ width: { xs: 56, md: 72 }, height: { xs: 56, md: 72 }, mr: 2 }}
              />
              <Box>
                <Typography variant="h6" component="div" fontWeight="bold" sx={{ color: '#8bd5fc', lineHeight: 1.1 }}>
                  Presbyterian
                  {' '}
                  Medical Care Centre
                </Typography>
                <Typography variant="subtitle2" sx={{ color: 'white', mt: 0.25 }}>
                  Nakuru
                </Typography>
              </Box>
              <Box sx={{ ml: 2, display: { xs: 'none', md: 'block' } }}>
                <Chip 
                  icon={<ChurchIcon />} 
                  label="Affiliated: PCEA Nakuru" 
                  sx={{
                    bgcolor: 'white',
                    color: 'secondary.main',
                    fontWeight: 700,
                    borderRadius: 2,
                    boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                    '& .MuiChip-icon': { color: 'secondary.main', fontSize: 20 }
                  }}
                />
              </Box>
            </Box>

            <Box sx={{ 
              display: { xs: 'none', md: 'flex' }, 
              alignItems: 'center',
              gap: 1
            }}>
              {navItems.map((item) => (
                <Link key={item.name} to={item.href} smooth={true} duration={500}>
                  <Button 
                    color="inherit"
                    sx={{
                      px: 3,
                      py: 1.5,
                      mx: 0.5,
                      fontWeight: 600,
                      fontSize: '0.95rem',
                      textTransform: 'none',
                      borderRadius: 2,
                      position: 'relative',
                      '&:hover': {
                        bgcolor: 'rgba(255, 255, 255, 0.1)',
                        transform: 'translateY(-1px)',
                      },
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: 0,
                        left: '50%',
                        width: 0,
                        height: 2,
                        bgcolor: 'white',
                        transition: 'all 0.3s ease',
                        transform: 'translateX(-50%)',
                      },
                      '&:hover::after': {
                        width: '80%',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {item.name}
                  </Button>
                </Link>
              ))}

              {/* Removed Get Directions button from navbar; it's now in the Hero section */}

              <Link to="contact" smooth={true} duration={500}>
                <Button 
                  variant="contained" 
                  sx={{ 
                    display: { xs: 'none', md: 'block' }, 
                    bgcolor: 'white', 
                    color: 'secondary.main',
                    px: 4,
                    py: 1.5,
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    textTransform: 'none',
                    borderRadius: 3,
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                    '&:hover': { 
                      bgcolor: 'grey.100',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 6px 20px rgba(0,0,0,0.25)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  Get Help Now
                </Button>
              </Link>
            </Box>

            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { md: 'none' } }}
            >
              <DehazeIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{ display: { xs: 'block', md: 'none' } }}
      >
        {drawer}
      </Drawer>
    </>
  );
}
