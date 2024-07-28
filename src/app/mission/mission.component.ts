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
  isMapGridEnabled = true;
  mission?: Mission;
  missionConfirm: OutputEmitterRef<void> = output<void>();

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

    this.mission = this._missionService.mission();
  }
}
