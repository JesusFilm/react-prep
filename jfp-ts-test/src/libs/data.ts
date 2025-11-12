export interface Timer {
  id: string;
  label: string;
  durationSeconds: number;
  remainingSeconds: number;
  isRunning: boolean;
}

export type Timers = Timer[];

const timers: Timers = [
  {
    id: '1',
    label: 'Timer 1',
    durationSeconds: 10,
    remainingSeconds: 10,
    isRunning: true,
  },
  {
    id: '2',
    label: 'Timer 2',
    durationSeconds: 20,
    remainingSeconds: 20,
    isRunning: false,
  },
  {
    id: '3',
    label: 'Timer 3',
    durationSeconds: 30,
    remainingSeconds: 30,
    isRunning: false,
  },
];