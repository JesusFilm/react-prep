import { Container, Stack, Typography, Paper } from '@mui/material'
import { UseStateExample } from '../Components/State'

export default function UseStatePage() {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Stack spacing={3} alignItems="center">
        <Typography variant="h4" component="h1">
          useState
        </Typography>
        <Paper variant="outlined" sx={{ width: '100%', p: 3 }}>
          <UseStateExample />
        </Paper>
      </Stack>
    </Container>
  )
}
