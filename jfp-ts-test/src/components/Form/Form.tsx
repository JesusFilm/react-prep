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
  const [durationMinutes, setDurationMinutes] = useState('1');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const parsedDuration = Number(durationMinutes);
    if (!Number.isFinite(parsedDuration) || parsedDuration <= 0) {
      return;
    }

    handleAddTimer(label, parsedDuration);
    setLabel('');
    setDurationMinutes('1');
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
            label="Duration (minutes)"
            type="number"
            value={durationMinutes}
            onChange={event => setDurationMinutes(event.target.value)}
            inputProps={{ min: 1 }}
            fullWidth
            required
          />
          <Button
            type="submit"
            variant="contained"
            disabled={!durationMinutes || Number(durationMinutes) <= 0}
          >
            Add timer
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}
