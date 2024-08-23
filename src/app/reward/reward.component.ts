import {
  ChangeDetectionStrategy,
  Component,
  inject,
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
  private readonly _rewardService = inject(RewardService);

  upgradeSelect: OutputEmitterRef<Upgrade | undefined> = output<
    Upgrade | undefined
  >();

  randomUpgrades: Upgrade[] = this._rewardService.randomUpgrades;
  selectedUpgrade?: Upgrade;

  onUpgradeSelect(): void {
    this.upgradeSelect.emit(this.selectedUpgrade);
  }

  onUpgradeClick(upgrade: Upgrade): void {
    this.selectedUpgrade = upgrade;
  }
}
