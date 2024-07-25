import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, Signal } from '@angular/core';

import { ThemeService } from '../core/theme.service';
import { GameService } from '../game/game.service';

@Component({
  selector: 'app-missions-info',
  standalone: true,
  imports: [NgTemplateOutlet],
  templateUrl: './missions-info.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MissionsInfoComponent {
  readonly currentMissionNumber: Signal<number> =
    this._gameService.currentMissionNumber;

  readonly currentMissionTier: Signal<number> =
    this._gameService.currentMissionTier;

  readonly completedMissionsCount: Signal<number> =
    this._gameService.completedMissionsCount;

  readonly isBossMission: Signal<boolean> = this._gameService.isBossMission;
  readonly isDarkTheme: Signal<boolean> = this._themeService.isDarkTheme;

  constructor(
    private readonly _gameService: GameService,
    private readonly _themeService: ThemeService,
  ) {}
}
