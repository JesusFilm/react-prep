import { Box, Container } from '@mui/material'
import { Main } from '../components/Main'

export default function Home() {
  return (
    <Box
      sx={{
        height: 'auto',
        width: 'auto',
        minWidth: '100%',
        minHeight: '100%',
        background:
          'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',
        backgroundSize: '400% 400%',
        animation: '$gradient 15s ease infinite',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'top',

          height: '100vh',
          minWidth: '100%',
          minHeight: '100%',
        }}
      >
        <Main />
      </Box>
    </Box>
  )
}
