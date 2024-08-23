import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
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
  private readonly _headerService = inject(HeaderService);
  private readonly _missionService = inject(MissionService);

  missionsHistory: Mission[] = structuredClone(
    this._missionService.missionsHistory,
  ).reverse();

  ngOnInit(): void {
    this._headerService.clearBadge('missions-history');
  }
}
