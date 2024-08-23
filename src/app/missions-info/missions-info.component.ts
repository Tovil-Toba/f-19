import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Signal,
} from '@angular/core';

import { ThemeService } from '../core/theme.service';
import { GameService } from '../game/game.service';
import { MAX_MISSION_TIER, TOTAL_MISSIONS_COUNT } from '../game/game-settings';

@Component({
  selector: 'app-missions-info',
  standalone: true,
  imports: [NgTemplateOutlet],
  templateUrl: './missions-info.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MissionsInfoComponent {
  private readonly _gameService = inject(GameService);
  private readonly _themeService = inject(ThemeService);

  readonly currentMissionNumber: Signal<number> =
    this._gameService.currentMissionNumber;

  readonly currentMissionTier: Signal<number> =
    this._gameService.currentMissionTier;

  readonly completedMissionsCount: Signal<number> =
    this._gameService.completedMissionsCount;

  readonly isBossMission: Signal<boolean> = this._gameService.isBossMission;
  readonly isDarkTheme: Signal<boolean> = this._themeService.isDarkTheme;
  readonly maxMissionTier = MAX_MISSION_TIER;
  readonly totalMissionsCount = TOTAL_MISSIONS_COUNT;
}
