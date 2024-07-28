import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { MapComponent } from '../map/map.component';
import { Mission } from '../mission/mission.model';

@Component({
  selector: 'app-mission-info',
  standalone: true,
  imports: [MapComponent],
  templateUrl: './mission-info.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MissionInfoComponent {
  @Input({ required: true })
  mission: Mission | undefined;
}
