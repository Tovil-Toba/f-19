import {
  ChangeDetectionStrategy,
  Component,
  output,
  OutputEmitterRef,
  Signal,
} from '@angular/core';
import { ButtonModule } from 'primeng/button';

import { DossierService } from '../dossier/dossier.service';
import { GameService } from '../game/game.service';
import { PlayerSide } from '../game/player-side.model';

@Component({
  selector: 'app-game-start',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './game-start.component.html',
  styleUrl: './game-start.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameStartComponent {
  gameStart: OutputEmitterRef<void> = output<void>();

  readonly isRuPlayerSide: Signal<boolean> = this._gameService.isRuPlayerSide;
  readonly isUsPlayerSide: Signal<boolean> = this._gameService.isUsPlayerSide;

  constructor(
    private readonly _dossierService: DossierService,
    private readonly _gameService: GameService,
  ) {}

  onGameStart(): void {
    this.gameStart.emit();
  }

  setPlayerSide(playerSide: PlayerSide): void {
    this._gameService.playerSide.set(playerSide);
    this._dossierService.reset();
  }
}
