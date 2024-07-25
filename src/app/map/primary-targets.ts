import { Target } from './target.model';

export const PRIMARY_TARGETS: Target[] = [
  {
    id: 'jet',
    icon: 'fa-solid fa-jet-fighter',
    type: 'air',
  },
  {
    id: 'airliner',
    icon: 'fa-solid fa-plane-engines',
    type: 'air',
  },
  {
    id: 'сargo-aircraft',
    icon: 'fa-solid fa-plane-prop',
    type: 'air',
  },
  {
    id: 'warship',
    icon: 'fa-solid fa-ship',
    type: 'sea',
  },
  {
    id: 'anti-aircraft warfare',
    icon: 'fa-solid fa-satellite-dish',
    type: 'land',
  },
  {
    id: 'tank',
    icon: 'fa-solid fa-bulldozer',
    type: 'land',
  },
  {
    id: 'barracks',
    icon: 'fa-solid fa-tents',
    type: 'land',
  },
  {
    id: 'palace',
    icon: 'fa-solid fa-place-of-worship',
    type: 'land',
  },
  {
    id: 'oil-well',
    icon: 'fa-solid fa-oil-well',
    type: 'land',
  },
  {
    id: 'industry',
    icon: 'fa-solid fa-industry',
    type: 'land',
  },
  {
    id: 'military-plant',
    icon: 'fa-solid fa-garage-car',
    type: 'land',
  },
  {
    id: 'ammunition-depot',
    icon: 'fa-solid fa-warehouse-full',
    type: 'land',
  },
];
