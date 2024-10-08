import { Target } from './target.model';

export const BOSSES_US: Target[] = [
  // Эпизод 1
  {
    id: 'bomber',
    icon: 'fa-solid fa-plane',
    label: 'Дальний бомбардировщик Ту-22',
    type: 'air',
    tier: 1,
    weaponType: 'AIM-54 Phoenix',
  },
  {
    id: 'command-post',
    icon: 'fa-solid fa-building-user',
    label: 'Командный пункт',
    type: 'land',
    tier: 1,
    weaponType: 'Mark 83',
  },
  {
    id: 'submarine',
    icon: 'fa-solid fa-ship',
    label: 'Подводная лодка',
    type: 'sea',
    tier: 1,
    weaponType: 'AGM-84 Harpoon',
  },
  // Эпизод 2
  {
    id: 'command-aircraft',
    icon: 'fa-solid fa-plane-engines',
    label: 'Воздушный командный пункт',
    type: 'air',
    tier: 2,
    weaponType: 'AIM-54 Phoenix',
  },
  {
    id: 'advanced-anti-aircraft-warfare',
    icon: 'fa-solid fa-satellite-dish',
    type: 'land',
    label: 'Продвинутая ПВО',
    tier: 2,
    weaponType: 'AGM-88 HARM',
  },
  // Эпизод 3
  {
    id: 'mig-37',
    icon: 'fa-solid fa-jet-fighter',
    label: 'МиГ-37',
    type: 'air',
    tier: 3,
    weaponType: 'AIM-54 Phoenix',
  },
  {
    id: 'airfield',
    icon: 'fa-solid fa-plane-departure',
    type: 'land',
    label: 'Аэродром',
    tier: 3,
    weaponType: 'Mark 83',
  },
  {
    id: 'palace',
    icon: 'fa-solid fa-place-of-worship',
    label: 'Штаб',
    type: 'land',
    tier: 3,
    weaponType: 'Mark 83',
  },
];
