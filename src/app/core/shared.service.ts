import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { DossierService } from '../dossier/dossier.service';
import { FaceService } from '../face/face.service';
import { GameService } from '../game/game.service';
import { MissionService } from '../mission/mission.service';
import { RewardService } from '../reward/reward.service';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor(
    private readonly _dossierService: DossierService,
    private readonly _faceService: FaceService,
    private readonly _gameService: GameService,
    private readonly _missionService: MissionService,
    private readonly _rewardService: RewardService,
    private readonly _router: Router,
  ) {}

  resetGame(): void {
    this._gameService.reset();
    this._missionService.reset();
    this._rewardService.reset();
    this._dossierService.reset();
    this._faceService.reset();

    this._router.navigate(['/']);
  }
}
