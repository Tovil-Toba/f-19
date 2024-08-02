import {
  ChangeDetectionStrategy,
  Component,
  Input,
  output,
  OutputEmitterRef,
} from '@angular/core';

import { Upgrade } from '../upgrade/upgrade.model';
import { UpgradesGroupComponent } from '../upgrades-group/upgrades-group.component';

@Component({
  selector: 'app-upgrades',
  standalone: true,
  imports: [UpgradesGroupComponent],
  templateUrl: './upgrades.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpgradesComponent {
  @Input()
  isStore = false;

  @Input()
  isUpgradesActive = false;

  @Input()
  upgrades?: Upgrade[];

  selectedUpgrade?: Upgrade;
  upgradeClick: OutputEmitterRef<Upgrade> = output<Upgrade>();

  onUpgradeClick(upgrade: Upgrade): void {
    this.selectedUpgrade = upgrade;
    this.upgradeClick.emit(upgrade);
  }
}
