import { Button, Card, CardContent, Stack, Typography } from '@mui/material';
import type { Timer } from '@/libs/data';

interface TimerProps {
  timer: Timer;
  onDeleteTimer: (id: string) => void;
}

export function Timer({ timer, onDeleteTimer }: TimerProps) {
  const isComplete = timer.remainingSeconds <= 0;
  
  function formatTime(totalSeconds: number) {
    const minutes = Math.floor(totalSeconds / 60)
      .toString()
      .padStart(2, '0');
    const seconds = (totalSeconds % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  return (
    <Stack spacing={2} sx={{ maxWidth: 480, mx: 'auto', mt: 4 }}>
      <Card key={timer.id}>
        <CardContent>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            spacing={2}
          >
            <Stack spacing={0.5}>
                  <Typography variant="subtitle2" color="text.secondary">
                    {timer.label || 'Timer'}
                  </Typography>
                  <Typography
                    variant="h4"
                    component="p"
                    sx={{ fontVariantNumeric: 'tabular-nums' }}
                  >
                    {formatTime(timer.remainingSeconds)}
                  </Typography>
                  {isComplete && (
                    <Typography variant="body2" color="success.main">
                      Complete
                    </Typography>
                  )}
                </Stack>
                <Button
                  color="error"
                  onClick={() => onDeleteTimer(timer.id)}
                >
                  Delete
                </Button>
              </Stack>
            </CardContent>
          </Card>
        </Stack>
  );
}
