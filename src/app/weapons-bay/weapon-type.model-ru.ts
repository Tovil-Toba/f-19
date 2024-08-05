export const WEAPON_TYPES_RU = [
  'Р-77 (AA-12 Adder)',
  'Р-73 (AA-11 Archer)',
  'Р-33 (AA-9 Amos)',
  'Х-29 (AS-14 Kedge)',
  'Х-31П (AS-17 Krypton)',
  'Х-31А (AS-17 Krypton)',
  'ФАБ-500',
] as const;
type WeaponTypesRu = typeof WEAPON_TYPES_RU;
export type WeaponTypeRu = WeaponTypesRu[number];
