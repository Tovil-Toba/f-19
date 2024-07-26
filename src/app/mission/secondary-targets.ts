import { Target } from './target.model';

export const SECONDARY_TARGETS: Target[] = [
  {
    id: 'corvette',
    icon: 'fa-solid fa-ship',
    label: 'Корвет',
    type: 'sea',
    weaponType: 'AGM-84 Harpoon',
  },
  {
    id: 'сargo-ship',
    icon: 'fa-solid fa-ferry',
    label: 'Танкер',
    type: 'sea',
    weaponType: 'AGM-84 Harpoon',
  },
  {
    id: 'tank',
    icon: 'fa-solid fa-bulldozer',
    label: 'Танк',
    type: 'land',
    weaponType: 'AGM-65 Maverick',
  },
];
