export const HAIR_COLORS = ['D', 'E', 'F'] as const;
type HairColors = typeof HAIR_COLORS;
export type HairColor = HairColors[number];
