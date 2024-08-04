import { MenuItem } from 'primeng/api';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'game',
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
    label: 'Новости',
    icon: 'fa-regular fa-newspaper',
    route: '/news',
  },
  {
    label: 'История миссий',
    icon: 'fa-regular fa-list',
    route: '/missions-history',
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
