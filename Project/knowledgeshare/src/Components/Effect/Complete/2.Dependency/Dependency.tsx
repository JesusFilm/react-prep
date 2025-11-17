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
import { Countries } from '../../libs/countryData'
import { Country, getCountry } from '../../libs/getCountry'

export function Dependency(): ReactElement {
  const [selectedCountry, setSelectedCountry] = useState<Countries>(
    Countries.Japan
  )
  const [loading, setLoading] = useState<boolean | null>(true)
  const [result, setResult] = useState<Country | null>(null)
  const [option, setOption] = useState('jpg')

  useEffect(() => {
    async function run() {
      setLoading(true)
      const result = await getCountry(selectedCountry)
      setResult(result)
      setLoading(false)
    }

    run()
  }, [selectedCountry])

  return (
    <Box display="flex" flexDirection="column" gap={2} alignItems="center">
      <ButtonGroup variant="outlined" aria-label="country selector">
        {Object.values(Countries).map((country) => (
          <Button
            key={country}
            variant={selectedCountry === country ? 'contained' : 'outlined'}
            onClick={() => {
              if (country !== selectedCountry) {
                setSelectedCountry(country)
              }
            }}
          >
            {country}
          </Button>
        ))}
      </ButtonGroup>

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

      <ButtonGroup variant="outlined">
        <Button
          onClick={() => {
            setOption('jpg')
          }}
          variant={option === 'jpg' ? 'contained' : 'outlined'}
        >
          JPG
        </Button>
        <Button
          onClick={() => {
            setOption('png')
          }}
          variant={option === 'png' ? 'contained' : 'outlined'}
        >
          PNG
        </Button>
      </ButtonGroup>
    </Box>
  )
}
