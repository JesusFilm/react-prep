'use client'

import {
  TextField,
  Typography,
  Card,
  CardContent,
  Stack,
} from '@mui/material';
import { PomodoroConfig, TimerState } from '@/libs/data';

interface FormProps {
  config: PomodoroConfig;
  status: TimerState;
  onUpdate: (config: PomodoroConfig) => void;
}

export function Form({ config, status, onUpdate }: FormProps) {
  const isDisabled = status !== TimerState.IDLE;

  const handleChange = (key: keyof PomodoroConfig, rawValue: number) => {
    if (isDisabled || Number.isNaN(rawValue)) return;
    const value = Math.max(1, Math.floor(rawValue));
    onUpdate({ ...config, [key]: value });
  };

  return (
    <Card sx={{ maxWidth: 400, mx: 'auto', mt: 4, p: 2 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Pomodoro Settings
        </Typography>

        <Stack spacing={2}>
          <TextField
            label="Session Duration (min)"
            type="number"
            value={config.sessionDuration}
            onChange={e => handleChange('sessionDuration', Number(e.target.value))}
            disabled={isDisabled}
            fullWidth
            inputProps={{ min: 1 }}
          />

          <TextField
            label="Short Break (min)"
            type="number"
            value={config.shortBreakDuration}
            onChange={e => handleChange('shortBreakDuration', Number(e.target.value))}
            disabled={isDisabled}
            fullWidth
            inputProps={{ min: 1 }}
          />

          <TextField
            label="Long Break (min)"
            type="number"
            value={config.longBreakDuration}
            onChange={e => handleChange('longBreakDuration', Number(e.target.value))}
            disabled={isDisabled}
            fullWidth
            inputProps={{ min: 1 }}
          />

          <TextField
            label="Sessions Before Long Break"
            type="number"
            value={config.sessionsBeforeLongBreak}
            onChange={e => handleChange('sessionsBeforeLongBreak', Number(e.target.value))}
            disabled={isDisabled}
            fullWidth
            inputProps={{ min: 1 }}
          />
        </Stack>
      </CardContent>
    </Card>
  );
}
