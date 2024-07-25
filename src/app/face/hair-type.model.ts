export const HAIR_TYPES = [1, 2, 3, 4, 5, 6, 7, 8, 9] as const;
type HairTypes = typeof HAIR_TYPES;
export type HairType = HairTypes[number];
