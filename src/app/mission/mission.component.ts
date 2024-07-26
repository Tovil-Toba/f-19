import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  output,
  OutputEmitterRef,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputSwitchModule } from 'primeng/inputswitch';

import { MapComponent } from '../map/map.component';
import { MapService } from '../map/map.service';
import { Target } from '../map/target.model';

@Component({
  selector: 'app-mission',
  standalone: true,
  imports: [ButtonModule, FormsModule, InputSwitchModule, MapComponent],
  templateUrl: './mission.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MissionComponent implements AfterViewInit {
  isMapGridEnabled = true;
  missionConfirm: OutputEmitterRef<void> = output<void>();
  boss?: Target;
  primaryTarget?: Target;
  secondaryTarget?: Target;

  constructor(private readonly _mapService: MapService) {}

  ngAfterViewInit(): void {
    this.boss = this._mapService.boss;
    this.primaryTarget = this._mapService.primaryTarget;
    this.secondaryTarget = this._mapService.secondaryTarget;
  }

  onMissionConfirm(): void {
    this.missionConfirm.emit();
  }
}
