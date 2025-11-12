export enum TimerState {
  IDLE = 'IDLE',
  RUNNING = 'RUNNING',
  PAUSED = 'PAUSED',
}

export interface PomodoroConfig {
  sessionDuration: number; // minutes per focus session
  shortBreakDuration: number; // minutes
  longBreakDuration: number; // minutes
  sessionsBeforeLongBreak: number; // usually 4
}

export interface PomodoroState {
  status: TimerState;
  isBreak: boolean;
  completedSessions: number;
  timeLeft: number; // seconds remaining in current interval
}
