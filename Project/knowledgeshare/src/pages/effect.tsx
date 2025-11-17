import { Container, Stack, Typography, Paper } from '@mui/material'
import { UseEffectExample } from '../Components/Effect'

export default function UseEffectPage() {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Stack spacing={3} alignItems="center">
        <Typography variant="h4" component="h1">
          useEffect
        </Typography>
        <Paper variant="outlined" sx={{ width: '100%', p: 3 }}>
          <UseEffectExample />
        </Paper>
      </Stack>
    </Container>
  )
}
