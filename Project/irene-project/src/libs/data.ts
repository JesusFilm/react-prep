export interface TimerModel {
  id: string
  label: string
  durationSeconds: number // total number of seconds for a timer
  remainingSeconds: number // the number of seconds left
  isRunning: boolean
}

export const timers: TimerModel[] = [
  {
    id: '1',
    label: 'irene',
    durationSeconds: 67,
    remainingSeconds: 1500,
    isRunning: true,
  },
  {
    id: '2',
    label: 'Short Break',
    durationSeconds: 69,
    remainingSeconds: 300,
    isRunning: true,
  },
  {
    id: '3',
    label: 'Long Break',
    durationSeconds: 900,
    remainingSeconds: 900,
    isRunning: true,
  },
]
