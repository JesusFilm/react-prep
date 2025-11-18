import { ReactElement, useEffect, useState } from 'react'
import {
  Box,
  Button,
  ButtonGroup,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Skeleton,
} from '@mui/material'
import { Countries } from './libs/countryData'
import { Country, getCountry } from './libs/getCountry'

export function UseEffectExample(): ReactElement {
  const [selectedCountry, setSelectedCountry] = useState<Countries>(
    Countries.Japan
  )
  const [loading, setLoading] = useState<boolean | null>(false)
  const [result, setResult] = useState<Country | null>({
    name: 'Hello World',
    imageUrl:
      'https://images.unsplash.com/photo-1644792863360-40fa85ea52e7?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'helloWorld',
    description: 'Hello World is a simple greeting.',
  })

  // 1. explain async - show function

  // 2. get results - use run function
  // 3. set results
  // 4. loading state

  // 5. useEffect dependency array

  return (
    <Box display="flex" flexDirection="column" gap={2} alignItems="center">
      {/* <ButtonGroup variant="outlined" aria-label="country selector">
        {Object.values(Countries).map((country) => (
          <Button
            key={country}
            variant={selectedCountry === country ? "contained" : "outlined"}
            onClick={() => {
              if (country !== selectedCountry) {
                setSelectedCountry(country);
              }
            }}
          >
            {country}
          </Button>
        ))}
      </ButtonGroup> */}

      <Card variant="outlined" sx={{ width: 360 }}>
        <Box sx={{ width: '100%', height: 200, overflow: 'hidden' }}>
          {loading ? (
            <Skeleton
              variant="rectangular"
              width="100%"
              height="100%"
              animation="wave"
            />
          ) : (
            <CardMedia
              component="img"
              image={result?.imageUrl ?? undefined}
              alt={result?.alt ?? 'Country scenery'}
              sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          )}
        </Box>
        <CardContent>
          {loading ? (
            <Box sx={{ width: '100%' }}>
              <Skeleton variant="text" width="80%" animation="wave" />
              <Skeleton variant="text" width="60%" animation="wave" />
              <Skeleton variant="text" width="70%" animation="wave" />
            </Box>
          ) : (
            <Typography>{result?.description}</Typography>
          )}
        </CardContent>
      </Card>
    </Box>
  )
}
