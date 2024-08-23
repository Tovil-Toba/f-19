import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { DossierService } from '../dossier/dossier.service';
import { GameService } from '../game/game.service';
import { HeaderService } from '../header/header.service';
import { MissionService } from '../mission/mission.service';
import { RewardService } from '../reward/reward.service';
import { StoreService } from '../store/store.service';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private readonly _dossierService = inject(DossierService);
  private readonly _gameService = inject(GameService);
  private readonly _headerService = inject(HeaderService);
  private readonly _missionService = inject(MissionService);
  private readonly _rewardService = inject(RewardService);
  private readonly _router = inject(Router);
  private readonly _storeService = inject(StoreService);

  resetGame(): void {
    this._gameService.reset();
    this._missionService.reset();
    this._rewardService.reset();
    this._storeService.reset();
    this._dossierService.reset();
    this._headerService.reset();

    void this._router.navigate(['/']);
  }
}
