import { Target } from './target.model';

export const SECONDARY_TARGETS_US: Target[] = [
  // Воздушные цели
  {
    id: 'fighter',
    icon: 'fa-solid fa-jet-fighter',
    label: 'Истребитель',
    type: 'air',
    weaponType: 'AIM-54 Phoenix',
  },
  {
    id: 'helicopter',
    icon: 'fa-solid fa-helicopter',
    label: 'Вертолет',
    type: 'air',
    weaponType: 'AIM-9 Sidewinder',
  },
  // Наземные цели
  {
    id: 'tank',
    icon: 'fa-solid fa-bulldozer',
    label: 'Танк',
    type: 'land',
    weaponType: 'AGM-65 Maverick',
  },
  {
    id: 'truck',
    icon: 'fa-solid fa-truck',
    label: 'Грузовик',
    type: 'land',
    weaponType: 'AGM-65 Maverick',
  },
  // Морские цели
  {
    id: 'сargo-ship',
    icon: 'fa-solid fa-ferry',
    label: 'Танкер',
    type: 'sea',
    weaponType: 'AGM-84 Harpoon',
  },
  {
    id: 'corvette',
    icon: 'fa-solid fa-ship',
    label: 'Корвет',
    type: 'sea',
    weaponType: 'AGM-84 Harpoon',
  },
];
