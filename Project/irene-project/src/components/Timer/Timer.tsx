import { FC, useState, useEffect } from 'react'
import { TimerModel } from '@/libs/data'
import {
  Card,
  CardContent,
  Typography,
  Chip,
  Box,
  LinearProgress,
  IconButton,
  Avatar,
  CircularProgress,
} from '@mui/material'
import AccessTime from '@mui/icons-material/AccessTime'
import CheckCircle from '@mui/icons-material/CheckCircle'
import RadioButtonUnchecked from '@mui/icons-material/RadioButtonUnchecked'
import Delete from '@mui/icons-material/Delete'

export interface TimerProps extends TimerModel {
  onDelete: (id: string) => void
}

const Timer: FC<TimerProps> = (props) => {
  const { label, remainingSeconds, isRunning, id, onDelete, serverAddress } =
    props
  const completed = remainingSeconds === 0
  const minutes = Math.floor(remainingSeconds / 60)
  const seconds = remainingSeconds % 60
  const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds
    .toString()
    .padStart(2, '0')}`
  const [iconUrl, setIconUrl] = useState<string | null>(null)
  const [iconLoading, setIconLoading] = useState(false)
  const [iconError, setIconError] = useState(false)

  useEffect(() => {
    if (serverAddress) {
      setIconLoading(true)
      setIconError(false)
      const encodedAddress = encodeURIComponent(serverAddress)
      const iconApiUrl = `https://api.mcsrvstat.us/icon/${encodedAddress}`

      // Create an image to test if the URL is valid
      const img = new Image()

      img.onload = () => {
        setIconUrl(iconApiUrl)
        setIconLoading(false)
        setIconError(false)
      }

      img.onerror = () => {
        setIconLoading(false)
        setIconError(true)
        setIconUrl(null)
      }

      img.src = iconApiUrl
    } else {
      setIconUrl(null)
      setIconLoading(false)
      setIconError(false)
    }
  }, [serverAddress])

  return (
    <Box
      sx={{
        position: 'relative',
        mb: 3,
        '&::before': {
          content: '""',
          position: 'absolute',
          top: -8,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 60,
          height: 20,
          background: 'linear-gradient(135deg, #ffb3d9 0%, #ff91d4 100%)',
          borderRadius: '50% 50% 0 0',
          boxShadow: '0 2px 8px rgba(255, 182, 193, 0.4)',
          zIndex: 2,
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: -10,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 40,
          height: 40,
          background: 'linear-gradient(135deg, #ffb3d9 0%, #ff91d4 100%)',
          borderRadius: '50%',
          boxShadow: '0 2px 8px rgba(255, 182, 193, 0.4)',
          zIndex: 1,
        },
      }}
    >
      {/* Ribbon decorations */}
      <Box
        sx={{
          position: 'absolute',
          top: -12,
          left: '10%',
          width: 30,
          height: 30,
          background: 'linear-gradient(135deg, #ffb3d9 0%, #ff91d4 100%)',
          borderRadius: '50% 50% 50% 0',
          transform: 'rotate(-45deg)',
          boxShadow: '0 2px 6px rgba(255, 182, 193, 0.3)',
          zIndex: 1,
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 8,
            left: 8,
            width: 14,
            height: 14,
            background: '#ffb3d9',
            borderRadius: '50%',
          },
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: -12,
          right: '10%',
          width: 30,
          height: 30,
          background: 'linear-gradient(135deg, #ffb3d9 0%, #ff91d4 100%)',
          borderRadius: '50% 50% 0 50%',
          transform: 'rotate(45deg)',
          boxShadow: '0 2px 6px rgba(255, 182, 193, 0.3)',
          zIndex: 1,
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 8,
            right: 8,
            width: 14,
            height: 14,
            background: '#ffb3d9',
            borderRadius: '50%',
          },
        }}
      />
      <Card
        sx={{
          background: 'linear-gradient(135deg, #ffe6f2 0%, #ffccf0 100%)',
          boxShadow: '0 8px 24px rgba(255, 182, 193, 0.3)',
          border: completed ? '3px solid' : '2px solid',
          borderColor: completed ? '#ff91d4' : '#ffb3d9',
          borderRadius: 3,
          transition: 'all 0.3s ease',
          position: 'relative',
          zIndex: 0,
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 12px 32px rgba(255, 182, 193, 0.4)',
          },
        }}
      >
        <CardContent
          sx={{
            py: 3,
            px: 3,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              mb: 2,
              flexWrap: 'wrap',
              gap: 1,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                flex: 1,
              }}
            >
              {iconLoading && (
                <CircularProgress
                  size={40}
                  sx={{
                    color: '#ffb3d9',
                  }}
                />
              )}
              {!iconLoading && iconUrl && (
                <Avatar
                  src={iconUrl}
                  alt={`${serverAddress} server icon`}
                  sx={{
                    width: 40,
                    height: 40,
                    border: '2px solid #ffb3d9',
                    boxShadow: '0 2px 8px rgba(255, 182, 193, 0.3)',
                  }}
                />
              )}
              {!iconLoading && iconError && (
                <Avatar
                  sx={{
                    width: 40,
                    height: 40,
                    border: '2px solid #ffb3d9',
                    bgcolor: '#ffe6f2',
                    color: '#b84d7a',
                    fontSize: 20,
                  }}
                >
                  ?
                </Avatar>
              )}
              <Typography
                variant="h5"
                component="h2"
                sx={{
                  fontWeight: 600,
                  color: '#b84d7a',
                  textShadow: '0 1px 2px rgba(255, 255, 255, 0.8)',
                }}
              >
                {label}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Chip
                icon={completed ? <CheckCircle /> : <RadioButtonUnchecked />}
                label={
                  completed ? 'Completed' : isRunning ? 'Running' : 'Paused'
                }
                sx={{
                  background: completed
                    ? 'linear-gradient(135deg, #ff91d4 0%, #ffb3d9 100%)'
                    : isRunning
                    ? 'linear-gradient(135deg, #ffb3d9 0%, #ff91d4 100%)'
                    : '#fff',
                  color: '#b84d7a',
                  fontWeight: 600,
                  border: '2px solid #ffb3d9',
                  boxShadow: '0 2px 6px rgba(255, 182, 193, 0.3)',
                  '& .MuiChip-icon': {
                    color: '#b84d7a',
                  },
                }}
              />
              <IconButton
                onClick={() => onDelete(id)}
                sx={{
                  color: '#b84d7a',
                  '&:hover': {
                    background: 'rgba(255, 182, 193, 0.2)',
                    transform: 'scale(1.1)',
                  },
                  transition: 'all 0.2s ease',
                }}
                aria-label="delete timer"
              >
                <Delete />
              </IconButton>
            </Box>
          </Box>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              mb: 2,
              justifyContent: 'center',
            }}
          >
            <AccessTime sx={{ color: '#d975a0', fontSize: 32 }} />
            <Typography
              variant="h4"
              component="div"
              sx={{
                fontFamily: 'monospace',
                fontWeight: 700,
                color: '#b84d7a',
                textShadow: '0 1px 2px rgba(255, 255, 255, 0.8)',
              }}
            >
              {formattedTime}
            </Typography>
          </Box>

          {!completed && (
            <LinearProgress
              variant="determinate"
              value={
                ((props.durationSeconds - remainingSeconds) /
                  props.durationSeconds) *
                100
              }
              sx={{
                height: 10,
                borderRadius: 5,
                background: '#fff',
                '& .MuiLinearProgress-bar': {
                  background:
                    'linear-gradient(90deg, #ff91d4 0%, #ffb3d9 50%, #ffccf0 100%)',
                  borderRadius: 5,
                },
              }}
            />
          )}
        </CardContent>
      </Card>
    </Box>
  )
}

export default Timer
