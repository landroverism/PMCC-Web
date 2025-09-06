import { Box, Container, Grid, Paper, Typography, Card, CardContent, Chip } from '@mui/material';
import { 
  Psychology, 
  LocalHospital, 
  Groups, 
  Security, 
  AccessTime, 
  LocationOn,
  Star,
  VerifiedUser,
  Phone,
  WhatsApp
} from '@mui/icons-material';

const reasons = [
  {
    icon: <Psychology sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: "Faith-Based Approach",
    description: "We are affiliated with PCEA Church in Nakuru, integrating spiritual guidance with professional treatment for holistic healing",
    highlight: "PCEA Affiliated"
  },
  {
    icon: <LocalHospital sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: "Professional Excellence",
    description: "Licensed professionals with 15+ years of experience in mental health and addiction treatment",
    highlight: "Expert Care"
  },
  {
    icon: <Groups sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: "Family-Centered Care",
    description: "Involving families in the recovery process for lasting positive outcomes",
    highlight: "Family Support"
  },
  {
    icon: <Security sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: "Confidential & Safe",
    description: "Complete privacy protection in a secure, peaceful environment",
    highlight: "100% Private"
  },
  {
    icon: <AccessTime sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: "24/7 Support",
    description: "Round-the-clock care and emergency support when you need it most",
    highlight: "Always Available"
  },
  {
    icon: <LocationOn sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: "Prime Nakuru Location",
    description: "Easily accessible in the heart of Nakuru with peaceful surroundings",
    highlight: "Central Location"
  }
];

const stats = [
  { number: "500+", label: "Lives Transformed" },
  { number: "95%", label: "Success Rate" },
  { number: "24/7", label: "Support Available" }
];

export default function WhyChoosePMCC() {
  return (
    <Box id="why-choose-pmcc" sx={{ py: 10, backgroundColor: 'grey.50' }}>
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h3" component="h2" fontWeight="bold" gutterBottom>
            Why Choose PMCC?
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '800px', mx: 'auto', mb: 3 }}>
            Discover what makes Presbyterian Medical Care Centre the trusted choice for rehabilitation and recovery in Nakuru
          </Typography>
          
          {/* Trust Badges */}
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap', mb: 4 }}>
            <Chip 
              icon={<VerifiedUser />} 
              label="Licensed Facility" 
              color="primary" 
              variant="outlined"
              sx={{ fontWeight: 'bold' }}
            />
            <Chip 
              icon={<Star />} 
              label="5-Star Rated" 
              color="secondary" 
              variant="outlined"
              sx={{ fontWeight: 'bold' }}
            />
            <Chip 
              icon={<Groups />} 
              label="Family Approved" 
              color="success" 
              variant="outlined"
              sx={{ fontWeight: 'bold' }}
            />
          </Box>
        </Box>

        {/* Statistics Section */}
        <Paper 
          elevation={3} 
          sx={{ 
            p: 4, 
            mb: 8, 
            background: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)',
            color: 'white',
            borderRadius: 3
          }}
        >
          <Grid container spacing={4} justifyContent="center">
            {stats.map((stat, index) => (
              <Grid item xs={6} sm={3} key={index} sx={{ textAlign: 'center' }}>
                <Typography variant="h3" component="div" fontWeight="bold" sx={{ mb: 1 }}>
                  {stat.number}
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.9 }}>
                  {stat.label}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Paper>

        {/* Reasons Grid */}
        <Grid container spacing={4}>
          {reasons.map((reason, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card 
                elevation={2}
                sx={{
                  height: '100%',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
                  },
                  position: 'relative',
                  overflow: 'visible'
                }}
              >
                <CardContent sx={{ p: 4, textAlign: 'center' }}>
                  {/* Highlight Badge */}
                  <Chip
                    label={reason.highlight}
                    color="secondary"
                    size="small"
                    sx={{
                      position: 'absolute',
                      top: -12,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      fontWeight: 'bold',
                      fontSize: '0.75rem'
                    }}
                  />
                  
                  {/* Icon */}
                  <Box sx={{ mb: 3, mt: 2 }}>
                    {reason.icon}
                  </Box>
                  
                  {/* Content */}
                  <Typography variant="h6" component="h3" fontWeight="bold" gutterBottom>
                    {reason.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                    {reason.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Call to Action */}
        <Box sx={{ textAlign: 'center', mt: 8 }}>
          <Typography variant="h5" component="h3" fontWeight="bold" gutterBottom>
            Ready to Start Your Recovery Journey?
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: '600px', mx: 'auto' }}>
            Join hundreds of families who have found hope and healing at PMCC. 
            Your first step towards recovery starts with a simple call.
          </Typography>
          
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
            <Chip
              icon={<Phone />}
              label="Call Now: 0117 684 003"
              color="primary"
              variant="filled"
              sx={{ 
                fontWeight: 'bold', 
                fontSize: '1rem',
                py: 2,
                px: 3,
                cursor: 'pointer'
              }}
              component="a"
              href="tel:+254117684003"
            />
            <Chip
              icon={<WhatsApp />}
              label="WhatsApp Us"
              color="success"
              variant="filled"
              sx={{ 
                fontWeight: 'bold', 
                fontSize: '1rem',
                py: 2,
                px: 3,
                cursor: 'pointer'
              }}
              component="a"
              href="https://wa.me/254117684003"
              target="_blank"
              rel="noopener noreferrer"
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
