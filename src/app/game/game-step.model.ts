// Порядок важен!
export const GAME_STEPS = [
  'reward',
  'store',
  'mission',
  'armament',
  'mission-result',
] as const;

type GameSteps = typeof GAME_STEPS;
export type GameStep = GameSteps[number];
