import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

import { GameService } from '../game/game.service';
import { AVAILABLE_SQUARES_INDEXES } from './available-squares-indexes';
import { MapService } from './map.service';
import { Target } from './target.model';

@Component({
  selector: 'app-map',
  standalone: true,
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapComponent implements OnInit {
  readonly availableSquaresIndexes = AVAILABLE_SQUARES_INDEXES;
  readonly squaresCount = 100;
  readonly squaresIndexes: number[] = [...Array(this.squaresCount).keys()];

  boss?: Target;
  player?: Target;
  primaryTarget?: Target;
  secondaryTarget?: Target;

  @Input()
  isGridEnabled = true;

  @Input()
  isAvailableSquaresHighlighted = false;

  constructor(
    private readonly _gameService: GameService,
    private readonly _mapService: MapService,
  ) {}

  ngOnInit(): void {
    if (
      this._mapService.missionNumber !==
      this._gameService.currentMissionNumber()
    ) {
      this._mapService.init();
    }

    this.boss = this._mapService.boss;
    this.player = this._mapService.player;
    this.primaryTarget = this._mapService.primaryTarget;
    this.secondaryTarget = this._mapService.secondaryTarget;
  }
}
