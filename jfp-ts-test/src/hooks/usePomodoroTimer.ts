import { useCallback, useEffect, useMemo, useState } from 'react';
import { PomodoroConfig, PomodoroState, TimerState } from '@/libs/data';

const toSeconds = (minutes: number) => Math.max(1, minutes) * 60;

const createInitialState = (config: PomodoroConfig): PomodoroState => ({
  status: TimerState.IDLE,
  isBreak: false,
  completedSessions: 0,
  timeLeft: toSeconds(config.sessionDuration),
});

const getBreakDuration = (config: PomodoroConfig, completedSessions: number) => {
  if (completedSessions === 0) {
    return toSeconds(config.shortBreakDuration);
  }

  const useLongBreak =
    completedSessions % config.sessionsBeforeLongBreak === 0;
  return useLongBreak
    ? toSeconds(config.longBreakDuration)
    : toSeconds(config.shortBreakDuration);
};

export interface PomodoroControls {
  pomodoroState: PomodoroState;
  start: () => void;
  pause: () => void;
  resume: () => void;
  reset: () => void;
  skip: () => void;
}

export function usePomodoroTimer(config: PomodoroConfig): PomodoroControls {
  const [pomodoroState, setPomodoroState] = useState<PomodoroState>(() =>
    createInitialState(config)
  );

  const advancePhase = useCallback((prev: PomodoroState): PomodoroState => {
    if (!prev.isBreak) {
      const completedSessions = prev.completedSessions + 1;
      const breakDuration = getBreakDuration(
        config,
        completedSessions
      );
      return {
        status: TimerState.RUNNING,
        isBreak: true,
        completedSessions,
        timeLeft: breakDuration,
      };
    }

    return {
      status: TimerState.RUNNING,
      isBreak: false,
      completedSessions: prev.completedSessions,
      timeLeft: toSeconds(config.sessionDuration),
    };
  }, [config]);

  useEffect(() => {
    if (pomodoroState.status !== TimerState.RUNNING) {
      return;
    }

    const intervalId = setInterval(() => {
      setPomodoroState(prevState => {
        if (prevState.status !== TimerState.RUNNING) {
          return prevState;
        }

        if (prevState.timeLeft <= 1) {
          return advancePhase(prevState);
        }

        return { ...prevState, timeLeft: prevState.timeLeft - 1 };
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [advancePhase, pomodoroState.status]);

  const start = useCallback(() => {
    setPomodoroState(prev => {
      if (prev.status === TimerState.RUNNING) {
        return prev;
      }

      return {
        status: TimerState.RUNNING,
        isBreak: false,
        completedSessions: prev.completedSessions,
        timeLeft: toSeconds(config.sessionDuration),
      };
    });
  }, [config]);

  const pause = useCallback(() => {
    setPomodoroState(prev => {
      if (prev.status !== TimerState.RUNNING) {
        return prev;
      }
      return { ...prev, status: TimerState.PAUSED };
    });
  }, []);

  const resume = useCallback(() => {
    setPomodoroState(prev => {
      if (prev.status !== TimerState.PAUSED) {
        return prev;
      }
      return { ...prev, status: TimerState.RUNNING };
    });
  }, []);

  const reset = useCallback(() => {
    setPomodoroState(createInitialState(config));
  }, [config]);

  const skip = useCallback(() => {
    setPomodoroState(prev => {
      if (prev.status === TimerState.IDLE) {
        return prev;
      }
      return advancePhase({ ...prev, status: TimerState.RUNNING });
    });
  }, [advancePhase]);

  return useMemo(
    () => ({
      pomodoroState,
      start,
      pause,
      resume,
      reset,
      skip,
    }),
    [pause, reset, resume, skip, start, pomodoroState]
  );
}
