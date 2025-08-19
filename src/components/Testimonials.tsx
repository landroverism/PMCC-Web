import { Avatar, Box, Container, Grid, Card, CardContent, Typography, Paper } from '@mui/material';
import { deepOrange, green, purple } from '@mui/material/colors';

const testimonials = [
  {
    name: "Sarah M.",
    condition: "Depression & Anxiety",
    story: "The staff at Presbyterian Medical Care Centre helped me find hope again. Their faith-based approach combined with professional therapy gave me the tools I needed to overcome my depression. I'm grateful for their compassionate care.",
    avatar: { initials: 'SM', color: green[500] }
  },
  {
    name: "John K.",
    condition: "Substance Abuse",
    story: "After struggling with addiction for years, I found the support I needed here. The detox program was safe and comfortable, and the ongoing therapy helped me understand the root causes of my addiction. I've been sober for 8 months now.",
    avatar: { initials: 'JK', color: deepOrange[500] }
  },
  {
    name: "Grace W.",
    condition: "PTSD",
    story: "The trauma I experienced affected every aspect of my life. The therapists here understood my pain and helped me process my experiences in a safe environment. The spiritual component of treatment was especially healing for me.",
    avatar: { initials: 'GW', color: purple[500] }
  }
];

export default function Testimonials() {
  return (
    <Box id="testimonials" sx={{ py: 10, backgroundColor: 'grey.100' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h4" component="h2" fontWeight="bold" gutterBottom>
            Stories of Hope & Recovery
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '800px', mx: 'auto' }}>
            Hear from individuals who have found healing and hope through our programs. Their journeys inspire us and demonstrate the power of comprehensive, compassionate care.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {testimonials.map((testimonial) => (
            <Grid item xs={12} md={4} key={testimonial.name}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Avatar 
                      src={testimonial.avatar.image}
                      sx={{ bgcolor: testimonial.avatar.color, width: 56, height: 56 }}
                    >
                      {testimonial.avatar.initials}
                    </Avatar>
                    <Box sx={{ ml: 2 }}>
                      <Typography variant="h6" component="h3" fontWeight="bold">{testimonial.name}</Typography>
                      <Typography variant="body2" color="secondary.main">{testimonial.condition}</Typography>
                    </Box>
                  </Box>
                  <Typography variant="body1" color="text.secondary" fontStyle="italic">
                    “{testimonial.story}”
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 6, textAlign: 'center' }}>
          <Typography variant="caption" color="text.secondary" sx={{ mb: 4, display: 'block' }}>
            *Names have been changed to protect privacy. Stories shared with permission.
          </Typography>
          <Paper elevation={0} sx={{ p: 3, backgroundColor: 'primary.lightest', maxWidth: '600px', mx: 'auto', borderRadius: 2 }}>
            <Typography variant="h6" component="h4" fontWeight="bold" color="primary.dark" gutterBottom>
              Your Story Matters
            </Typography>
            <Typography color="primary.dark">
              Every journey to recovery is unique. Let us help you write your own story of healing and hope.
            </Typography>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
}
