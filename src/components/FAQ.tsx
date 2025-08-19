import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails, Paper, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-scroll';

const faqs = [
  { question: "What makes your treatment approach different?", answer: "We integrate faith-based principles with evidence-based medical treatment, providing holistic care that addresses the mind, body, and spirit. Our serene environment in Nakuru promotes healing and recovery." },
  { question: "How long does treatment typically last?", answer: "Treatment duration varies based on individual needs. Our programs range from 30-90 days for residential treatment, with ongoing outpatient support available. We create personalized treatment plans for each patient." },
  { question: "Do you accept insurance?", answer: "We work with various insurance providers and offer flexible payment options. Please contact us to discuss your specific insurance coverage and payment arrangements." },
  { question: "Can family members visit during treatment?", answer: "Yes, family involvement is encouraged as part of our treatment approach. We have designated visiting hours and family therapy sessions to help rebuild relationships and support systems." },
  { question: "What should I bring for residential treatment?", answer: "We'll provide you with a detailed packing list upon admission. Generally, you'll need comfortable clothing, personal hygiene items, any prescribed medications, and items for spiritual comfort like a Bible or prayer book." },
  { question: "Is your facility secure and safe?", answer: "Yes, our facility is secure with 24/7 staff supervision. We maintain a safe, supportive environment while allowing patients the freedom to focus on their recovery in our peaceful setting." },
  { question: "Do you provide aftercare support?", answer: "Absolutely. We offer comprehensive aftercare programs including outpatient therapy, support groups, relapse prevention planning, and ongoing spiritual guidance to help maintain long-term recovery." },
  { question: "How do I know if I need treatment?", answer: "If substance use or mental health issues are affecting your daily life, relationships, work, or overall wellbeing, it may be time to seek help. We offer confidential assessments to determine the best treatment approach for you." },
];

export default function FAQ() {
  return (
    <Box id="faq" sx={{ py: 10, backgroundColor: 'grey.50' }}>
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h4" component="h2" fontWeight="bold" gutterBottom>
            Frequently Asked Questions
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Find answers to common questions about our treatment programs and services.
          </Typography>
        </Box>

        <Box>
          {faqs.map((faq, index) => (
            <Accordion key={index} defaultExpanded={index === 0} sx={{ '&:before': { display: 'none' }, mb: 1 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6" component="h3">{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography color="text.secondary">{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>

        <Paper sx={{ mt: 8, p: 4, textAlign: 'center', backgroundColor: 'secondary.main', color: 'white', borderRadius: 2 }}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Still Have Questions?
          </Typography>
          <Typography sx={{ mb: 3, color: 'white', opacity: 0.9 }}>
            Our team is here to help. Contact us for personalized answers to your questions.
          </Typography>
          <Link to="contact" smooth={true} duration={500}>
            <Button variant="contained" sx={{ bgcolor: 'white', color: 'secondary.main', '&:hover': { bgcolor: 'grey.200' } }}>
              Contact Us
            </Button>
          </Link>
        </Paper>
      </Container>
    </Box>
  );
}
