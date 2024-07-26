import {
  ChangeDetectionStrategy,
  Component,
  output,
  OutputEmitterRef,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputSwitchModule } from 'primeng/inputswitch';

import { GameService } from '../game/game.service';
import { MapComponent } from '../map/map.component';
import { MissionService } from './mission.service';
import { Target } from './target.model';

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
  boss?: Target;
  player?: Target;
  primaryTarget?: Target;
  secondaryTarget?: Target;

  constructor(
    private readonly _gameService: GameService,
    private readonly _missionService: MissionService,
  ) {
    this._init();
  }

  onMissionConfirm(): void {
    this.missionConfirm.emit();
  }

  private _init(): void {
    if (
      this._missionService.missionNumber !==
      this._gameService.currentMissionNumber()
    ) {
      this._missionService.init();
    }

    this.boss = this._missionService.boss;
    this.player = this._missionService.player;
    this.primaryTarget = this._missionService.primaryTarget;
    this.secondaryTarget = this._missionService.secondaryTarget;
  }
}
