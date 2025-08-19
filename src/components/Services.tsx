import { Box, Button, Container, Grid, Paper, Typography } from '@mui/material';
import { Link } from 'react-scroll';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import ForumIcon from '@mui/icons-material/Forum';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import GroupsIcon from '@mui/icons-material/Groups';


const services = [
  { icon: <PlaylistAddCheckIcon fontSize="large" color="primary" />, title: "Screening & Assessment", description: "Comprehensive evaluation to understand your unique needs and create personalized treatment plans." },
  { icon: <LocalHospitalIcon fontSize="large" color="primary" />, title: "Detoxification", description: "Safe, medically supervised detox process with 24/7 monitoring and support." },
  { icon: <MedicalServicesIcon fontSize="large" color="primary" />, title: "Psychiatric Review", description: "Expert psychiatric evaluation and medication management by qualified professionals." },
  { icon: <ForumIcon fontSize="large" color="primary" />, title: "Individual & Group Therapy", description: "One-on-one counseling and group sessions to address personal and social aspects of recovery." },
  { icon: <MenuBookIcon fontSize="large" color="primary" />, title: "Psychoeducation", description: "Educational programs to help you understand your condition and develop coping strategies." },
  { icon: <HealthAndSafetyIcon fontSize="large" color="primary" />, title: "Relapse Prevention", description: "Tools and strategies to maintain sobriety and prevent relapse after treatment." },
  { icon: <SupportAgentIcon fontSize="large" color="primary" />, title: "Aftercare Support", description: "Ongoing support and resources to help you maintain recovery in your daily life." },
  { icon: <GroupsIcon fontSize="large" color="primary" />, title: "Family Therapy", description: "Involving family members in the healing process to rebuild relationships and support systems." },
];

export default function Services() {
  return (
    <Box id="services" sx={{ py: 10, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h4" component="h2" fontWeight="bold" gutterBottom>
            Our Services
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '800px', mx: 'auto' }}>
            We offer a comprehensive range of services designed to support your journey to recovery and mental wellness at every stage.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {services.map((service) => (
                        <Grid
                          key={service.title}
                          size={{
                            xs: 12,
                            sm: 6,
                            md: 3
                          }}>
              <Paper 
                variant="outlined" 
                sx={{
                  p: 3, 
                  height: '100%', 
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out, border-color 0.3s',
                  '&:hover': { 
                    transform: 'translateY(-8px)',
                    boxShadow: '0 10px 20px rgba(0,0,0,0.12)',
                    borderColor: 'primary.main', 
                  }
                }}
              >
                <Box sx={{ mb: 2 }}>{service.icon}</Box>
                <Typography variant="h6" fontWeight="bold" gutterBottom>{service.title}</Typography>
                <Typography variant="body2" color="text.secondary">{service.description}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Paper sx={{ mt: 10, p: { xs: 4, md: 8 }, textAlign: 'center', backgroundColor: 'secondary.main', color: 'white', borderRadius: 2 }}>
          <Typography variant="h4" component="h3" fontWeight="bold" gutterBottom>
            Ready to Begin Your Healing Journey?
          </Typography>
          <Typography sx={{ mb: 4, maxWidth: '700px', mx: 'auto', color: 'secondary.light' }}>
            Our compassionate team is here to support you every step of the way. Contact us today to learn more about our services and how we can help.
          </Typography>
          <Link to="contact" smooth={true} duration={500}>
            <Button variant="contained" sx={{ backgroundColor: 'white', color: 'secondary.main', '&:hover': { backgroundColor: 'grey.200' } }} size="large">
              Get Started Today
            </Button>
          </Link>
        </Paper>
      </Container>
    </Box>
  );
}
