import {
  ChangeDetectionStrategy,
  Component,
  output,
  OutputEmitterRef,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputSwitchModule } from 'primeng/inputswitch';

import { MapComponent } from '../map/map.component';

@Component({
  selector: 'app-mission',
  standalone: true,
  imports: [ButtonModule, FormsModule, InputSwitchModule, MapComponent],
  templateUrl: './mission.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MissionComponent {
  isMapGridEnabled = true;
  missionConfirm: OutputEmitterRef<void> = output<void>();

  onMissionConfirm(): void {
    this.missionConfirm.emit();
  }
}
