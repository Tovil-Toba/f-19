import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  output,
  OutputEmitterRef,
} from '@angular/core';

import { UpgradeComponent } from '../upgrade/upgrade.component';
import { Upgrade } from '../upgrade/upgrade.model';
import { UPGRADES } from '../upgrades/upgrades';
import { UpgradesService } from '../upgrades/upgrades.service';
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
  isUpgradesActive = false;

  @Input()
  selectedUpgrade?: Upgrade;

  @Input()
  upgrades?: Upgrade[];

  selectedUpgrades: Set<Upgrade> = this._upgradesService.selectedUpgrades;
  title = '';
  upgradeClick: OutputEmitterRef<Upgrade> = output<Upgrade>();

  constructor(private readonly _upgradesService: UpgradesService) {}

  isUpgradeActive(upgrade: Upgrade): boolean {
    return this._upgradesService.selectedUpgrades.has(upgrade);
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
