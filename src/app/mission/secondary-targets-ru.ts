import { Target } from './target.model';

export const SECONDARY_TARGETS_RU: Target[] = [
  // Воздушные цели
  {
    id: 'f-14',
    icon: 'fa-solid fa-jet-fighter',
    label: 'Истребитель F-14',
    type: 'air',
    weaponType: 'Р-33 (AA-9 Amos)',
  },
  {
    id: 'fa-18',
    icon: 'fa-solid fa-jet-fighter',
    label: 'Истребитель F/A-18',
    type: 'air',
    weaponType: 'Р-33 (AA-9 Amos)',
  },
  {
    id: 'a-6',
    icon: 'fa-solid fa-plane',
    label: 'Штурмовик A-6',
    type: 'air',
    weaponType: 'Р-73 (AA-11 Archer)',
  },
  {
    id: 'a-7',
    icon: 'fa-solid fa-plane',
    label: 'Штурмовик A-7',
    type: 'air',
    weaponType: 'Р-73 (AA-11 Archer)',
  },
  {
    id: 'ea-6b',
    icon: 'fa-solid fa-plane',
    label: 'Самолет радиоэлектронной борьбы EA-6B',
    type: 'air',
    weaponType: 'Р-73 (AA-11 Archer)',
  },
  {
    id: 'helicopter',
    icon: 'fa-solid fa-helicopter',
    label: 'Вертолет',
    type: 'air',
    weaponType: 'Р-73 (AA-11 Archer)',
  },
  // Наземные цели
  {
    id: 'tank',
    icon: 'fa-solid fa-bulldozer',
    label: 'Танк',
    type: 'land',
    weaponType: 'Х-29 (AS-14 Kedge)',
  },
  {
    id: 'truck',
    icon: 'fa-solid fa-truck',
    label: 'Грузовик',
    type: 'land',
    weaponType: 'Х-29 (AS-14 Kedge)',
  },
];
