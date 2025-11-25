import { ReactElement, useState } from 'react'
import {
  TextField,
  Button,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

interface FormProps {
  open: boolean
  onClose: () => void
  onAddTimer: (label: string, durationSeconds: number) => void
}

export default function Form({
  open,
  onClose,
  onAddTimer,
}: FormProps): ReactElement {
  const [label, setLabel] = useState('')
  const [duration, setDuration] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const durationSeconds = parseInt(duration, 10)

    if (label.trim() && durationSeconds > 0) {
      onAddTimer(label.trim(), durationSeconds)
      setLabel('')
      setDuration('')
      onClose()
    }
  }

  const handleClose = () => {
    setLabel('')
    setDuration('')
    onClose()
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          background: 'linear-gradient(135deg, #ffe6f2 0%, #ffccf0 100%)',
          borderRadius: 3,
          boxShadow: '0 8px 24px rgba(255, 182, 193, 0.3)',
          border: '2px solid #ffb3d9',
          position: 'relative',
          overflow: 'visible',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: -8,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 50,
            height: 16,
            background: 'linear-gradient(135deg, #ffb3d9 0%, #ff91d4 100%)',
            borderRadius: '50% 50% 0 0',
            boxShadow: '0 2px 8px rgba(255, 182, 193, 0.4)',
            zIndex: 1,
          },
        },
      }}
    >
      <DialogTitle
        sx={{
          color: '#b84d7a',
          fontWeight: 600,
          pb: 2,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        Create New Timer
        <IconButton
          onClick={handleClose}
          sx={{
            color: '#b84d7a',
            '&:hover': {
              background: 'rgba(255, 182, 193, 0.2)',
            },
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <Box component="form" onSubmit={handleSubmit}>
        <DialogContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            pt: 2,
          }}
        >
          <TextField
            label="Timer Label"
            variant="outlined"
            value={label}
            onChange={(e) => setLabel(e.target.value)}
            fullWidth
            sx={{
              '& .MuiOutlinedInput-root': {
                background: '#fff',
                '& fieldset': {
                  borderColor: '#ffb3d9',
                  borderWidth: 2,
                },
                '&:hover fieldset': {
                  borderColor: '#ff91d4',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#ff91d4',
                },
              },
              '& .MuiInputLabel-root': {
                color: '#b84d7a',
                '&.Mui-focused': {
                  color: '#b84d7a',
                },
              },
            }}
          />
          <TextField
            label="Duration (seconds)"
            variant="outlined"
            type="number"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            fullWidth
            sx={{
              '& .MuiOutlinedInput-root': {
                background: '#fff',
                '& fieldset': {
                  borderColor: '#ffb3d9',
                  borderWidth: 2,
                },
                '&:hover fieldset': {
                  borderColor: '#ff91d4',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#ff91d4',
                },
              },
              '& .MuiInputLabel-root': {
                color: '#b84d7a',
                '&.Mui-focused': {
                  color: '#b84d7a',
                },
              },
            }}
          />
        </DialogContent>
        <DialogActions
          sx={{
            px: 3,
            pb: 3,
            display: 'flex',
            justifyContent: 'flex-end',
            gap: 2,
          }}
        >
          <Button
            onClick={handleClose}
            variant="outlined"
            sx={{
              color: '#b84d7a',
              borderColor: '#ffb3d9',
              fontWeight: 600,
              '&:hover': {
                borderColor: '#ff91d4',
                background: 'rgba(255, 182, 193, 0.1)',
              },
            }}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant="contained"
            size="large"
            sx={{
              py: 1.5,
              px: 3,
              background: 'linear-gradient(135deg, #ff91d4 0%, #ffb3d9 100%)',
              color: '#fff',
              fontWeight: 600,
              boxShadow: '0 4px 12px rgba(255, 182, 193, 0.4)',
              border: '2px solid #ffb3d9',
              '&:hover': {
                background: 'linear-gradient(135deg, #ffb3d9 0%, #ff91d4 100%)',
                boxShadow: '0 6px 16px rgba(255, 182, 193, 0.5)',
                transform: 'translateY(-2px)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            Create Timer
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  )
}
