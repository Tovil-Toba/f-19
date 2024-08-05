import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  output,
  OutputEmitterRef,
  Signal,
} from '@angular/core';
import { ButtonModule } from 'primeng/button';

import { Mission } from '../mission/mission.model';
import { MissionService } from '../mission/mission.service';
import { MissionInfoComponent } from '../mission-info/mission-info.component';
import { MissionResultService } from './mission-result.service';

@Component({
  selector: 'app-mission-result',
  standalone: true,
  imports: [ButtonModule, MissionInfoComponent],
  providers: [MissionResultService],
  templateUrl: './mission-result.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MissionResultComponent implements OnInit {
  missionComplete: OutputEmitterRef<void> = output<void>();

  readonly mission: Signal<Mission | undefined> = this._missionService.mission;

  constructor(
    private readonly _missionService: MissionService,
    private readonly _missionResultService: MissionResultService,
  ) {}

  ngOnInit(): void {
    this._missionResultService.completeMission(this.mission());
  }

  onMissionComplete(): void {
    this.missionComplete.emit();
  }
}
