import { MenuItem } from 'primeng/api';

import { MENU_ITEMS } from '../header/menu-items';

export const BREADCRUMB_MENU_ITEMS: MenuItem[] = [
  ...MENU_ITEMS,
  {
    label: 'F-19',
    route: '/encyclopedia/f-19',
  },
  {
    label: 'Военный конфликт',
    route: '/encyclopedia/military-conflict',
  },
];
