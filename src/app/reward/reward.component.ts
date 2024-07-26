import {
  ChangeDetectionStrategy,
  Component,
  output,
  OutputEmitterRef,
} from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

import { GameService } from '../game/game.service';
import { UpgradeComponent } from '../upgrade/upgrade.component';
import { Upgrade } from '../upgrade/upgrade.model';
import { UpgradesComponent } from '../upgrades/upgrades.component';
import { RewardService } from './reward.service';

@Component({
  selector: 'app-reward',
  standalone: true,
  imports: [UpgradeComponent, UpgradesComponent, CardModule, ButtonModule],
  templateUrl: './reward.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RewardComponent {
  upgradeSelect: OutputEmitterRef<Upgrade | undefined> = output<
    Upgrade | undefined
  >();

  randomUpgrades: Upgrade[] = [];
  selectedUpgrade?: Upgrade;

  constructor(
    private readonly _gameService: GameService,
    private readonly _rewardService: RewardService,
  ) {
    this._init();
  }

  onUpgradeSelect(): void {
    this.upgradeSelect.emit(this.selectedUpgrade);
  }

  onUpgradeClick(upgrade: Upgrade): void {
    this.selectedUpgrade = upgrade;
  }

  private _init(): void {
    if (
      this._rewardService.missionNumber !==
      this._gameService.currentMissionNumber()
    ) {
      this._rewardService.init();
    }

    this.randomUpgrades = this._rewardService.randomUpgrades;
  }
}
