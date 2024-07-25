export const FACIAL_HAIR_TYPES = [1, 2, 3] as const;
type FacialHairTypes = typeof FACIAL_HAIR_TYPES;
export type FacialHairType = FacialHairTypes[number];
