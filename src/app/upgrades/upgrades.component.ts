import {
  ChangeDetectionStrategy,
  Component,
  inject,
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
  private readonly _headerService = inject(HeaderService);

  @Input()
  isStore = false;

  @Input()
  isUpgradesActive = false;

  @Input()
  upgrades?: Upgrade[];

  selectedUpgrade?: Upgrade;
  upgradeClick: OutputEmitterRef<Upgrade> = output<Upgrade>();

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
