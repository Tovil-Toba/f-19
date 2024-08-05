import { Target } from './target.model';

export const SECONDARY_TARGETS_US: Target[] = [
  // Воздушные цели
  {
    id: 'su-22',
    icon: 'fa-solid fa-jet-fighter',
    label: 'Истребитель Су-22',
    type: 'air',
    weaponType: 'AIM-54 Phoenix',
  },
  {
    id: 'mig-21',
    icon: 'fa-solid fa-jet-fighter',
    label: 'Истребитель МиГ-21',
    type: 'air',
    weaponType: 'AIM-54 Phoenix',
  },
  {
    id: 'mig-23',
    icon: 'fa-solid fa-jet-fighter',
    label: 'Истребитель МиГ-23',
    type: 'air',
    weaponType: 'AIM-54 Phoenix',
  },
  {
    id: 'mig-25',
    icon: 'fa-solid fa-jet-fighter',
    label: 'Истребитель МиГ-25',
    type: 'air',
    weaponType: 'AIM-54 Phoenix',
  },
  {
    id: 'mirage-f1',
    icon: 'fa-solid fa-jet-fighter',
    label: 'Истребитель Mirage F1',
    type: 'air',
    weaponType: 'AIM-54 Phoenix',
  },
  {
    id: 'mirage-5',
    icon: 'fa-solid fa-jet-fighter',
    label: 'Истребитель Mirage 5',
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
