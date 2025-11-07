export enum TimerState {
  STARTED = 'STARTED',
  PAUSED = 'PAUSED',
  STOPPED = 'STOPPED',
  COMPLETED = 'COMPLETED',
}

// cspell:disable-next-line
export interface PomodoroTimer {
  id: string
  label: string
  durationMinutes: number
  remainingSeconds: number
  breakDurationMinutes: number
  breakEverySessions: number
  completedSessions: number
  totalSessions: number
  state: TimerState
}

// cspell:disable-next-line
export const timers: PomodoroTimer[] = [
  {
    id: '1',
    label: 'Deep Work Block',
    durationMinutes: 50,
    remainingSeconds: 50 * 60,
    state: TimerState.STARTED,
    breakDurationMinutes: 5,
    breakEverySessions: 1,
    completedSessions: 0,
    totalSessions: 2,
  },
  {
    id: '2',
    label: 'Writing Sprint',
    durationMinutes: 25,
    remainingSeconds: 15 * 60,
    state: TimerState.PAUSED,
    breakDurationMinutes: 5,
    breakEverySessions: 1,
    completedSessions: 1,
    totalSessions: 4,
  },
  {
    id: '3',
    label: 'Team Planning',
    durationMinutes: 45,
    remainingSeconds: 0,
    state: TimerState.COMPLETED,
    breakDurationMinutes: 5,
    breakEverySessions: 2,
    completedSessions: 2,
    totalSessions: 2,
  },
]