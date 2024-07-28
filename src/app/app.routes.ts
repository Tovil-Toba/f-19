import { Routes } from '@angular/router';

import { DossierComponent } from './dossier/dossier.component';
import { EncyclopediaComponent } from './encyclopedia/encyclopedia.component';
import { GameComponent } from './game/game.component';
import { MissionsHistoryComponent } from './missions-history/missions-history.component';
import { NewsComponent } from './news/news.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StoreComponent } from './store/store.component';
import { UpgradesComponent } from './upgrades/upgrades.component';

export const routes: Routes = [
  { path: '', component: GameComponent },
  { path: 'dossier', component: DossierComponent },
  { path: 'encyclopedia/:id', component: EncyclopediaComponent },
  { path: 'encyclopedia', component: EncyclopediaComponent },
  { path: 'news', component: NewsComponent },
  { path: 'missions-history', component: MissionsHistoryComponent },
  { path: 'store', component: StoreComponent },
  { path: 'upgrades', component: UpgradesComponent },
  { path: '**', component: PageNotFoundComponent },
];
