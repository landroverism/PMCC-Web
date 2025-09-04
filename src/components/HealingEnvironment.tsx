import { Box, Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';

const spaces = [
  {
    title: 'Living Spaces',
    description: 'Comfortable Living Rooms',
    subDescription: 'Homely spaces with soft furnishings, warm lighting, and familiar textures.',
    image: '/images/coaches.jpeg',
  },
  {
    title: 'Accommodation',
    description: 'Peaceful Bedrooms',
    subDescription: 'Private, home-like bedrooms with comfortable bedding and personal touches.',
    image: '/images/bedding.jpeg',
  },
  {
    title: 'Dining',
    description: 'Family-Style Dining',
    subDescription: 'Communal dining areas that feel like home, promoting social connection.',
    image: '/images/dh-3.JPG',
  },
  {
    title: 'Outdoor Spaces',
    description: 'Therapy Gardens',
    subDescription: 'Serene outdoor spaces with natural materials and peaceful surroundings.',
    image: '/images/side-view.jpeg',
  },
  {
    title: 'Activity Spaces',
    description: 'Group Activity Areas',
    subDescription: 'Comfortable spaces designed for group therapy and social activities.',
    image: '/images/hall.jpeg',
  },
  {
    title: 'Spiritual',
    description: 'Chilling Parlour',
    subDescription: 'Peaceful spiritual space with natural materials and calming atmosphere.',
    image: '/images/chill-parlour.JPG',
  },
  {
    title: 'Life Skills',
    description: 'Kitchen & Cooking Area',
    subDescription: 'Home-style kitchen where patients can participate in meal preparation.',
    image: '/images/counter.jpeg',
  },
  {
    title: 'Consultation',
    description: 'Consultation Area',
    subDescription: 'Private and confidential space for consultations with our professional staff.',
    image: '/images/consultation-area.JPG',
  },
];

export default function HealingEnvironment() {
  return (
    <Box id="healing-environment" sx={{ py: 10, backgroundColor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h4" component="h2" fontWeight="bold" gutterBottom>
            Our Healing Environment
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '800px', mx: 'auto' }}>
            Experience our homely, comfortable facilities designed to reduce anxiety and promote healing. See our current spaces and exciting plans for future amenities.
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
            },
            gap: 4,
          }}
        >
          {spaces.map((space) => (
            <Card
              key={space.title}
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': { transform: 'translateY(-5px)', boxShadow: 6 },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={space.image}
                alt={space.title}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h6" component="h3" fontWeight="bold">
                  {space.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {space.subDescription}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
