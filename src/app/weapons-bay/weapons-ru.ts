import { SelectItemGroup } from 'primeng/api';

export const WEAPONS_RU: SelectItemGroup[] = [
  {
    label: 'Воздух-воздух',
    items: [
      {
        label: 'Р-73 (AA-11 Archer)',
        value: 'Р-73 (AA-11 Archer)',
        icon: 'fa-solid fa-bow-arrow',
      },
      {
        label: 'Р-77 (AA-12 Adder)',
        value: 'Р-77 (AA-12 Adder)',
        icon: 'fa-solid fa-snake',
      },
      {
        label: 'Р-33 (AA-9 Amos)',
        value: 'Р-33 (AA-9 Amos)',
        icon: 'fa-solid fa-face-smile-halo',
      },
    ],
  },
  {
    label: 'Воздух-земля',
    items: [
      {
        label: 'Х-29 (AS-14 Kedge)',
        value: 'Х-29 (AS-14 Kedge)',
        icon: 'fa-solid fa-anchor',
      },
      {
        label: 'Х-31П (AS-17 Krypton)',
        value: 'Х-31П (AS-17 Krypton)',
        icon: 'fa-solid fa-satellite-dish',
      },
    ],
  },
  {
    label: 'Воздух-вода',
    items: [
      {
        label: 'Х-31А (AS-17 Krypton)',
        value: 'Х-31А (AS-17 Krypton)',
        icon: 'fa-solid fa-water',
      },
    ],
  },
  {
    label: 'Бомбы',
    items: [
      {
        label: 'ФАБ-500',
        value: 'ФАБ-500',
        icon: 'fa-solid fa-bomb',
      },
    ],
  },
];
