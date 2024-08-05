import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  output,
  OutputEmitterRef,
} from '@angular/core';

import { HeaderService } from '../header/header.service';
import { Upgrade } from '../upgrade/upgrade.model';
import { UpgradesGroupComponent } from '../upgrades-group/upgrades-group.component';

@Component({
  selector: 'app-upgrades',
  standalone: true,
  imports: [UpgradesGroupComponent],
  templateUrl: './upgrades.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpgradesComponent implements OnInit {
  @Input()
  isStore = false;

  @Input()
  isUpgradesActive = false;

  @Input()
  upgrades?: Upgrade[];

  selectedUpgrade?: Upgrade;
  upgradeClick: OutputEmitterRef<Upgrade> = output<Upgrade>();

  constructor(private readonly _headerService: HeaderService) {}

  ngOnInit(): void {
    if (!this.upgrades) {
      this._headerService.clearBadge('upgrades');
    }
  }

  onUpgradeClick(upgrade: Upgrade): void {
    this.selectedUpgrade = upgrade;
    this.upgradeClick.emit(upgrade);
  }
}
