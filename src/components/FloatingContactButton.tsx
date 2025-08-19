import { Fab, Tooltip, Box, Typography, Fade } from '@mui/material';
import { Phone, WhatsApp, Email } from '@mui/icons-material';
import { useState } from 'react';

export default function FloatingContactButton() {
  const [isExpanded, setIsExpanded] = useState(false);

  const contactMethods = [
    {
      icon: <Phone />,
      label: 'Call Now',
      action: 'tel:+254700000000',
      color: '#25D366'
    },
    {
      icon: <WhatsApp />,
      label: 'WhatsApp',
      action: 'https://wa.me/254700000000',
      color: '#25D366'
    },
    {
      icon: <Email />,
      label: 'Email',
      action: 'mailto:info@pmcc-nakuru.co.ke',
      color: '#1976d2'
    }
  ];

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 20,
        right: 20,
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: 2
      }}
    >
      {/* Contact Methods */}
      <Fade in={isExpanded} timeout={300}>
        <Box sx={{ display: isExpanded ? 'flex' : 'none', flexDirection: 'column', gap: 1 }}>
          {contactMethods.map((method, index) => (
            <Tooltip key={method.label} title={method.label} placement="left">
              <Fab
                size="medium"
                sx={{
                  bgcolor: method.color,
                  color: 'white',
                  '&:hover': { bgcolor: method.color, transform: 'scale(1.1)' },
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
                }}
                component="a"
                href={method.action}
                target="_blank"
                rel="noopener noreferrer"
              >
                {method.icon}
              </Fab>
            </Tooltip>
          ))}
        </Box>
      </Fade>

      {/* Main Contact Button */}
      <Tooltip title={isExpanded ? "Close" : "Get Help Now"} placement="left">
        <Fab
          size="large"
          color="secondary"
          onClick={() => setIsExpanded(!isExpanded)}
          sx={{
            bgcolor: 'secondary.main',
            color: 'white',
            '&:hover': { 
              bgcolor: 'secondary.dark',
              transform: 'scale(1.05)'
            },
            transition: 'all 0.3s ease',
            boxShadow: '0 6px 20px rgba(0,0,0,0.4)',
            position: 'relative'
          }}
        >
          {isExpanded ? '✕' : '💬'}
        </Fab>
      </Tooltip>

      {/* Emergency Text */}
      <Box
        sx={{
          position: 'absolute',
          right: 80,
          bottom: 0,
          bgcolor: 'rgba(0,0,0,0.8)',
          color: 'white',
          px: 2,
          py: 1,
          borderRadius: 2,
          fontSize: '0.75rem',
          whiteSpace: 'nowrap',
          opacity: isExpanded ? 1 : 0,
          transition: 'opacity 0.3s ease',
          pointerEvents: 'none'
        }}
      >
        <Typography variant="caption" sx={{ fontWeight: 'bold' }}>
          24/7 Help Available
        </Typography>
      </Box>
    </Box>
  );
}
