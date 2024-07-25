import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';

import { GameService } from '../game/game.service';

@Component({
  selector: 'app-mission-result',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './mission-result.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MissionResultComponent implements OnInit {
  constructor(private readonly _gameService: GameService) {}

  nextGameStep(): void {
    this._gameService.nextGameStep();
  }

  ngOnInit(): void {
    if (this._gameService.isBossMission()) {
      this._gameService.incrementCompletedBossMissions();
    } else {
      this._gameService.incrementCompletedStandardMissions();
    }
  }
}
