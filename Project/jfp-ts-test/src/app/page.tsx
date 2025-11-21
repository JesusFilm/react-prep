'use client'

import { SnackbarProvider } from 'notistack'
import { Main } from '../components/Main'

export default function Home() {
  return (
    <div>
      <SnackbarProvider
        maxSnack={1}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Main />
      </SnackbarProvider>
    </div>
  )
}
