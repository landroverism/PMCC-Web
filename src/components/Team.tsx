import { Avatar, Box, Container, Grid, Paper, Typography, Card, CardContent } from '@mui/material';

const teamMembers = [
  { name: "Dr. Fred Kamiti", role: "Chief Psychiatrist", bio: "Over 15 years of experience in mental health treatment. Specializes in mood disorders and substance abuse recovery.", avatar: { image: "/images/fred.png" } },
  { name: "Dr. Mumbi Waigwa", role: "Clinical Psychologist", bio: "Expert in trauma therapy and cognitive behavioral therapy. Passionate about integrating faith and healing.", avatar: { image: "/images/mumbi.png" } },
  { name: "Mr.Dan Njiriri", role: "Board Member", bio: "CEO at Lish AI Labs  assists in Tech know-how", avatar: { image: "/images/dan.png" } },
  { name: "Sarah Njeri", role: "Licensed Therapist", bio: "Specializes in family therapy and group counseling. Dedicated to helping families heal together.", avatar: { image: "/images/staff.jpeg" } },
  { name: "David Ochieng", role: "Addiction Counselor", bio: "Certified addiction specialist with personal recovery experience. Leads group therapy sessions.", avatar: { image: "/images/staff-2.jpeg" } },
  { name: "Grace Mutua", role: "Psychiatric Nurse", bio: "Provides compassionate nursing care and medication management. Available 24/7 for patient support.", avatar: { image: "/images/coaches.jpeg" } },
];

export default function Team() {
  return (
    <Box id="team" sx={{ py: 10, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h4" component="h2" fontWeight="bold" gutterBottom>
            Meet Our Caring Team
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '800px', mx: 'auto' }}>
            Our multidisciplinary team of professionals is dedicated to providing compassionate, evidence-based care that addresses your physical, emotional, and spiritual needs.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {teamMembers.map((member) => (
            <Grid
              key={member.name}
              size={{
                xs: 12,
                sm: 6,
                md: 4
              }}>
                            <Card 
                variant="outlined" 
                sx={{
                  textAlign: 'center', 
                  p: 3, 
                  height: '100%',
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 10px 20px rgba(0,0,0,0.12)',
                  }
                }}
              >
                <Avatar
                  alt={member.name}
                  src={member.avatar.image}
                  sx={{ width: 100, height: 100, margin: '0 auto 16px', border: '3px solid', borderColor: 'primary.main', bgcolor: 'primary.light' }}
                >
                  {member.avatar.initials}
                </Avatar>
                <Typography variant="h6" component="h3" fontWeight="bold">{member.name}</Typography>
                <Typography color="primary.main" gutterBottom>{member.role}</Typography>
                <Typography variant="body2" color="text.secondary">{member.bio}</Typography>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Paper sx={{ mt: 10, p: { xs: 3, md: 5 }, textAlign: 'center', backgroundColor: 'primary.lightest', borderRadius: 2 }}>
          <Typography variant="h5" component="h3" fontWeight="bold" color="primary.dark" gutterBottom>
            A Network of Specialists
          </Typography>
          <Typography color="primary.dark" sx={{ maxWidth: '750px', mx: 'auto' }}>
            In addition to our core team, we work with a network of specialists including nutritionists, occupational therapists, and social workers to ensure you receive holistic care tailored to your unique needs.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}
