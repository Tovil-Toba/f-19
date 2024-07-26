import { Target } from './target.model';

export const BOSSES: Target[] = [
  {
    id: 'palace',
    icon: 'fa-solid fa-place-of-worship',
    type: 'land',
    tier: 1,
    weaponType: 'Mark 83',
  },
  {
    id: 'anti-aircraft warfare',
    icon: 'fa-solid fa-satellite-dish',
    type: 'land',
    tier: 2,
    weaponType: 'AGM-88 HARM',
  },
  {
    id: 'jet',
    icon: 'fa-solid fa-jet-fighter',
    type: 'air',
    tier: 3,
    weaponType: 'AIM-54 Phoenix',
  },
];
