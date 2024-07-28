import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  Signal,
} from '@angular/core';
import { ButtonModule } from 'primeng/button';

import { GameService } from '../game/game.service';
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
  readonly mission: Signal<Mission | undefined> = this._missionService.mission;

  constructor(
    private readonly _gameService: GameService,
    private readonly _missionService: MissionService,
    private readonly _missionResultService: MissionResultService,
  ) {}

  nextGameStep(): void {
    this._gameService.nextGameStep();
  }

  ngOnInit(): void {
    this._missionResultService.completeMission(this.mission());
  }
}
