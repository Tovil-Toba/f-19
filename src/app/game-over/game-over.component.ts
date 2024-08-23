import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Signal,
} from '@angular/core';
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
  private readonly _gameService = inject(GameService);
  private readonly _sharedService = inject(SharedService);

  readonly isRuPlayerSide: Signal<boolean> = this._gameService.isRuPlayerSide;
  readonly isUsPlayerSide: Signal<boolean> = this._gameService.isUsPlayerSide;

  resetGame(): void {
    this._sharedService.resetGame();
  }
}
