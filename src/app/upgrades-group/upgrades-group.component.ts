import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  output,
  OutputEmitterRef,
  Signal,
} from '@angular/core';

import { RewardService } from '../reward/reward.service';
import { UpgradeComponent } from '../upgrade/upgrade.component';
import { Upgrade } from '../upgrade/upgrade.model';
import { UPGRADES } from '../upgrades/upgrades';
import { UpgradeGroup } from './upgrade-group.model';
import { UPGRADE_GROUP_TITLE } from './upgrade-group-title';

@Component({
  selector: 'app-upgrades-group',
  standalone: true,
  imports: [UpgradeComponent],
  templateUrl: './upgrades-group.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpgradesGroupComponent implements OnInit {
  @Input({ required: true })
  group!: UpgradeGroup;

  @Input()
  isStore = false;

  @Input()
  isUpgradesActive = false;

  @Input()
  selectedUpgrade?: Upgrade;

  @Input()
  upgrades?: Upgrade[];

  selectedUpgrades: Set<Upgrade> = this._rewardService.selectedUpgrades;
  title = '';
  upgradeClick: OutputEmitterRef<Upgrade> = output<Upgrade>();
  readonly wallet: Signal<number> = this._rewardService.wallet;

  constructor(private readonly _rewardService: RewardService) {}

  isUpgradeActive(upgrade: Upgrade): boolean {
    const isStoreUpgradeActive =
      !this._rewardService.selectedUpgrades.has(upgrade) &&
      upgrade.price <= this._rewardService.wallet();

    const isUpgradeActive =
      this.isUpgradesActive ||
      this._rewardService.selectedUpgrades.has(upgrade);

    return this.isStore ? isStoreUpgradeActive : isUpgradeActive;
  }

  isUpgradeSold(upgrade: Upgrade): boolean {
    return this.isStore && this._rewardService.selectedUpgrades.has(upgrade);
  }

  ngOnInit(): void {
    this.title = UPGRADE_GROUP_TITLE[this.group];
    this.upgrades = (this.upgrades ?? UPGRADES).filter(
      (upgrade: Upgrade) => upgrade.group === this.group,
    );
  }

  onUpgradeClick(upgrade: Upgrade): void {
    this.upgradeClick.emit(upgrade);
  }
}
