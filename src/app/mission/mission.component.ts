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
import { Mission } from './mission.model';
import { MissionService } from './mission.service';

@Component({
  selector: 'app-mission',
  standalone: true,
  imports: [ButtonModule, FormsModule, InputSwitchModule, MapComponent],
  templateUrl: './mission.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MissionComponent {
  missionConfirm: OutputEmitterRef<void> = output<void>();

  isMapGridEnabled = true;
  mission?: Mission;

  constructor(private readonly _missionService: MissionService) {
    this._missionService.init();

    this.mission = this._missionService.mission();
  }

  onMissionConfirm(): void {
    this.missionConfirm.emit();
  }
}
