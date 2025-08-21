import { Box, Container, Grid, Paper, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import ScheduleIcon from '@mui/icons-material/Schedule';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const features = [
  {
    icon: <VolunteerActivismIcon sx={{ fontSize: 40 }} color="primary" />,
    title: "Faith-Based Approach",
    description: "Integrating spiritual healing with evidence-based medical treatment for holistic recovery."
  },
  {
    icon: <MedicalServicesIcon sx={{ fontSize: 40 }} color="primary" />,
    title: "Professional Staff",
    description: "Experienced psychiatrists, therapists, and counselors dedicated to your wellbeing."
  },
  {
    icon: <ScheduleIcon sx={{ fontSize: 40 }} color="primary" />,
    title: "24/7 Support",
    description: "Round-the-clock care and support whenever you need it most."
  },
  {
    icon: <EnergySavingsLeafIcon sx={{ fontSize: 40 }} color="primary" />,
    title: "Peaceful Location",
    description: "Serene environment in Nakuru that promotes healing and tranquility."
  }
];

const whyChooseUsItems = [
  "Individualized treatment plans",
  "Family involvement and support",
  "Aftercare and relapse prevention",
  "Comfortable, home-like environment"
];

export default function About() {
  return (
    <Box id="about" sx={{ py: 10, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h4" component="h2" fontWeight="bold" gutterBottom>
            About Presbyterian Medical Care Centre
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '800px', mx: 'auto' }}>
            We provide compassionate, faith-based mental health and substance abuse recovery services in a peaceful, holiday-like environment. Our approach combines professional medical care with spiritual support to address the whole person.
          </Typography>
        </Box>

                <Grid container spacing={4} sx={{ mb: 10 }}>
          {features.map((feature) => (
            <Grid
              key={feature.title}
              size={{
                xs: 12,
                sm: 6,
                md: 3
              }}>

              <Paper elevation={0} sx={{ textAlign: 'center', p: 3, backgroundColor: 'grey.100', height: '100%' }}>
                <Box sx={{ mb: 2 }}>{feature.icon}</Box>
                <Typography variant="h6" fontWeight="bold" gutterBottom>{feature.title}</Typography>
                <Typography variant="body2" color="text.secondary">{feature.description}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Paper elevation={0} sx={{ p: { xs: 3, md: 6 }, backgroundColor: 'primary.lightest', borderRadius: 2 }}>
                    <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, lg: 6 }}>
              <Typography variant="h5" component="h3" fontWeight="bold" gutterBottom>
                Our Mission
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                To provide comprehensive, compassionate mental health and substance abuse treatment that honors the dignity of every person. We believe in the power of faith, community, and professional care working together to restore hope and transform lives.
              </Typography>
              <Typography variant="subtitle1" color="primary.main" fontWeight="bold">
                Located in the heart of Nakuru
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, lg: 6 }}>
              <Box
                component="img"
                src="/images/side-view.jpeg"
                alt="Side view of PMCC facility"
                loading="lazy"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 2,
                  boxShadow: 3,
                  objectFit: 'cover',
                  objectPosition: 'center 25%',
                  maxHeight: 350
                }}
              />
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}
