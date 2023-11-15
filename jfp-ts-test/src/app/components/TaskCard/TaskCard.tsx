import { CardContent, Typography } from '@mui/material'
import { ReactElement } from 'react'
import { Card } from '@mui/material'
import { Task } from '@/app/libs/data'
export function TaskCard({ name, completed }: Task): ReactElement {
  let statusTask = ''

  if (completed === true) {
    statusTask = 'Done'
  } else {
    statusTask = 'Not Done'
  }

  return (
    <>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h3">{name}</Typography>
          <Typography variant="h3">{statusTask}</Typography>
        </CardContent>
      </Card>
    </>
  )
}
