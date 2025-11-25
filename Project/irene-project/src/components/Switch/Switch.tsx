'use client'

import { ReactElement, useState } from 'react'
import {
  Switch as MuiSwitch,
  FormControlLabel,
  Box,
  Typography,
} from '@mui/material'

interface SwitchProps {
  label?: string
  defaultChecked?: boolean
  disabled?: boolean
  color?:
    | 'primary'
    | 'secondary'
    | 'error'
    | 'info'
    | 'success'
    | 'warning'
    | 'default'
  size?: 'small' | 'medium'
}

export default function Switch(props: SwitchProps): ReactElement {
  const {
    label = 'Switch',
    defaultChecked = false,
    disabled = false,
    color = 'primary',
    size = 'medium',
  } = props

  const [checked, setChecked] = useState<boolean>(defaultChecked)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked)
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        p: 2,
        borderRadius: 2,
        background: checked
          ? 'linear-gradient(135deg, #ffe6f2 0%, #ffccf0 100%)'
          : 'transparent',
        border: checked ? '2px solid #ffb3d9' : '2px solid transparent',
        transition: 'all 0.3s ease',
        boxShadow: checked
          ? '0 4px 12px rgba(255, 182, 193, 0.2)'
          : 'none',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}
      >
        <FormControlLabel
          control={
            <MuiSwitch
              checked={checked}
              onChange={handleChange}
              disabled={disabled}
              color={color}
              size={size}
              sx={{
                '& .MuiSwitch-switchBase.Mui-checked': {
                  color: '#ff91d4',
                },
                '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                  backgroundColor: '#ffb3d9',
                },
              }}
            />
          }
          label={label}
          sx={{
            '& .MuiFormControlLabel-label': {
              fontWeight: checked ? 600 : 400,
              color: checked ? '#b84d7a' : 'inherit',
              transition: 'all 0.3s ease',
            },
          }}
        />
      </Box>
      {checked && (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            ml: 4,
          }}
        >
          <Typography
            variant="caption"
            sx={{
              color: '#b84d7a',
              fontWeight: 500,
              fontSize: '0.75rem',
            }}
          >
            Switch is ON
          </Typography>
        </Box>
      )}
    </Box>
  )
}
