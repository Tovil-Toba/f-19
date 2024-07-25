export const SKIN_TYPES = [1, 2, 3, 4, 5, 6] as const;
type SkinTypes = typeof SKIN_TYPES;
export type SkinType = SkinTypes[number];
