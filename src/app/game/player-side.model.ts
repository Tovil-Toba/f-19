export const PLAYER_SIDES = ['ru', 'us'] as const;
type PlayerSides = typeof PLAYER_SIDES;
export type PlayerSide = PlayerSides[number];
