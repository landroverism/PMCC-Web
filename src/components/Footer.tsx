import { Container, Grid, Typography, Link as MuiLink, IconButton, Box } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-scroll';

const navLinks = [
  { name: "About Us", href: "about" },
  { name: "Services", href: "services" },
  { name: "Contact", href: "contact" },
  { name: "FAQs", href: "faq" },
];

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: 'primary.main', color: 'white', py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <img src="/images/pmcc-logo.png" alt="PMCC Logo" style={{ width: 48, height: 48, marginRight: 16, filter: 'brightness(0) invert(1)' }} />
              <Box>
                <Typography variant="h6" component="div" fontWeight="bold">
                  Presbyterian
                </Typography>
                <Typography variant="caption" sx={{ color: 'grey.400' }}>
                  Medical Care Centre
                </Typography>
              </Box>
            </Box>
            <Typography variant="body2" sx={{ color: 'grey.400' }}>
              Providing compassionate, faith-based mental health and substance abuse treatment.
            </Typography>
          </Grid>

          <Grid item xs={6} md={2}>
            <Typography variant="h6" gutterBottom>Quick Links</Typography>
            {navLinks.map((link) => (
              <Link key={link.name} to={link.href} smooth={true} duration={500}>
                <MuiLink component="button" variant="body2" sx={{ display: 'block', color: 'grey.400', mb: 1, textTransform: 'none' }}>
                  {link.name}
                </MuiLink>
              </Link>
            ))}
          </Grid>

          <Grid item xs={6} md={3}>
            <Typography variant="h6" gutterBottom>Contact Us</Typography>
            <Typography variant="body2" sx={{ color: 'grey.400' }}>Engashura, Nakuru</Typography>
            <Typography variant="body2" sx={{ color: 'grey.400' }}>0117 684 003</Typography>
            <Typography variant="body2" sx={{ color: 'grey.400' }}>presbyterianmedcare2025@gmail.com</Typography>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>Follow Us</Typography>
            <Box>
              <IconButton aria-label="Facebook" sx={{ color: 'white' }}><FacebookIcon /></IconButton>
              <IconButton aria-label="Twitter" sx={{ color: 'white' }}><TwitterIcon /></IconButton>
              <IconButton aria-label="Instagram" sx={{ color: 'white' }}><InstagramIcon /></IconButton>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ mt: 5, pt: 3, borderTop: 1, borderColor: 'divider', textAlign: 'center' }}>
          <Typography variant="body2" sx={{ color: 'grey.400' }}>
            &copy; {new Date().getFullYear()} Presbyterian Medical Care Centre. All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
