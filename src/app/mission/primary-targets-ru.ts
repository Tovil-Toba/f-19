import { Target } from './target.model';

export const PRIMARY_TARGETS_RU: Target[] = [
  // Воздушные цели
  {
    id: 'f-14',
    icon: 'fa-solid fa-jet-fighter',
    label: 'Истребители F-14',
    type: 'air',
    weaponType: 'Р-33 (AA-9 Amos)',
    count: 2,
  },
  {
    id: 'fa-18',
    icon: 'fa-solid fa-jet-fighter',
    label: 'Истребители F/A-18',
    type: 'air',
    weaponType: 'Р-33 (AA-9 Amos)',
    count: 2,
  },
  {
    id: 'a-6',
    icon: 'fa-solid fa-plane',
    label: 'Штурмовики A-6',
    type: 'air',
    weaponType: 'Р-73 (AA-11 Archer)',
    count: 4,
  },
  {
    id: 'a-7',
    icon: 'fa-solid fa-plane',
    label: 'Штурмовики A-7',
    type: 'air',
    weaponType: 'Р-73 (AA-11 Archer)',
    count: 4,
  },
  {
    id: 'ea-6b',
    icon: 'fa-solid fa-plane',
    label: 'Самолеты радиоэлектронной борьбы EA-6B',
    type: 'air',
    weaponType: 'Р-73 (AA-11 Archer)',
    count: 2,
  },
];
