import {
  ChangeDetectionStrategy,
  Component,
  Input,
  output,
  OutputEmitterRef,
} from '@angular/core';

import { Upgrade } from './upgrade.model';

@Component({
  selector: 'app-upgrade',
  standalone: true,
  imports: [],
  templateUrl: './upgrade.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpgradeComponent {
  @Input()
  isActive = false;

  @Input()
  isSelected = false;

  @Input({ required: true })
  upgrade!: Upgrade;

  upgradeClick: OutputEmitterRef<Upgrade> = output<Upgrade>();

  onClick(): void {
    this.upgradeClick.emit(this.upgrade);
  }
}
