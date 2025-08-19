import React, { useState } from 'react';
import { Box, Container, Grid, Paper, Typography, TextField, Button, ToggleButtonGroup, ToggleButton, InputAdornment, Stack, Avatar, Link as MuiLink } from '@mui/material';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import ForumIcon from '@mui/icons-material/Forum';
import HomeWorkIcon from '@mui/icons-material/HomeWork';

const predefinedAmounts = [500, 1000, 2500, 5000, 10000, 25000];

const impactItems = [
  { icon: <LocalHospitalIcon />, amount: "KES 1,000", text: "Provides one day of meals for a patient in recovery" },
  { icon: <ForumIcon />, amount: "KES 5,000", text: "Funds one therapy session for someone in need" },
  { icon: <HomeWorkIcon />, amount: "KES 25,000", text: "Sponsors one week of residential treatment" },
];

export default function Donations() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(1000);
  const [customAmount, setCustomAmount] = useState("");
  const [donorInfo, setDonorInfo] = useState({ name: "", email: "", phone: "", message: "" });

  const handleAmountChange = (event: React.MouseEvent<HTMLElement>, newAmount: number | null) => {
    if (newAmount !== null) {
      setSelectedAmount(newAmount);
      setCustomAmount("");
    }
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setSelectedAmount(null);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setDonorInfo({ ...donorInfo, [e.target.name]: e.target.value });
  };

  const finalAmount = selectedAmount || parseInt(customAmount) || 0;

  return (
    <Box id="donations" sx={{ py: 10, background: 'linear-gradient(to bottom right, #E6F7F3, #E6F0FF)' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h4" component="h2" fontWeight="bold" gutterBottom>Support Our Mission</Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '800px', mx: 'auto' }}>
            Your generous donation helps us provide life-changing mental health and substance abuse treatment to those who need it most.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          <Grid
            size={{
              xs: 12,
              lg: 6
            }}>
            <Paper elevation={3} sx={{ p: 4, borderRadius: 4 }}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>Make a Donation</Typography>
              <Typography variant="subtitle1" gutterBottom>Select Donation Amount (KES)</Typography>
              <ToggleButtonGroup value={selectedAmount} exclusive onChange={handleAmountChange} fullWidth sx={{ mb: 2, display: 'grid', gridTemplateColumns: { xs: '1fr 1fr', sm: '1fr 1fr 1fr' }, gap: 1 }}>
                {predefinedAmounts.map((amount) => (
                  <ToggleButton key={amount} value={amount}>KES {amount.toLocaleString()}</ToggleButton>
                ))}
              </ToggleButtonGroup>
              <TextField fullWidth type="number" placeholder="Or enter a custom amount" value={customAmount} onChange={handleCustomAmountChange} sx={{ mb: 3 }} InputProps={{ startAdornment: <InputAdornment position="start">KES</InputAdornment> }} />
              <Stack spacing={2} mb={3}>
                <TextField label="Full Name (Optional)" name="name" value={donorInfo.name} onChange={handleInputChange} />
                <TextField label="Email Address (Optional)" name="email" type="email" value={donorInfo.email} onChange={handleInputChange} />
                <TextField label="Phone Number (Optional)" name="phone" type="tel" value={donorInfo.phone} onChange={handleInputChange} />
                <TextField label="Message (Optional)" name="message" multiline rows={3} value={donorInfo.message} onChange={handleInputChange} />
              </Stack>
              {finalAmount > 0 && (
                <Paper variant="outlined" sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'primary.lightest' }}>
                  <Typography fontWeight="bold">Donation Amount:</Typography>
                  <Typography variant="h5" fontWeight="bold" color="primary">KES {finalAmount.toLocaleString()}</Typography>
                </Paper>
              )}
            </Paper>
          </Grid>

          <Grid
            size={{
              xs: 12,
              lg: 6
            }}>
            <Paper elevation={3} sx={{ p: 4, borderRadius: 4, height: '100%' }}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>Payment Instructions</Typography>
              <Paper sx={{ p: 2, mb: 3, backgroundColor: 'primary.lightest' }}>
                <Typography variant="h6" color="primary.dark" fontWeight="bold">M-Pesa Payment</Typography>
                <Typography color="primary.dark">Send your donation directly via M-Pesa to support our mission.</Typography>
              </Paper>
              <Stack spacing={2}>
                <InstructionStep num="1" title="Open M-Pesa" text="Go to M-Pesa on your phone and select 'Send Money'." />
                <InstructionStep num="2" title="Enter Phone Number">
                  <Typography color="text.secondary" gutterBottom>Send to either of our numbers:</Typography>
                  <Paper variant="outlined" sx={{ p: 1.5, textAlign: 'center' }}>
                    <Typography fontFamily="monospace" fontSize="1.2rem" fontWeight="bold" color="primary">0117 684 003</Typography>
                    <Typography>or</Typography>
                    <Typography fontFamily="monospace" fontSize="1.2rem" fontWeight="bold" color="primary">0735 269 968</Typography>
                  </Paper>
                </InstructionStep>
                <InstructionStep num="3" title="Enter Amount" text={finalAmount > 0 ? `Enter KES ${finalAmount.toLocaleString()} as your donation amount.` : "Enter your desired donation amount."} />
                <InstructionStep num="4" title="Complete Transaction" text="Enter your M-Pesa PIN and confirm the transaction." />
              </Stack>
              <Paper sx={{ mt: 3, p: 2, backgroundColor: 'secondary.lightest' }}>
                <Typography fontWeight="bold" color="secondary.dark">📧 Confirmation</Typography>
                <Typography color="secondary.dark" variant="body2">
                  After donating, please email us your M-Pesa confirmation at <MuiLink href="mailto:presbyterianmedcare2025@gmail.com">presbyterianmedcare2025@gmail.com</MuiLink> to receive a receipt.
                </Typography>
              </Paper>
            </Paper>
          </Grid>
        </Grid>

        <Paper elevation={3} sx={{ mt: 6, p: 4, borderRadius: 4 }}>
          <Typography variant="h5" component="h3" fontWeight="bold" textAlign="center" gutterBottom>Your Impact</Typography>
          <Grid container spacing={4} mt={2}>
            {impactItems.map((item) => (
              <Grid
                key={item.amount}
                sx={{ textAlign: 'center' }}
                size={{
                  xs: 12,
                  md: 4
                }}>
                <Avatar sx={{ width: 64, height: 64, bgcolor: 'primary.lightest', color: 'primary.main', mx: 'auto', mb: 2 }}>{item.icon}</Avatar>
                <Typography variant="h6" fontWeight="bold">{item.amount}</Typography>
                <Typography color="text.secondary">{item.text}</Typography>
              </Grid>
            ))}
          </Grid>
        </Paper>

        <Paper sx={{ mt: 4, p: 4, textAlign: 'center', backgroundColor: 'primary.main', color: 'white', borderRadius: 4 }}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>Thank You for Your Generosity</Typography>
          <Typography sx={{ maxWidth: '700px', mx: 'auto', color: 'primary.lightest' }}>
            Your donation directly supports individuals and families on their journey to recovery. Together, we're building a community where healing and hope flourish.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}

const InstructionStep = ({ num, title, text, children }: { num: string, title: string, text?: string, children?: React.ReactNode }) => (
  <Box sx={{ display: 'flex', gap: 2 }}>
    <Avatar sx={{ bgcolor: 'primary.main', color: 'white' }}>{num}</Avatar>
    <Box>
      <Typography fontWeight="bold">{title}</Typography>
      {text && <Typography color="text.secondary">{text}</Typography>}
      {children}
    </Box>
  </Box>
);
