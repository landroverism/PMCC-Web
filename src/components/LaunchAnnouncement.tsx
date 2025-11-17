import { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Chip,
  Grow,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import { Celebration, Close, LocalHospital, CalendarMonth, AccessTime, LocationOn, Phone, Event } from '@mui/icons-material';
import { keyframes } from '@mui/system';
import { Link as ScrollLink } from 'react-scroll';

const float = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-6px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const shimmer = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

export default function LaunchAnnouncement() {
  const [isMounted, setIsMounted] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 400);
    return () => clearTimeout(timer);
  }, []);

  if (dismissed) {
    return null;
  }

  return (
    <Grow in={isMounted} timeout={600}>
      <Box
        component="section"
        sx={{
          position: 'fixed',
          top: { xs: 96, sm: 120, md: 140 },
          right: { xs: 16, sm: 32 },
          left: { xs: 16, sm: 'auto' },
          maxWidth: { xs: 'calc(100% - 32px)', sm: 360, md: 420 },
          bgcolor: 'rgba(14, 18, 43, 0.9)',
          backgroundImage:
            'linear-gradient(135deg, rgba(255,85,127,0.95), rgba(120,65,255,0.95))',
          color: '#ffffff',
          borderRadius: 4,
          boxShadow: '0 25px 60px rgba(15, 12, 41, 0.45)',
          border: '1px solid rgba(255,255,255,0.2)',
          backdropFilter: 'blur(12px)',
          p: { xs: 2.5, md: 3 },
          zIndex: 1200,
          animation: `${float} 6s ease-in-out infinite`,
          maxHeight: { xs: 'calc(100vh - 120px)', sm: 'calc(100vh - 160px)' },
          overflowY: 'auto',
          overflowX: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(130deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 60%)',
            zIndex: -1,
          },
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(120deg, rgba(255,255,255,0.2), rgba(255,255,255,0))',
            opacity: 0.15,
            backgroundSize: '200% 200%',
            animation: `${shimmer} 14s ease infinite`,
            zIndex: -2,
          }}
        />

        <IconButton
          size="small"
          onClick={() => setDismissed(true)}
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            color: '#ffffff',
            bgcolor: 'rgba(255, 255, 255, 0.12)',
            '&:hover': {
              bgcolor: 'rgba(255, 255, 255, 0.24)',
            },
          }}
          aria-label="Close launch announcement"
        >
          <Close fontSize="small" />
        </IconButton>

        <Stack spacing={2.5}>
          <Stack direction="row" spacing={1.5} alignItems="center">
            <Box
              sx={{
                bgcolor: 'rgba(255,255,255,0.18)',
                borderRadius: '50%',
                p: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 6px 18px rgba(0,0,0,0.25)',
              }}
            >
              <Celebration fontSize="medium" />
            </Box>
            <Box>
              <Typography
                variant="subtitle2"
                sx={{ textTransform: 'uppercase', letterSpacing: 1.5, opacity: 0.85 }}
              >
                Mark Your Calendar
              </Typography>
              <Typography variant="h6" component="p" sx={{ fontWeight: 800 }}>
                PMCC Medical Clinic
              </Typography>
            </Box>
          </Stack>

          <Typography
            variant="body1"
            sx={{
              fontSize: '1rem',
              lineHeight: 1.6,
              fontWeight: 500,
              color: 'rgba(255,255,255,0.95)',
            }}
          >
            Join Us - All are welcome for the Free Medical Clinic
          </Typography>

          <Box
            sx={{
              bgcolor: 'rgba(10, 12, 41, 0.55)',
              borderRadius: 3,
              p: 2,
              border: '1px solid rgba(255,255,255,0.18)',
            }}
          >
            <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 1.5 }}>
              <LocalHospital />
              <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                FREE Medical Camp
              </Typography>
            </Stack>

            <Typography
              variant="body2"
              sx={{ color: 'rgba(255,255,255,0.95)', fontWeight: 600, mb: 1.5 }}
            >
              Services to be Offered:
            </Typography>
            <Stack spacing={0.8} sx={{ mb: 2, pl: 1 }}>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.875rem' }}>
                • General Medical Consultations
              </Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.875rem' }}>
                • Blood Pressure & Blood Sugar Screenings
              </Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.875rem' }}>
                • Eye & Dental Check-ups
              </Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.875rem' }}>
                • Nutrition & Wellness Counseling
              </Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.875rem' }}>
                • Family Planning & Maternal Health Services
              </Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.875rem' }}>
                • Drug Rehabilitation Awareness
              </Typography>
            </Stack>

            <Stack spacing={1.2} sx={{ mb: 2 }}>
              <Stack direction="row" spacing={1} alignItems="flex-start">
                <CalendarMonth fontSize="small" sx={{ mt: 0.3 }} />
                <Typography variant="body2" sx={{ fontWeight: 600, color: 'rgba(255,255,255,0.95)' }}>
                  <strong>DATES:</strong> Friday 28th & Saturday 29th November 2025
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="flex-start">
                <AccessTime fontSize="small" sx={{ mt: 0.3 }} />
                <Typography variant="body2" sx={{ fontWeight: 600, color: 'rgba(255,255,255,0.95)' }}>
                  <strong>TIME:</strong> 8:00am – 5:00pm
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="flex-start">
                <LocationOn fontSize="small" sx={{ mt: 0.3 }} />
                <Typography variant="body2" sx={{ fontWeight: 600, color: 'rgba(255,255,255,0.95)' }}>
                  <strong>VENUE:</strong> PMCC Facility
                </Typography>
              </Stack>
            </Stack>

            <Box
              sx={{
                bgcolor: 'rgba(255,255,255,0.12)',
                borderRadius: 2,
                p: 1.5,
                mb: 1.5,
                border: '1px solid rgba(255,255,255,0.2)',
              }}
            >
              <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 0.8 }}>
                <Event fontSize="small" />
                <Typography variant="body2" sx={{ fontWeight: 700, color: '#ffffff' }}>
                  Official Launch of PMCC
                </Typography>
              </Stack>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.95)', pl: 3.5 }}>
                Sunday 30th November 2025
              </Typography>
              <Stack direction="row" spacing={1} alignItems="center" sx={{ pl: 3.5, mt: 0.5 }}>
                <AccessTime fontSize="small" sx={{ fontSize: '0.875rem' }} />
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.95)' }}>
                  10:00am
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center" sx={{ pl: 3.5, mt: 0.5 }}>
                <LocationOn fontSize="small" sx={{ fontSize: '0.875rem' }} />
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.95)' }}>
                  PMCC Facility
                </Typography>
              </Stack>
            </Box>

            <Stack direction="row" spacing={1} alignItems="center">
              <Phone fontSize="small" />
              <Typography variant="body2" sx={{ fontWeight: 600, color: 'rgba(255,255,255,0.95)' }}>
                <strong>Contacts:</strong> 0117 684 003 | 0735 269 968
              </Typography>
            </Stack>
          </Box>

          <ScrollLink to="contact" smooth duration={600} offset={-80}>
            <Button
              fullWidth
              variant="contained"
              sx={{
                bgcolor: '#ffffff',
                color: '#6d1b7b',
                fontWeight: 800,
                py: 1.2,
                boxShadow: '0 12px 28px rgba(0,0,0,0.25)',
                textTransform: 'uppercase',
                letterSpacing: 1.1,
                '&:hover': {
                  bgcolor: 'rgba(255,255,255,0.9)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 16px 34px rgba(13,11,32,0.4)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              RSVP & Get Updates
            </Button>
          </ScrollLink>
        </Stack>
      </Box>
    </Grow>
  );
}