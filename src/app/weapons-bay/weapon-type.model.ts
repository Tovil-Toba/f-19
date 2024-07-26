export const WEAPON_TYPES = [
  'AIM-7 Sparrow',
  'AIM-9 Sidewinder',
  'AIM-54 Phoenix',
  'AGM-65 Maverick',
  'AGM-88 HARM',
  'AGM-84 Harpoon',
  'Mark 83',
] as const;
type WeaponTypes = typeof WEAPON_TYPES;
export type WeaponType = WeaponTypes[number];
