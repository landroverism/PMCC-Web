import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, Box, Divider, ListItemButton, useScrollTrigger, Slide } from '@mui/material';
import DehazeIcon from '@mui/icons-material/Dehaze';
import { Link } from 'react-scroll';

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
            <ListItemButton component={Link} to={item.href} smooth={true} duration={500} sx={{ textAlign: 'center', py: 2 }} onClick={handleDrawerToggle}>
              <ListItemText primary={item.name} primaryTypographyProps={{ fontWeight: 'bold' }} />
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
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <img src="/images/pmcc-logo.png" alt="PMCC Logo" style={{ width: 48, height: 48, marginRight: 16 }} />
              <Box>
                <Typography variant="h6" component="div" fontWeight="bold">
                  Presbyterian
                </Typography>
                <Typography variant="caption">
                  Medical Care Centre
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
              {navItems.map((item) => (
                <Link key={item.name} to={item.href} smooth={true} duration={500}>
                  <Button color="inherit">{item.name}</Button>
                </Link>
              ))}
            </Box>

            <Link to="contact" smooth={true} duration={500}>
              <Button variant="contained" sx={{ display: { xs: 'none', md: 'block' }, bgcolor: 'white', color: 'secondary.main', '&:hover': { bgcolor: 'grey.200' } }}>
                Get Help Now
              </Button>
            </Link>

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
