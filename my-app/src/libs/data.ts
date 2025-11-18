export interface TimerModel {
  id: string
  label: string
  durationSeconds: number
  remainingSeconds: number
  isRunning: boolean
}

const timer1: TimerModel = {
  id: '123',
  label: 'timer1',
  durationSeconds: 100,
  remainingSeconds: 50,
  isRunning: true,
}

const timer2: TimerModel = {
  id: '123',
  label: 'timer2',
  durationSeconds: 367,
  remainingSeconds: 23,
  isRunning: true,
}

const timer3: TimerModel = {
  id: '123',
  label: 'timer3',
  durationSeconds: 2,
  remainingSeconds: 0,
  isRunning: false,
}

export const timers: TimerModel[] = [timer1, timer2, timer3]
