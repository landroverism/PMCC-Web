import React, { useState } from 'react';
import { Box, Button, Container, Grid, Paper, Typography, Card, CardContent, Chip, Tabs, Tab, Avatar, Stack, CardMedia } from '@mui/material';
import { Link } from 'react-scroll';
import WeekendIcon from '@mui/icons-material/Weekend';
import BedIcon from '@mui/icons-material/Bed';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import YardIcon from '@mui/icons-material/Yard';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import GroupsIcon from '@mui/icons-material/Groups';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import SoupKitchenIcon from '@mui/icons-material/SoupKitchen';
import PoolIcon from '@mui/icons-material/Pool';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import PaletteIcon from '@mui/icons-material/Palette';
import LandscapeIcon from '@mui/icons-material/Landscape';
import ComputerIcon from '@mui/icons-material/Computer';
import HouseIcon from '@mui/icons-material/House';

const iconProps = { fontSize: 'large' as const, color: 'primary' as const };

const currentFacilities = [
  { title: "Comfortable Living Rooms", description: "Homely spaces with soft furnishings, warm lighting, and familiar textures.", image: "/images/coaches.jpeg", category: "Living Spaces" },
  { title: "Peaceful Bedrooms", description: "Private, home-like bedrooms with comfortable bedding and personal touches.", image: "/images/bedding.jpeg", category: "Accommodation" },
  { title: "Family-Style Dining", description: "Communal dining areas that feel like home, promoting social connection.", image: "/images/dh-3.JPG", category: "Dining" },
  { title: "Therapy Gardens", description: "Serene outdoor spaces with natural materials and peaceful surroundings.", image: "/images/side-view.jpeg", category: "Outdoor Spaces" },
  { title: "Group Activity Areas", description: "Comfortable spaces designed for group therapy and social activities.", image: "/images/hall.jpeg", category: "Activity Spaces" },
  { title: "Chilling Parlour", description: "Peaceful spiritual space with natural materials and calming atmosphere.", image: "/images/chill-parlour.JPG", category: "Spiritual" },
  { title: "Kitchen & Cooking Area", description: "Home-style kitchen where patients can participate in meal preparation.", image: "/images/counter.jpeg", category: "Life Skills" },
  { title: "Consultation Area", description: "Private and confidential space for consultations with our professional staff.", image: "/images/consultation-area.JPG", category: "Consultation" },
];

const futurePlans = [
  { title: "Swimming Pool & Aquatic Therapy", description: "Therapeutic swimming pool for physical rehabilitation and stress relief.", icon: <PoolIcon {...iconProps} />, category: "Aquatic Therapy", timeline: "Phase 1 - 2026" },
  { title: "Basketball Court", description: "Full-size basketball court for physical fitness and team building activities.", icon: <SportsBasketballIcon {...iconProps} />, category: "Sports", timeline: "Phase 1 - 2026" },
  { title: "Art & Music Therapy Studio", description: "Creative spaces for art therapy, music therapy, and expressive healing.", icon: <PaletteIcon {...iconProps} />, category: "Creative Therapy", timeline: "Phase 1 - 2026" },
  { title: "PlayStation Gaming Lounge", description: "Modern gaming area for recreational therapy and social interaction.", icon: <SportsEsportsIcon {...iconProps} />, category: "Recreation", timeline: "Phase 2 - 2027" },
  { title: "Fitness & Wellness Center", description: "Fully equipped gym with modern exercise equipment and wellness programs.", icon: <FitnessCenterIcon {...iconProps} />, category: "Fitness", timeline: "Phase 2 - 2027" },
  { title: "Vocational Training Center", description: "Skills training facility for computer literacy, crafts, and job preparation.", icon: <ComputerIcon {...iconProps} />, category: "Skills", timeline: "Phase 2 - 2027" },
  { title: "Outdoor Adventure Course", description: "Challenge course and outdoor activities for confidence building.", icon: <LandscapeIcon {...iconProps} />, category: "Adventure", timeline: "Phase 3 - 2028" },
  { title: "Family Accommodation Units", description: "On-site housing for family members during intensive treatment periods.", icon: <HouseIcon {...iconProps} />, category: "Family Support", timeline: "Phase 3 - 2028" },
];

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && <Box sx={{ pt: 4 }}>{children}</Box>}
    </div>
  );
}

export default function Gallery() {
  const [value, setValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => setValue(newValue);

  return (
    <Box id="gallery" sx={{ py: 10, backgroundColor: 'grey.100' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography variant="h4" component="h2" fontWeight="bold" gutterBottom>Our Healing Environment</Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '800px', mx: 'auto' }}>
            Experience our homely, comfortable facilities designed to reduce anxiety and promote healing. See our current spaces and exciting plans for future amenities.
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Tabs value={value} onChange={handleChange} centered sx={{ mb: 4, borderBottom: 1, borderColor: 'divider' }}>
            <Tab label="Current Facilities" />
            <Tab label="Future Plans" />
          </Tabs>
        </Box>

        <TabPanel value={value} index={0}>
          <Grid container spacing={3}>
            {currentFacilities.map((item) => (
              <Grid
                key={item.title}
                size={{
                  xs: 12,
                  sm: 6,
                  md: 3
                }}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardMedia
                    component="img"
                    height="160"
                    image={item.image}
                    alt={item.title}
                  />
                  <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                    <Chip label={item.category} color="primary" size="small" sx={{ mb: 1 }} />
                    <Typography variant="h6" fontWeight="bold" gutterBottom>{item.title}</Typography>
                    <Typography variant="body2" color="text.secondary">{item.description}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </TabPanel>

        <TabPanel value={value} index={1}>
          <Grid container spacing={3}>
            {futurePlans.map((item) => (
              <Grid
                key={item.title}
                size={{
                  xs: 12,
                  sm: 6,
                  md: 3
                }}>
                <Card sx={{ textAlign: 'center', p: 2, height: '100%', border: 1, borderColor: 'secondary.light' }}>
                  <Avatar sx={{ width: 64, height: 64, margin: '0 auto 16px', bgcolor: 'secondary.lightest', color: 'secondary.main' }}>{item.icon}</Avatar>
                  <Chip label={item.category} color="secondary" size="small" sx={{ mb: 1 }} />
                  <Typography variant="h6" fontWeight="bold" gutterBottom>{item.title}</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>{item.description}</Typography>
                  <Chip label={item.timeline} variant="outlined" size="small" />
                </Card>
              </Grid>
            ))}
          </Grid>
          <Paper sx={{ mt: 6, p: 4, textAlign: 'center', backgroundColor: 'secondary.main', color: 'white', borderRadius: 2 }}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>Help Us Build the Future</Typography>
            <Typography sx={{ mb: 3, maxWidth: '700px', mx: 'auto', color: 'secondary.light' }}>
              Your donations directly support these exciting developments. Together, we can create a world-class healing environment.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
              <Link to="donations" smooth={true} duration={500}>
                <Button variant="contained" sx={{ bgcolor: 'white', color: 'secondary.main', '&:hover': { bgcolor: 'grey.200' } }}>Support Our Vision</Button>
              </Link>
              <Link to="contact" smooth={true} duration={500}>
                <Button variant="outlined" sx={{ color: 'white', borderColor: 'white', '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.1)' } }}>Learn More</Button>
              </Link>
            </Stack>
          </Paper>
        </TabPanel>
      </Container>
    </Box>
  );
}
