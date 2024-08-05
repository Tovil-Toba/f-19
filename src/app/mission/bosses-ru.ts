import { Target } from './target.model';

export const BOSSES_RU: Target[] = [
  // Эпизод 1
  {
    id: 'bomber',
    icon: 'fa-solid fa-plane',
    label: 'Дальний бомбардировщик B-111',
    type: 'air',
    tier: 1,
    weaponType: 'Р-33 (AA-9 Amos)',
  },
  {
    id: 'submarine',
    icon: 'fa-solid fa-ship',
    label: 'Подводная лодка',
    type: 'sea',
    tier: 1,
    weaponType: 'Х-31А (AS-17 Krypton)',
  },
  // Эпизод 2
  {
    id: 'aew',
    icon: 'fa-solid fa-plane-engines',
    label: 'ДРЛО E-2',
    type: 'air',
    tier: 2,
    weaponType: 'Р-33 (AA-9 Amos)',
  },
  {
    id: 'cruiser',
    icon: 'fa-solid fa-ship',
    label: 'Атомный ракетный крейсер Truxtun',
    type: 'sea',
    tier: 2,
    weaponType: 'Х-31А (AS-17 Krypton)',
  },
  // Эпизод 3
  {
    id: 'aircraft-carrier-coral-sea',
    icon: 'fa-solid fa-ship',
    label: 'Авианосец Coral Sea',
    type: 'sea',
    tier: 3,
    weaponType: 'Х-31А (AS-17 Krypton)',
  },
  {
    id: 'aircraft-carrier-america',
    icon: 'fa-solid fa-ship',
    label: 'Авианосец America',
    type: 'sea',
    tier: 3,
    weaponType: 'Х-31А (AS-17 Krypton)',
  },
];
