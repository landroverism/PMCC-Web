import React, { useState } from 'react';
import { useMutation } from 'convex/react';
import { api } from '../../convex/_generated/api';
import { Box, Container, Grid, Paper, Typography, TextField, Stack, Avatar, Link as MuiLink, Snackbar, Alert, Button, CircularProgress } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const contactDetails = [
  { icon: <LocationOnIcon />, title: "Location", lines: ["Engashura - Kwa Buda Stage", "Nakuru-Bahati Road", "Nakuru, Kenya"] },
  { icon: <PhoneIcon />, title: "Phone Numbers", lines: [<MuiLink href="tel:0117684003" color="inherit">0117 684 003</MuiLink>, <MuiLink href="tel:0735269968" color="inherit">0735 269 968</MuiLink>] },
  { icon: <EmailIcon />, title: "Email", lines: [<MuiLink href="mailto:presbyterianmedcare2025@gmail.com" color="inherit">presbyterianmedcare2025@gmail.com</MuiLink>] },
  { icon: <AccessTimeIcon />, title: "Hours", lines: ["24/7 Emergency Support", "Office: Mon-Fri 8AM-6PM"] },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [snackbar, setSnackbar] = useState<{ open: boolean; message: string; severity: 'success' | 'error' } | null>(null);

  const submitInquiry = useMutation(api.inquiries.submitInquiry);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await submitInquiry(formData);
      setSnackbar({ open: true, message: "Thank you! Your inquiry has been sent.", severity: 'success' });
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      setSnackbar({ open: true, message: "Submission failed. Please try again.", severity: 'error' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCloseSnackbar = () => setSnackbar(null);

  return (
    <Box id="contact" sx={{ py: 10, backgroundColor: 'grey.50' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h4" component="h2" fontWeight="bold" gutterBottom>Contact Us</Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '800px', mx: 'auto' }}>
            Take the first step towards healing. Reach out to us today for confidential support and information about our programs.
          </Typography>
        </Box>

        <Paper elevation={3} sx={{ borderRadius: 4, overflow: 'hidden' }}>
          <Grid container>
            <Grid
              sx={{ p: 4, background: 'linear-gradient(to bottom, #004d40, #00796b)' , color: 'white' }}
              size={{
                xs: 12,
                md: 5
              }}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>Get in Touch</Typography>
              <Stack spacing={3}>
                {contactDetails.map((item) => (
                  <Stack direction="row" spacing={2} key={item.title} alignItems="flex-start">
                    <Avatar sx={{ bgcolor: 'rgba(255,255,255,0.2)', color: 'white' }}>{item.icon}</Avatar>
                    <Box>
                      <Typography fontWeight="bold">{item.title}</Typography>
                      {item.lines.map((line, i) => <Typography key={i} variant="body2">{line}</Typography>)}
                    </Box>
                  </Stack>
                ))}
              </Stack>
              <Box sx={{ mt: 4 }}>
                <Box sx={{ height: 260, borderRadius: 2, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.2)' }}>
                  <iframe
                    title="PMCC Location Map"
                    src="https://www.google.com/maps?q=Engashura%20-%20Kwa%20Buda%20Stage%2C%20Nakuru-Bahati%20Road%2C%20Nakuru%2C%20Kenya&z=15&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </Box>
                <Stack direction="row" spacing={1} sx={{ mt: 2, flexWrap: 'wrap' }}>
                  <Button
                    component="a"
                    href="https://www.google.com/maps/dir/?api=1&destination=Engashura%20-%20Kwa%20Buda%20Stage%2C%20Nakuru-Bahati%20Road%2C%20Nakuru%2C%20Kenya&travelmode=driving"
                    target="_blank"
                    rel="noopener"
                    variant="contained"
                    size="small"
                  >
                    Get Directions
                  </Button>
                  <Button
                    component="a"
                    href="https://www.google.com/maps/search/?api=1&query=Engashura%20-%20Kwa%20Buda%20Stage%2C%20Nakuru-Bahati%20Road%2C%20Nakuru%2C%20Kenya"
                    target="_blank"
                    rel="noopener"
                    variant="outlined"
                    color="inherit"
                    size="small"
                    sx={{ borderColor: 'rgba(255,255,255,0.6)' }}
                  >
                    Open in Google Maps
                  </Button>
                </Stack>
              </Box>
            </Grid>

            <Grid
              sx={{ p: 4 }}
              size={{
                xs: 12,
                md: 7
              }}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>Send Us a Message</Typography>
              <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
                <Stack spacing={2.5}>
                  <TextField label="Full Name" name="name" required value={formData.name} onChange={handleChange} />
                  <TextField label="Email Address" name="email" type="email" required value={formData.email} onChange={handleChange} />
                  <TextField label="Phone Number" name="phone" type="tel" required value={formData.phone} onChange={handleChange} />
                  <TextField label="Message" name="message" multiline rows={5} required value={formData.message} onChange={handleChange} />
                                    <Button type="submit" variant="contained" size="large" fullWidth disabled={isSubmitting}>
                    {isSubmitting ? <CircularProgress size={24} color="inherit" /> : "Send Message"}
                  </Button>
                </Stack>
              </Box>
              <Paper sx={{ mt: 2.5, p: 2, backgroundColor: 'secondary.lightest', borderRadius: 2 }}>
                <Typography variant="body2" color="secondary.dark" fontWeight="bold">
                  All inquiries are handled with complete confidentiality. We typically respond within 24 hours.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Paper>

        {snackbar && (
          <Snackbar open={snackbar.open} autoHideDuration={6000} onClose={handleCloseSnackbar} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
            <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: '100%' }}>
              {snackbar.message}
            </Alert>
          </Snackbar>
        )}
      </Container>
    </Box>
  );
}
