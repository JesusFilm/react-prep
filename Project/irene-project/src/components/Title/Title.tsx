import { ReactElement } from 'react'
import { Typography, Box } from '@mui/material'

interface TitleProps {
  label?: string
}

export default function Title({ label }: TitleProps): ReactElement {
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        mb: 4,
        width: '100%',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: -12,
          left: '50%',
          transform: 'translateX(-50%) rotate(-45deg)',
          width: 40,
          height: 40,
          background: 'linear-gradient(135deg, #ffb3d9 0%, #ff91d4 100%)',
          borderRadius: '50% 50% 0 50%',
          boxShadow: '0 2px 8px rgba(255, 182, 193, 0.4)',
          marginLeft: '-20px',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: -12,
          right: '50%',
          transform: 'translateX(50%) rotate(45deg)',
          width: 40,
          height: 40,
          background: 'linear-gradient(135deg, #ffb3d9 0%, #ff91d4 100%)',
          borderRadius: '50% 50% 50% 0',
          boxShadow: '0 2px 8px rgba(255, 182, 193, 0.4)',
          marginRight: '-20px',
        },
      }}
    >
      <Typography
        variant="h3"
        component="h1"
        sx={{
          mb: 4,
          fontWeight: 700,
          color: '#b84d7a',
          textShadow: '0 2px 4px rgba(255, 255, 255, 0.8)',
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
        }}
      >
        {label || 'Timer App'}
      </Typography>
    </Box>
  )
}
