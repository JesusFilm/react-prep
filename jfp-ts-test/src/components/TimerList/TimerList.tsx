import type { Timers } from '@/libs/data';
import { Timer } from '../Timer';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

interface TimerListProps {
  timers: Timers;
  handleDeleteTimer: (id: string) => void;
}

export function TimerList({ timers, handleDeleteTimer }: TimerListProps) {
const noTimerCard = (
  <Card sx={{ maxWidth: 480, mx: 'auto', mt: 4, p: 2 }}>
    <CardContent>
      <Typography color="text.secondary" align="center">
        No timers yet. Add your first one above.
      </Typography>
    </CardContent>
  </Card>
);
  return (
    <Stack spacing={2} sx={{ maxWidth: 480, mx: 'auto', mt: 4 }}>
      {timers.length === 0 ? noTimerCard : timers.map(timer => {
        return (
          <Timer key={timer.id} timer={timer} handleDeleteTimer={handleDeleteTimer} />
        );
      })}
    </Stack>
  );
}

