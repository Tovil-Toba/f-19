import { Target } from './target.model';

export const PRIMARY_TARGETS_US: Target[] = [
  // Воздушные цели
  {
    id: 'airliner',
    icon: 'fa-solid fa-plane-engines',
    label: 'Пассажирский самолет',
    type: 'air',
    weaponType: 'AIM-54 Phoenix',
  },
  {
    id: 'сargo-aircraft',
    icon: 'fa-solid fa-plane-prop',
    label: 'Транспортный самолет',
    type: 'air',
    weaponType: 'AIM-54 Phoenix',
  },
  {
    id: 'fighters',
    icon: 'fa-solid fa-jet-fighter',
    label: 'Истребители',
    type: 'air',
    weaponType: 'AIM-54 Phoenix',
    count: 2,
  },
  // Наземные цели
  {
    id: 'ammunition-depot',
    icon: 'fa-solid fa-warehouse-full',
    label: 'Склад боеприпасов',
    type: 'land',
    weaponType: 'Mark 83',
  },
  {
    id: 'anti-aircraft-warfare',
    icon: 'fa-solid fa-satellite-dish',
    label: 'ПВО',
    type: 'land',
    weaponType: 'AGM-88 HARM',
  },
  {
    id: 'barracks',
    icon: 'fa-solid fa-tents',
    label: 'Казармы',
    type: 'land',
    weaponType: 'Mark 83',
  },
  {
    id: 'bridge',
    icon: 'fa-solid fa-bridge',
    label: 'Мост',
    type: 'land',
    weaponType: 'Mark 83',
  },
  {
    id: 'industry',
    icon: 'fa-solid fa-industry',
    label: 'Электростанция',
    type: 'land',
    weaponType: 'Mark 83',
  },
  {
    id: 'military-plant',
    icon: 'fa-solid fa-garage-car',
    label: 'Военный завод',
    type: 'land',
    weaponType: 'Mark 83',
  },
  {
    id: 'oil-well',
    icon: 'fa-solid fa-oil-well',
    label: 'Нефтяная вышка',
    type: 'land',
    weaponType: 'Mark 83',
  },
  {
    id: 'tanks',
    icon: 'fa-solid fa-bulldozer',
    label: 'Танки',
    type: 'land',
    weaponType: 'AGM-65 Maverick',
    count: 2,
  },
  {
    id: 'tower-cell',
    icon: 'fa-solid fa-tower-cell',
    label: 'Телебашня',
    type: 'land',
    weaponType: 'Mark 83',
  },
  {
    id: 'train',
    icon: 'fa-solid fa-train',
    label: 'Поезд',
    type: 'land',
    weaponType: 'Mark 83',
  },
  // Морские цели
  {
    id: 'frigate',
    icon: 'fa-solid fa-ship',
    label: 'Фрегат',
    type: 'sea',
    weaponType: 'AGM-84 Harpoon',
  },
];
