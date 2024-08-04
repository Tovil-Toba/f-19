import { Injectable } from '@angular/core';

import { GameService } from '../game/game.service';
import { UPGRADE_DISCOUNT_PERCENTS } from '../game/game-settings';
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

      this._setRandomDiscount(randomUpgrades);
      this._randomUpgradesHistory.set(missionNumber, randomUpgrades);
    }

    return randomUpgrades;
  }

  constructor(
    private readonly _gameService: GameService,
    private readonly _rewardService: RewardService,
  ) {}

  getUpgradePrice(upgrade: Upgrade): number {
    return upgrade.discountPercents
      ? (upgrade.price * upgrade.discountPercents) / 100
      : upgrade.price;
  }

  reset(): void {
    this._randomUpgradesHistory.clear();
  }

  private _resetUpgradeDiscounts(upgrades: Upgrade[]): void {
    upgrades
      .filter((upgrade: Upgrade) => upgrade.discountPercents !== undefined)
      .forEach((upgrade: Upgrade) => (upgrade.discountPercents = undefined));
  }

  private _setRandomDiscount(upgrades: Upgrade[]): void {
    this._resetUpgradeDiscounts(upgrades);

    const shuffledUpgrades: Upgrade[] = upgrades.sort(
      () => 0.5 - Math.random(),
    );

    const discountedUpgrade: Upgrade = shuffledUpgrades[0];
    discountedUpgrade.discountPercents = UPGRADE_DISCOUNT_PERCENTS;
  }
}
