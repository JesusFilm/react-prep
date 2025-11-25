import { createTheme } from '@mui/material/styles'
import type { AppProps } from 'next/app'
import { Main } from '../Components/Main'

export default function App({ Component, pageProps }: AppProps) {
  const theme = createTheme({
    palette: {
      mode: 'light',
    },
  })

  return <Main />
}
