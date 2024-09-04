import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./game/game.component').then((m) => m.GameComponent),
  },
  {
    path: 'dossier',
    loadComponent: () =>
      import('./dossier/dossier.component').then((m) => m.DossierComponent),
  },
  {
    path: 'encyclopedia/:id',
    loadComponent: () =>
      import('./encyclopedia/encyclopedia.component').then(
        (m) => m.EncyclopediaComponent,
      ),
  },
  {
    path: 'encyclopedia',
    loadComponent: () =>
      import('./encyclopedia/encyclopedia.component').then(
        (m) => m.EncyclopediaComponent,
      ),
  },
  {
    path: 'news',
    loadComponent: () =>
      import('./news/news.component').then((m) => m.NewsComponent),
  },
  {
    path: 'missions-history',
    loadComponent: () =>
      import('./missions-history/missions-history.component').then(
        (m) => m.MissionsHistoryComponent,
      ),
  },
  {
    path: 'store',
    loadComponent: () =>
      import('./store/store.component').then((m) => m.StoreComponent),
  },
  {
    path: 'upgrades',
    loadComponent: () =>
      import('./upgrades/upgrades.component').then((m) => m.UpgradesComponent),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./page-not-found/page-not-found.component').then(
        (m) => m.PageNotFoundComponent,
      ),
  },
];
