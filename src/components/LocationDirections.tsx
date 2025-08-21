import { Box, Container, Grid, Typography, Button, Paper, Stack } from '@mui/material';
import { Map, Directions, Phone, WhatsApp } from '@mui/icons-material';
import { trackContact, trackEvent } from '../lib/analytics';

export default function LocationDirections() {
  const phoneNumberDial = '0117684003';
  const mapsQuery = encodeURIComponent('Presbyterian Medical Care Centre Nakuru');

  return (
    <Box id="location" sx={{ py: 10, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h4" component="h2" fontWeight="bold" gutterBottom>
            Location & Directions
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Find us easily in Nakuru. Call when you arrive—we're here to help.
          </Typography>
        </Box>

        <Grid container spacing={4} alignItems="stretch">
          <Grid item xs={12} md={6}>
            <Paper sx={{ height: '100%', overflow: 'hidden', borderRadius: 2 }}>
              <Box sx={{ position: 'relative', paddingTop: '56.25%' }}>
                <Box component="iframe"
                  title="PMCC Nakuru Location"
                  src={`https://www.google.com/maps?q=${mapsQuery}&z=15&output=embed`}
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    border: 0,
                  }}
                  loading="lazy"
                />
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', borderRadius: 2 }}>
              <Stack spacing={2}>
                <Typography variant="h6" fontWeight="bold">Presbyterian Medical Care Centre</Typography>
                <Typography color="text.secondary">Nakuru, Kenya</Typography>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <Button
                    variant="contained"
                    startIcon={<Directions />}
                    component="a"
                    href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackEvent('open_maps', { context: 'location_section' })}
                  >
                    Open in Google Maps
                  </Button>
                  <Button
                    variant="outlined"
                    startIcon={<Phone />}
                    component="a"
                    href={`tel:${phoneNumberDial}`}
                    onClick={() => trackContact('call', 'location_section')}
                  >
                    Call Us
                  </Button>
                  <Button
                    variant="outlined"
                    startIcon={<WhatsApp />}
                    component="a"
                    href={`https://wa.me/${phoneNumberDial}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackContact('whatsapp', 'location_section')}
                  >
                    WhatsApp
                  </Button>
                </Stack>
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

