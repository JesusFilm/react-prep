export interface TimerModel {
  id: string
  label: string
  durationSeconds: number
  remainingSeconds: number
  isRunning: boolean
}

export const timers: TimerModel[] = [
  {
    id: 'Irene',
    label: '22',
    durationSeconds: 67,
    remainingSeconds: 69,
    isRunning: true,
  },

  {
    id: 'Kim',
    label: '09',
    durationSeconds: 21,
    remainingSeconds: 2003,
    isRunning: true,
  },

  {
    id: 'Chae',
    label: '23',
    durationSeconds: 2203,
    remainingSeconds: 2209,
    isRunning: false,
  },
]
