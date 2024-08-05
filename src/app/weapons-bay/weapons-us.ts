import { SelectItemGroup } from 'primeng/api';

export const WEAPONS_US: SelectItemGroup[] = [
  {
    label: 'Воздух-воздух',
    items: [
      {
        label: 'AIM-7 Sparrow',
        value: 'AIM-7 Sparrow',
        icon: 'fa-solid fa-bird',
      },
      {
        label: 'AIM-9 Sidewinder',
        value: 'AIM-9 Sidewinder',
        icon: 'fa-solid fa-wind',
      },
      {
        label: 'AIM-54 Phoenix',
        value: 'AIM-54 Phoenix',
        icon: 'fa-brands fa-phoenix-framework',
      },
    ],
  },
  {
    label: 'Воздух-земля',
    items: [
      {
        label: 'AGM-65 Maverick',
        value: 'AGM-65 Maverick',
        icon: 'fa-solid fa-person-walking',
      },
      {
        label: 'AGM-88 HARM',
        value: 'AGM-88 HARM',
        icon: 'fa-solid fa-satellite-dish',
      },
    ],
  },
  {
    label: 'Воздух-вода',
    items: [
      {
        label: 'AGM-84 Harpoon',
        value: 'AGM-84 Harpoon',
        icon: 'fa-solid fa-water',
      },
    ],
  },
  {
    label: 'Бомбы',
    items: [
      {
        label: 'Mark 83',
        value: 'Mark 83',
        icon: 'fa-solid fa-bomb',
      },
    ],
  },
];
