import { Injectable } from '@angular/core';

import { GameService } from '../game/game.service';
import { RewardService } from '../reward/reward.service';
import { Upgrade } from '../upgrade/upgrade.model';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private readonly _randomUpgradesHistory: Map<number, Upgrade[]> = new Map<
    number,
    Upgrade[]
  >();

  get randomUpgrades(): Upgrade[] {
    const missionNumber = this._gameService.currentMissionNumber();

    let randomUpgrades: Upgrade[] | undefined =
      this._randomUpgradesHistory.get(missionNumber);

    if (!randomUpgrades) {
      randomUpgrades = this._rewardService.getRandomUpgrades(3);
      this._randomUpgradesHistory.set(missionNumber, randomUpgrades);
    }

    return randomUpgrades;
  }

  constructor(
    private readonly _gameService: GameService,
    private readonly _rewardService: RewardService,
  ) {}

  reset(): void {
    this._randomUpgradesHistory.clear();
  }
}
