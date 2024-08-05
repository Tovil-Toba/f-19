import { MenuItem } from 'primeng/api';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'game',
    label: 'Игра',
    icon: 'fa-regular fa-circle-star', // 'fa-regular fa-star-sharp'
    route: '/',
  },
  {
    id: 'upgrades',
    label: 'Улучшения',
    icon: 'fa-regular fa-sliders-up', // fa-wrench, fa-arrow-up-short-wide
    route: '/upgrades',
  },
  {
    id: 'news',
    label: 'Новости',
    icon: 'fa-regular fa-newspaper',
    route: '/news',
  },
  {
    id: 'missions-history',
    label: 'История миссий',
    icon: 'fa-regular fa-list',
    route: '/missions-history',
  },
  {
    id: 'dossier',
    label: 'Досье',
    icon: 'fa-regular fa-folder-user',
    route: '/dossier',
  },
  {
    id: 'encyclopedia',
    label: 'Энциклопедия',
    icon: 'fa-regular fa-book-blank',
    route: '/encyclopedia',
  },
];
