interface TimerModel {
  id: string
  label: string
  durationSeconds: number
  remainingSeconds: number
  isRunning: boolean
}

const timers: TimerModel[] = [
  {
    id: 'thing',
    label: 'time',
    durationSeconds: 1,
    remainingSeconds: 10,
    isRunning: true,
  },
  {
    id: 'ting',
    label: 'dime',
    durationSeconds: 21,
    remainingSeconds: 101,
    isRunning: false,
  },
  {
    id: 'no',
    label: 'pi',
    durationSeconds: 9,
    remainingSeconds: 0,
    isRunning: false,
  },
]
