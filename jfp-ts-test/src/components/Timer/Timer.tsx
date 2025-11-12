import { Button, Card, CardContent, Stack, Typography } from '@mui/material';
import { PomodoroState, TimerState } from '@/libs/data';

interface TimerProps {
  pomodoroState: PomodoroState;
  onStart: () => void;
  onPause: () => void;
  onResume: () => void;
  onReset: () => void;
  onSkip: () => void;
  canReset: boolean;
}

const formatTime = (totalSeconds: number) => {
  const minutes = Math.floor(totalSeconds / 60)
    .toString()
    .padStart(2, '0');
  const seconds = (totalSeconds % 60).toString().padStart(2, '0');
  return `${minutes}:${seconds}`;
};

export function Timer({
  pomodoroState,
  onStart,
  onPause,
  onResume,
  onReset,
  onSkip,
  canReset,
}: TimerProps) {
  const isRunning = pomodoroState.status === TimerState.RUNNING;
  const isPaused = pomodoroState.status === TimerState.PAUSED;
  const isIdle = pomodoroState.status === TimerState.IDLE;

  return (
    <Card sx={{ maxWidth: 400, mx: 'auto', mt: 4, p: 2 }}>
      <CardContent>
        <Stack spacing={2} alignItems="center">
          <Typography variant="h5">
            {pomodoroState.isBreak ? 'Break Time' : 'Focus Session'}
          </Typography>
          <Typography variant="h2" component="p" sx={{ fontVariantNumeric: 'tabular-nums' }}>
            {formatTime(pomodoroState.timeLeft)}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Completed Sessions: {pomodoroState.completedSessions}
          </Typography>
          <Stack direction="row" spacing={2}>
            {isIdle && (
              <Button variant="contained" onClick={onStart}>
                Start
              </Button>
            )}

            {isRunning && (
              <Button variant="outlined" onClick={onPause}>
                Stop
              </Button>
            )}

            {isPaused && (
              <Button variant="contained" onClick={onResume}>
                Resume
              </Button>
            )}

            <Button
              variant="outlined"
              color="secondary"
              onClick={onSkip}
              disabled={isIdle}
            >
              Skip
            </Button>

            <Button variant="text" onClick={onReset} disabled={!canReset}>
              Reset
            </Button>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}