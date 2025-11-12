'use client';

import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState, type ReactElement } from 'react';
import { Form } from '../Form';
import { TimerList } from '../TimerList';
import { Title } from '../Title';
import type { Timer, Timers } from '@/libs/data';

export function Main(): ReactElement {
  const [timers, setTimers] = useState<Timers>([]);

  function createTimer(label: string, durationSeconds: number): Timer {
    const safeDuration = Math.max(1, durationSeconds);
  
    return {
      id: uuidv4(),
      label: label.trim() || 'Timer',
      durationSeconds: safeDuration,
      remainingSeconds: safeDuration,
      isRunning: true,
    };
  }

  const hasRunningTimer = timers.some(
    timer => timer.isRunning && timer.remainingSeconds > 0
  );

  useEffect(() => {
    if (!hasRunningTimer) {
      return;
    }

    let timeoutId: ReturnType<typeof setTimeout>;

    const tick = () => {
      setTimers(prevTimers =>
        prevTimers.map(timer => {
          if (!timer.isRunning) {
            return timer;
          }

          const nextRemaining = Math.max(0, timer.remainingSeconds - 1);
          if (nextRemaining === timer.remainingSeconds) {
            return timer;
          }

          return {
            ...timer,
            remainingSeconds: nextRemaining,
            isRunning: nextRemaining > 0,
          };
        })
      );

      timeoutId = setTimeout(tick, 1000);
    };

    timeoutId = setTimeout(tick, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [hasRunningTimer]);

  function handleAddTimer(label: string, durationMinutes: number) {
    const durationSeconds = Math.max(1, Math.floor(durationMinutes * 60));
    setTimers(prev => [...prev, createTimer(label, durationSeconds)]);
  };

  function handleDeleteTimer(id: string) {
    setTimers(prev => prev.filter(timer => timer.id !== id));
  };

  return (
    <>
      <Title label="Timer App" />
      <Form handleAddTimer={handleAddTimer} />
      <TimerList timers={timers} handleDeleteTimer={handleDeleteTimer} />
    </>
  );
}

