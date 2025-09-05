import { Box, Container, Grid, Card, CardContent, Typography } from '@mui/material';

const conditions = [
  {
    image: "/images/substance-fty.png",
    title: "Substance Abuse",
    description: "Comprehensive treatment for alcohol and drug addiction with medical detox and therapy."
  },
  {
    image: "/images/bipolar.png",
    title: "Depression & Bipolar",
    description: "Professional care for mood disorders with medication management and counseling."
  },
  {
    image: "/images/anxiety.png",
    title: "Anxiety Disorders",
    description: "Treatment for generalized anxiety, panic disorders, and phobias through therapy."
  },
  {
    image: "/images/ptsd-grief.jpg",
    title: "PTSD & Grief",
    description: "Specialized care for trauma survivors and those experiencing loss and grief."
  },
  {
    image: "/images/skinzo.png",
    title: "Schizophrenia",
    description: "Comprehensive treatment for psychotic disorders with medication and support."
  },
  {
    image: "/images/sex-new.png",
    title: "Personality & Sexual Disorders",
    description: "Specialized therapy for personality disorders and sexual health concerns."
  }
];

export default function Conditions() {
  return (
    <Box id="conditions" sx={{ py: 10, backgroundColor: 'grey.100' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h4" component="h2" fontWeight="bold" gutterBottom>
            Conditions We Treat
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '800px', mx: 'auto' }}>
            We provide specialized care for a wide range of mental health conditions 
            and substance abuse disorders, tailoring treatment to each individual's needs.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {conditions.map((condition) => (
            <Grid
              key={condition.title}
              size={{
                xs: 12,
                md: 6,
                lg: 4
              }}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', transition: 'box-shadow 0.3s', '&:hover': { boxShadow: 6 } }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ height: 140, mb: 2, overflow: 'hidden', borderRadius: '4px' }}><img src={condition.image} alt={condition.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></Box>
                  <Typography variant="h6" component="h3" fontWeight="bold" gutterBottom>
                    {condition.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {condition.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
