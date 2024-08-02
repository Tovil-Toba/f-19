import {
  ChangeDetectionStrategy,
  Component,
  Input,
  output,
  OutputEmitterRef,
} from '@angular/core';
import { TagModule } from 'primeng/tag';

import { Upgrade } from './upgrade.model';

@Component({
  selector: 'app-upgrade',
  standalone: true,
  imports: [TagModule],
  templateUrl: './upgrade.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpgradeComponent {
  @Input()
  isActive = false;

  @Input()
  isEnoughMoney = false;

  @Input()
  isSold = false;

  @Input()
  isStore = false;

  @Input()
  isSelected = false;

  @Input({ required: true })
  upgrade!: Upgrade;

  upgradeClick: OutputEmitterRef<Upgrade> = output<Upgrade>();

  onClick(): void {
    this.upgradeClick.emit(this.upgrade);
  }
}
