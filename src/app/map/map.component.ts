import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Signal,
} from '@angular/core';

import { GameService } from '../game/game.service';
import { Mission } from '../mission/mission.model';
import { AVAILABLE_SQUARES_INDEXES } from './available-squares-indexes';

@Component({
  selector: 'app-map',
  standalone: true,
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapComponent {
  @Input()
  isAvailableSquaresHighlighted = false;

  @Input()
  isGridEnabled = true;

  @Input()
  isSmall = false;

  @Input()
  mission?: Mission;

  readonly availableSquaresIndexes: number[] = AVAILABLE_SQUARES_INDEXES;
  readonly isRuPlayerSide: Signal<boolean> = this._gameService.isRuPlayerSide;
  readonly isUsPlayerSide: Signal<boolean> = this._gameService.isUsPlayerSide;
  readonly squaresCount = 100;
  readonly squaresIndexes: number[] = [...Array(this.squaresCount).keys()];

  constructor(private readonly _gameService: GameService) {}
}
