import { Container, Stack, Paper } from '@mui/material'
import { UseMuiExample } from '../Components/Mui'
import { NoMuiExample } from '../Components/Mui/noMuiExample'

export default function UseMuiPage() {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Stack alignItems="center">
        <Paper variant="outlined" sx={{ width: '100%', p: 3}}>
          <Stack spacing={3} alignItems="center" sx={{width: '100%'}}>
          <NoMuiExample />
          <UseMuiExample />
          </Stack>
        </Paper>
      </Stack>
    </Container>
  )
}
