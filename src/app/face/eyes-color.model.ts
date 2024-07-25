export const EYES_COLORS = ['A', 'B', 'C', 'D', 'E', 'F'] as const;
type EyesColors = typeof EYES_COLORS;
export type EyesColor = EyesColors[number];
