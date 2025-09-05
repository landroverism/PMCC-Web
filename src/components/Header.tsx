import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, Box, Divider, ListItemButton, Chip } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
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

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawer = (
    <Box
      sx={{ 
        width: '50vw', 
        display: 'flex', 
        flexDirection: 'column', 
        height: '100%', 
        bgcolor: 'primary.main', 
        color: 'white',
        minWidth: 280
      }}
      role="presentation"
    >
      <Box sx={{ py: 4, textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.2)' }}>
        <Typography variant="h5" component="div" fontWeight="bold" sx={{ color: 'white' }}>Menu</Typography>
      </Box>
      <List sx={{ flexGrow: 1, pt: 2 }}>
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
                mb: 1,
                borderRadius: 2,
                color: 'white',
                '&:hover': {
                  bgcolor: 'rgba(255, 255, 255, 0.15)',
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
                  color: 'white'
                }} 
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box sx={{ p: 3, borderTop: '1px solid rgba(255,255,255,0.2)' }}>
        <Button 
          variant="outlined" 
          fullWidth 
          component={Link} 
          to="donations" 
          smooth={true} 
          duration={500}
          sx={{ 
            color: 'white', 
            borderColor: 'white',
            py: 1.5,
            fontWeight: 600,
            '&:hover': {
              borderColor: 'white',
              bgcolor: 'rgba(255, 255, 255, 0.1)'
            }
          }}
        >
          Donate Now
        </Button>
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar position="sticky" sx={{ bgcolor: 'white', color: 'primary.main', zIndex: 1200 }}>
        <Toolbar sx={{ justifyContent: 'space-between', py: { xs: 1.5, md: 2.5 } }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <Box
                component="img"
                src="/images/pmcc-logo.png"
                alt="PMCC Logo"
                loading="eager"
                fetchPriority="high"
                sx={{ width: { xs: 80, md: 100 }, height: { xs: 80, md: 100 }, mr: 3 }}
              />
            <Box>
              <Typography variant="h6" component="div" fontWeight="bold" sx={{ color: 'primary.main', lineHeight: 1.1 }}>
                Presbyterian
                {' '}
                Medical Care Centre
              </Typography>
              <Typography variant="subtitle2" sx={{ color: 'primary.main', mt: 0.25 }}>
                Nakuru
              </Typography>
            </Box>
            <Box sx={{ ml: 2, display: { xs: 'none', md: 'block' } }}>
              <Chip 
                icon={<ChurchIcon />} 
                label="Affiliated: PCEA Nakuru-West" 
                sx={{
                  bgcolor: 'primary.main',
                  color: 'white',
                  fontWeight: 700,
                  borderRadius: 2,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                  '& .MuiChip-icon': { color: 'white', fontSize: 20 }
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
                  sx={{
                    px: 3,
                    py: 1.5,
                    mx: 0.5,
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    textTransform: 'none',
                    borderRadius: 2,
                    position: 'relative',
                    color: 'primary.main',
                    '&:hover': {
                      bgcolor: 'rgba(21, 101, 192, 0.1)',
                      transform: 'translateY(-1px)',
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: '50%',
                      width: 0,
                      height: 2,
                      bgcolor: 'primary.main',
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
                  bgcolor: 'primary.main', 
                  color: 'white',
                  px: 4,
                  py: 1.5,
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  textTransform: 'none',
                  borderRadius: 3,
                  boxShadow: '0 4px 12px rgba(21, 101, 192, 0.3)',
                  '&:hover': { 
                    bgcolor: '#1054A2',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 6px 20px rgba(21, 101, 192, 0.4)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Get Help Now
              </Button>
            </Link>
          </Box>

          <IconButton
            sx={{ 
              display: { md: 'none' }, 
              color: 'primary.main',
              p: 1.5,
              '&:hover': {
                bgcolor: 'rgba(21, 101, 192, 0.1)'
              }
            }}
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
          >
            <MenuIcon sx={{ fontSize: 28 }} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{ 
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            width: '50vw',
            minWidth: 280,
            bgcolor: 'primary.main'
          }
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}
