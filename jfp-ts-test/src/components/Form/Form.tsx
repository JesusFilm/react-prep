'use client';

import { useState, type FormEvent } from 'react';
import {
  Button,
  Card,
  CardContent,
  Stack,
  TextField,
  Typography,
} from '@mui/material';

interface FormProps {
  handleAddTimer: (label: string, durationMinutes: number) => void;
}

export function Form({ handleAddTimer }: FormProps) {
  const [label, setLabel] = useState('');
  const [durationSeconds, setDurationSeconds] = useState('30');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const parsedDuration = Number(durationSeconds);
    if (!Number.isFinite(parsedDuration) || parsedDuration <= 0) {
      return;
    }

    handleAddTimer(label, parsedDuration);
    setLabel('');
    setDurationSeconds('1');
  };

  return (
    <Card sx={{ maxWidth: 480, mx: 'auto', mt: 4, p: 2 }}>
      <CardContent>
        <Stack
          component="form"
          spacing={2}
          onSubmit={handleSubmit}
        >
          <Typography variant="h6">Create a timer</Typography>
          <TextField
            label="Label"
            value={label}
            onChange={event => setLabel(event.target.value)}
            placeholder="e.g. Laundry"
            fullWidth
          />
          <TextField
            label="Duration (seconds)"
            type="number"
            value={durationSeconds}
            onChange={event => setDurationSeconds(event.target.value)}
            inputProps={{ min: 1 }}
            fullWidth
            required
          />
          <Button
            type="submit"
            variant="contained"
            disabled={!durationSeconds || Number(durationSeconds) <= 0}
          >
            Add timer
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}
