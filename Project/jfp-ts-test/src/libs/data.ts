export interface TimerModel {
  key: string
  id: string
  label: string
  durationSeconds: number
  remainingSeconds: number
  isRunning: boolean
}

export const timers: TimerModel[] = [
  // {
  //   id: '1',
  //   label: 'timer 1',
  //   durationSeconds: 60,
  //   remainingSeconds: 30,
  //   isRunning: false,
  // },
  // {
  //   id: '2',
  //   label: 'timer 2',
  //   durationSeconds: 60,
  //   remainingSeconds: 30,
  //   isRunning: false,
  // },
  // {
  //   id: '3',
  //   label: 'timer 3',
  //   durationSeconds: 60,
  //   remainingSeconds: 30,
  //   isRunning: false,
  // },
]
