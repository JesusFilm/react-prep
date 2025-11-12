import { Button, Card, CardContent, Stack, Typography } from '@mui/material';
import type { Timer } from '@/libs/data';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Image from 'next/image';

interface TimerProps {
  timer: Timer;
  handleDeleteTimer: (id: string) => void;
}

export function Timer({ timer, handleDeleteTimer }: TimerProps) {
  const isComplete = timer.remainingSeconds <= 0;
  const [catFact, setCatFact] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isComplete) return;
    async function getRandomQuote() {
      try{
        setLoading(true);
        const response = await axios.get('https://meowfacts.herokuapp.com/');
        setCatFact(response.data.data[0]);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching quote:', error);
        setLoading(false);
      }
    }
    getRandomQuote();
  }, [isComplete]);
  
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
                 { isComplete ? loading ? <Image src="/nyan-cat.gif" alt="Nyan Cat" height={100} width={200} /> : <Typography variant="body1">{catFact}</Typography> : (
                  <>
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
                  </>
                )}
                </Stack>
                <Button
                  color="error"
                  onClick={() => handleDeleteTimer(timer.id)}
                >
                  Delete
                </Button>
              </Stack>
            </CardContent>
          </Card>
        </Stack>
  );
}
