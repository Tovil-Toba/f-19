export const WEAPON_TYPES_US = [
  'AIM-7 Sparrow',
  'AIM-9 Sidewinder',
  'AIM-54 Phoenix',
  'AGM-65 Maverick',
  'AGM-88 HARM',
  'AGM-84 Harpoon',
  'Mark 83',
] as const;
type WeaponTypesUs = typeof WEAPON_TYPES_US;
export type WeaponTypeUs = WeaponTypesUs[number];
