import {
  ChangeDetectionStrategy,
  Component,
  output,
  OutputEmitterRef,
} from '@angular/core';
import { ButtonModule } from 'primeng/button';

import { UpgradeComponent } from '../upgrade/upgrade.component';
import { Upgrade } from '../upgrade/upgrade.model';
import { UpgradesComponent } from '../upgrades/upgrades.component';
import { RewardService } from './reward.service';

@Component({
  selector: 'app-reward',
  standalone: true,
  imports: [UpgradeComponent, UpgradesComponent, ButtonModule],
  templateUrl: './reward.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RewardComponent {
  upgradeSelect: OutputEmitterRef<Upgrade | undefined> = output<
    Upgrade | undefined
  >();

  randomUpgrades: Upgrade[] = this._rewardService.randomUpgrades;
  selectedUpgrade?: Upgrade;

  constructor(private readonly _rewardService: RewardService) {}

  onUpgradeSelect(): void {
    this.upgradeSelect.emit(this.selectedUpgrade);
  }

  onUpgradeClick(upgrade: Upgrade): void {
    this.selectedUpgrade = upgrade;
  }
}
