import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DividerModule } from 'primeng/divider';

import { HeaderService } from '../header/header.service';
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
export class MissionsHistoryComponent implements OnInit {
  missionsHistory: Mission[] = structuredClone(
    this._missionService.missionsHistory,
  ).reverse();

  constructor(
    private readonly _headerService: HeaderService,
    private readonly _missionService: MissionService,
  ) {}

  ngOnInit(): void {
    this._headerService.clearBadge('missions-history');
  }
}
