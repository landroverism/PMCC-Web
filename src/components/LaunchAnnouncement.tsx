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
import { Celebration, Close, LocalHospital, CalendarMonth } from '@mui/icons-material';
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
          overflow: 'hidden',
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
                PMCC Website & Rehab Centre Launch
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
            We unveil the new PMCC website and our revitalized rehabilitation facility on{' '}
            <Typography component="span" sx={{ fontWeight: 800 }}>
              30 November 2025
            </Typography>
            . Step into a bold, compassionate chapter of healing and whole-person care.
          </Typography>

          <Box
            sx={{
              bgcolor: 'rgba(10, 12, 41, 0.55)',
              borderRadius: 3,
              p: 2,
              border: '1px solid rgba(255,255,255,0.18)',
            }}
          >
            <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 1 }}>
              <LocalHospital />
              <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                Free Community Medical Clinic
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
              <CalendarMonth fontSize="small" />
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                28 & 29 November 2025 · 9:00 AM – 5:00 PM
              </Typography>
            </Stack>
            <Typography
              variant="body2"
              sx={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.6 }}
            >
              Walk-in screenings for mental wellness, addiction recovery guidance, family
              counselling previews, vitals checks, stress relief workshops, and pastoral
              support—all absolutely free and open-air for the community.
            </Typography>
            <Chip
              label="Everyone is welcome"
              icon={<LocalHospital fontSize="small" />}
              sx={{
                mt: 1.5,
                bgcolor: 'rgba(255,255,255,0.18)',
                color: '#ffffff',
                fontWeight: 600,
              }}
            />
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