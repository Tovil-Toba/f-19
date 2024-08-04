import { ChangeDetectionStrategy, Component, Signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';

import { SharedService } from '../core/shared.service';
import { GameService } from '../game/game.service';

@Component({
  selector: 'app-game-over',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './game-over.component.html',
  styleUrl: './game-over.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameOverComponent {
  readonly isRuPlayerSide: Signal<boolean> = this._gameService.isRuPlayerSide;
  readonly isUsPlayerSide: Signal<boolean> = this._gameService.isUsPlayerSide;

  constructor(
    private readonly _gameService: GameService,
    private readonly _sharedService: SharedService,
  ) {}

  resetGame(): void {
    this._sharedService.resetGame();
  }
}
