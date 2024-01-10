import { Container } from '@mui/material'
import { Main } from '../components/Main'
import { purple } from '@mui/material/colors'

export default function Home() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Main />
    </Container>
  )
}
