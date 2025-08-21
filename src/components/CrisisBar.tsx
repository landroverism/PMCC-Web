import { useState } from 'react';
import { Box, Container, Stack, Typography, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Checkbox, FormControlLabel } from '@mui/material';
import { LocalPhone, WhatsApp, Call, ScheduleSend } from '@mui/icons-material';
import { trackContact, trackEvent } from '../lib/analytics';

export default function CrisisBar() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [bestTime, setBestTime] = useState('');
  const [consent, setConsent] = useState(true);

  const phoneNumberDisplay = '0117 684 003';
  const phoneNumberDial = '0117684003';

  const handleSubmit = () => {
    const msg = encodeURIComponent(`Hi PMCC, please call me back.\nName: ${name}\nPhone: ${phone}\nBest time: ${bestTime}`);
    trackEvent('callback_submit', { name_length: name.length > 0, bestTime_length: bestTime.length > 0 });
    window.open(`https://wa.me/${phoneNumberDial}?text=${msg}`, '_blank');
    setOpen(false);
  };

  return (
    <>
      <Box
        sx={{
          position: 'sticky',
          top: 0,
          zIndex: (theme) => theme.zIndex.appBar + 1,
          bgcolor: 'secondary.main',
          color: 'white',
          py: 1,
          borderBottom: '1px solid rgba(255,255,255,0.2)'
        }}
      >
        <Container maxWidth="lg">
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={1.5} alignItems={{ xs: 'flex-start', md: 'center' }} justifyContent="space-between">
            <Stack direction="row" spacing={1.5} alignItems="center" flexWrap="wrap">
              <Typography variant="subtitle2" sx={{ fontWeight: 700, display: 'flex', alignItems: 'center', gap: 1 }}>
                24/7 Confidential Help
              </Typography>
              <Stack direction="row" spacing={1} alignItems="center">
                <LocalPhone fontSize="small" />
                <Button component="a" href={`tel:${phoneNumberDial}`} color="inherit" sx={{ p: 0, minWidth: 'auto', textDecoration: 'underline' }} onClick={() => trackContact('call', 'crisis_bar')}>
                  {phoneNumberDisplay}
                </Button>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <WhatsApp fontSize="small" />
                <Button component="a" href={`https://wa.me/${phoneNumberDial}`} target="_blank" rel="noopener noreferrer" color="inherit" sx={{ p: 0, minWidth: 'auto', textDecoration: 'underline' }} onClick={() => trackContact('whatsapp', 'crisis_bar')}>
                  WhatsApp
                </Button>
              </Stack>
            </Stack>
            <Button onClick={() => { setOpen(true); trackEvent('callback_open'); }} variant="contained" color="primary" size="small" startIcon={<ScheduleSend />} sx={{ fontWeight: 700 }}>
              Request a Callback
            </Button>
          </Stack>
        </Container>
      </Box>

      <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="sm">
        <DialogTitle>Request a Callback</DialogTitle>
        <DialogContent sx={{ pt: 1 }}>
          <Stack spacing={2}>
            <TextField label="Your Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth />
            <TextField label="Your Phone" value={phone} onChange={(e) => setPhone(e.target.value)} fullWidth />
            <TextField label="Best Time to Call" value={bestTime} onChange={(e) => setBestTime(e.target.value)} fullWidth placeholder="e.g. Today 2-4pm" />
            <FormControlLabel control={<Checkbox checked={consent} onChange={(e) => setConsent(e.target.checked)} />} label="I consent to be contacted by PMCC" />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={handleSubmit} disabled={!consent || !phone} variant="contained" startIcon={<Call />}>Submit</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

