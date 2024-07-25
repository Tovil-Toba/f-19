import { MenuItem } from 'primeng/api';

export const MENU_ITEMS: MenuItem[] = [
  {
    label: 'Игра',
    icon: 'fa-regular fa-circle-star', // 'fa-regular fa-star-sharp'
    route: '/',
  },
  {
    label: 'Улучшения',
    icon: 'fa-regular fa-sliders-up', // fa-wrench, fa-arrow-up-short-wide
    route: '/upgrades',
  },
  {
    label: 'Магазин',
    icon: 'fa-regular fa-dollar-sign',
    route: '/store',
  },
  {
    label: 'Новости',
    icon: 'fa-regular fa-envelope',
    route: '/news',
  },
  {
    label: 'Досье',
    icon: 'fa-regular fa-folder-user',
    route: '/dossier',
  },
  {
    label: 'Энциклопедия',
    icon: 'fa-regular fa-book-blank',
    route: '/encyclopedia',
  },
];
