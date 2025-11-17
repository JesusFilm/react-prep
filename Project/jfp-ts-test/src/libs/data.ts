export interface TimerModel {
  id: string
  label: string
  durationSeconds: number
  remainingSEconds: number
  isRunning: boolean
}

const timers: TimerModel[] = []
