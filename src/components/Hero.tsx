import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { keyframes } from '@mui/system';
import { Link } from 'react-scroll';
import { Emergency, Phone, WhatsApp } from '@mui/icons-material';

const pulse = keyframes`
  0% {
    transform: scale(1);
    text-shadow: 0 0 5px rgba(173, 216, 230, 0.3);
  }
  50% {
    transform: scale(1.05);
    text-shadow: 0 0 20px rgba(173, 216, 230, 0.7);
  }
  100% {
    transform: scale(1);
    text-shadow: 0 0 5px rgba(173, 216, 230, 0.3);
  }
`;

export default function Hero() {
  return (
    <Box
      id="home"
      sx={{
        position: 'relative',
        backgroundImage: 'url(/images/pmcc-logo.png)',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: { xs: '70%', md: '40%' },
        py: { xs: 10, md: 20 },
        color: 'white',
        textAlign: 'center',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
        },
      }}
    >
      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
        <Typography
          variant="h2"
          component="h1"
          fontWeight="bold"
          gutterBottom
          sx={{
            fontSize: { xs: '2.2rem', md: '3.5rem' },
            textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
          }}
        >
          "You don't have to see the whole staircase,"
          <Typography
            component="span"
            variant="inherit"
            sx={{
              display: 'block',
              mt: { xs: 1, md: 2 },
              color: 'yellow',
              animation: `${pulse} 2.5s infinite ease-in-out`,
            }}
          >
            Just take the first step.
          </Typography>
        </Typography>
        <Typography
          variant="h5"
          component="p"
          sx={{
            mb: 4,
            mx: 'auto',
            maxWidth: '800px',
            color: 'grey.300',
            fontSize: { xs: '1.1rem', md: '1.5rem' },
          }}
        >
          Find hope and recovery in our faith-based rehabilitation center.
          Professional care in a peaceful, supportive environment in Nakuru, Kenya.
        </Typography>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          justifyContent="center"
          sx={{ mb: 4 }}
        >
          <Link to="contact" smooth={true} duration={500}>
            <Button 
              variant="contained" 
              color="secondary" 
              size="large"
              sx={{ 
                fontSize: '1.1rem',
                py: 1.5,
                px: 4,
                fontWeight: 'bold',
                boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 20px rgba(0,0,0,0.4)'
                },
                transition: 'all 0.3s ease'
              }}
            >
              Start Your Journey
            </Button>
          </Link>
          <Link to="about" smooth={true} duration={500}>
            <Button
              variant="contained"
              size="large"
              sx={{ 
                bgcolor: 'white', 
                color: 'secondary.main', 
                fontSize: '1.1rem',
                py: 1.5,
                px: 4,
                fontWeight: 'bold',
                boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                '&:hover': { 
                  bgcolor: 'grey.200',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 20px rgba(0,0,0,0.4)'
                },
                transition: 'all 0.3s ease'
              }}
            >
              Learn More
            </Button>
          </Link>
        </Stack>

        {/* Emergency Contact Section */}
        <Box sx={{ 
          bgcolor: 'rgba(255, 255, 255, 0.1)', 
          borderRadius: 3, 
          p: 3, 
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)'
        }}>
          <Typography variant="h6" component="h3" fontWeight="bold" sx={{ mb: 2, color: 'yellow', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
            <Emergency sx={{ fontSize: 28 }} />
            Need Immediate Help? Call Now
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              size="large"
              startIcon={<Phone sx={{ fontSize: 20 }} />}
              sx={{ 
                bgcolor: '#25D366', 
                color: 'white',
                fontWeight: 'bold',
                px: 3,
                py: 1.5,
                '&:hover': { 
                  bgcolor: '#128C7E',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 20px rgba(37, 211, 102, 0.4)'
                },
                transition: 'all 0.3s ease'
              }}
              component="a"
              href="tel:0117684003"
            >
              Call 0117 684 003
            </Button>
            <Button
              variant="outlined"
              size="large"
              startIcon={<WhatsApp sx={{ fontSize: 20 }} />}
              sx={{ 
                borderColor: 'white', 
                color: 'white',
                fontWeight: 'bold',
                px: 3,
                py: 1.5,
                '&:hover': { 
                  borderColor: 'white',
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 20px rgba(255, 255, 255, 0.3)'
                },
                transition: 'all 0.3s ease'
              }}
              component="a"
              href="https://wa.me/0117684003"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp Us
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
