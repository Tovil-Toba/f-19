import { Injectable, Signal, signal, WritableSignal } from '@angular/core';

import { GameService } from '../game/game.service';
import { WALLET } from '../game/game-settings';
import { Upgrade } from '../upgrade/upgrade.model';
import { UPGRADES } from '../upgrades/upgrades';
import { UpgradeGroup } from '../upgrades-group/upgrade-group.model';

@Injectable({
  providedIn: 'root',
})
export class RewardService {
  private readonly _randomUpgradesHistory: Map<number, Upgrade[]> = new Map<
    number,
    Upgrade[]
  >();

  private readonly _wallet: WritableSignal<number> = signal<number>(WALLET);

  readonly wallet: Signal<number> = this._wallet;

  readonly selectedUpgrades: Set<Upgrade> = new Set<Upgrade>();

  get randomUpgrades(): Upgrade[] {
    const missionNumber = this._gameService.currentMissionNumber();

    let randomUpgrades: Upgrade[] | undefined =
      this._randomUpgradesHistory.get(missionNumber);

    if (!randomUpgrades) {
      randomUpgrades = this.getRandomUpgrades(3);
      this._randomUpgradesHistory.set(missionNumber, randomUpgrades);
    }

    return randomUpgrades;
  }

  constructor(private readonly _gameService: GameService) {}

  getRandomUpgrades(maxTier = 1): Upgrade[] {
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

  fillWallet(money: number): void {
    this._wallet.update((walletMoney) => walletMoney + money);
  }

  reset(): void {
    this._randomUpgradesHistory.clear();
    this.selectedUpgrades.clear();
    this._wallet.set(WALLET);
  }

  takeMoney(money: number): void {
    this._wallet.update((walletMoney) => walletMoney - money);
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
}
