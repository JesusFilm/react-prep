'use client';

import { useEffect, useMemo, useState, type ReactElement } from 'react';
import { Form } from '../Form';
import { PomodoroConfig, TimerState } from '@/libs/data';
import { Timer } from '../Timer';
import { usePomodoroTimer } from '@/hooks/usePomodoroTimer';

const defaultConfig: PomodoroConfig = {
  sessionDuration: 25,
  shortBreakDuration: 5,
  longBreakDuration: 15,
  sessionsBeforeLongBreak: 4,
};

export function Main(): ReactElement {
  const [config, setConfig] = useState<PomodoroConfig>(defaultConfig);
  const { pomodoroState, start, pause, resume, reset, skip } = usePomodoroTimer(config);

  useEffect(() => {
    if (pomodoroState.status === TimerState.IDLE) {
      reset();
    }
  }, [config, reset, pomodoroState.status]);

  const canReset = useMemo(() => {
      if (pomodoroState.status !== TimerState.IDLE) return true;
    if (pomodoroState.completedSessions > 0) return true;
    if (pomodoroState.isBreak) return true;
    return pomodoroState.timeLeft !== config.sessionDuration * 60;
  }, [config.sessionDuration, pomodoroState]);

  return (
    <>
      <Form config={config} status={pomodoroState.status} onUpdate={setConfig} />
      <Timer
        pomodoroState={pomodoroState}
        onStart={start}
        onPause={pause}
        onResume={resume}
        onReset={reset}
        onSkip={skip}
        canReset={canReset}
      />
    </>
  );
}

