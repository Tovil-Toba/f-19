import { Injectable } from '@angular/core';

import { GameService } from '../game/game.service';
import { Upgrade } from '../upgrade/upgrade.model';
import { UPGRADES } from '../upgrades/upgrades';
import { UpgradeGroup } from '../upgrades-group/upgrade-group.model';

@Injectable({
  providedIn: 'root',
})
export class RewardService {
  randomUpgrades: Upgrade[] = [];

  private _missionNumber?: number;

  readonly selectedUpgrades: Set<Upgrade> = new Set<Upgrade>();

  constructor(private readonly _gameService: GameService) {}

  get missionNumber(): number | undefined {
    return this._missionNumber;
  }

  init(): void {
    this._missionNumber = this._gameService.currentMissionNumber();
    this.randomUpgrades = this._getRandomUpgrades(3);
  }

  private _getRandomUpgrade(
    group: UpgradeGroup,
    maxTier = 1,
  ): Upgrade | undefined {
    const upgrades: Upgrade[] = UPGRADES.filter(
      (upgrade: Upgrade) =>
        !this.selectedUpgrades.has(upgrade) &&
        upgrade.group === group &&
        upgrade.tier <= maxTier,
    );
    const shuffledUpgrades: Upgrade[] = upgrades.sort(
      () => 0.5 - Math.random(),
    );

    return shuffledUpgrades[0];
  }

  private _getRandomUpgrades(maxTier = 1): Upgrade[] {
    const randomUpgrades: Upgrade[] = [];

    const planeRandomUpgrade: Upgrade | undefined = this._getRandomUpgrade(
      'plane',
      maxTier,
    );

    const weaponRandomUpgrade: Upgrade | undefined = this._getRandomUpgrade(
      'weapon',
      maxTier,
    );

    const pilotRandomUpgrade: Upgrade | undefined = this._getRandomUpgrade(
      'pilot',
      maxTier,
    );

    if (planeRandomUpgrade) {
      randomUpgrades.push(planeRandomUpgrade);
    }

    if (weaponRandomUpgrade) {
      randomUpgrades.push(weaponRandomUpgrade);
    }

    if (pilotRandomUpgrade) {
      randomUpgrades.push(pilotRandomUpgrade);
    }

    return randomUpgrades;
  }
}
