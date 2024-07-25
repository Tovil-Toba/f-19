import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  output,
  OutputEmitterRef,
} from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

import { UpgradeComponent } from '../upgrade/upgrade.component';
import { Upgrade } from '../upgrade/upgrade.model';
import { UPGRADES } from '../upgrades/upgrades';
import { UpgradesComponent } from '../upgrades/upgrades.component';
import { UpgradesService } from '../upgrades/upgrades.service';
import { UpgradeGroup } from '../upgrades-group/upgrade-group.model';

@Component({
  selector: 'app-reward',
  standalone: true,
  imports: [UpgradeComponent, UpgradesComponent, CardModule, ButtonModule],
  templateUrl: './reward.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RewardComponent implements OnInit {
  upgradeSelect: OutputEmitterRef<Upgrade | undefined> = output<
    Upgrade | undefined
  >();

  randomUpgrades: Upgrade[] = [];
  selectedUpgrade?: Upgrade;

  constructor(private readonly _upgradesService: UpgradesService) {}

  ngOnInit(): void {
    this.randomUpgrades = this._getRandomUpgrades(3);
  }

  onUpgradeSelect(): void {
    this.upgradeSelect.emit(this.selectedUpgrade);
  }

  onUpgradeClick(upgrade: Upgrade): void {
    this.selectedUpgrade = upgrade;
  }

  private _getRandomUpgrade(
    group: UpgradeGroup,
    maxTier = 1,
  ): Upgrade | undefined {
    const upgrades: Upgrade[] = UPGRADES.filter(
      (upgrade: Upgrade) =>
        !this._upgradesService.selectedUpgrades.has(upgrade) &&
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
