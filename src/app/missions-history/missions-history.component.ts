import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DividerModule } from 'primeng/divider';

import { Mission } from '../mission/mission.model';
import { MissionService } from '../mission/mission.service';
import { MissionInfoComponent } from '../mission-info/mission-info.component';

@Component({
  selector: 'app-missions-history',
  standalone: true,
  imports: [MissionInfoComponent, DividerModule],
  templateUrl: './missions-history.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MissionsHistoryComponent {
  missionsHistory: Mission[] = structuredClone(
    this._missionService.missionsHistory,
  ).reverse();

  constructor(private readonly _missionService: MissionService) {}
}
