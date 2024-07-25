import { Injectable } from '@angular/core';

import { GameService } from '../game/game.service';
import { BOSSES } from './bosses';
import { LAND_SQUARES_INDEXES } from './land-squares-indexes';
import { PLAYER } from './player';
import { PLAYER_SQUARES_INDEXES } from './player-squares-indexes';
import { PRIMARY_TARGETS } from './primary-targets';
import { SEA_SQUARES_INDEXES } from './sea-squares-indexes';
import { SECONDARY_TARGETS } from './secondary-targets';
import { Target } from './target.model';
import { TargetType } from './target-type.model';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  // todo: Вынести в папку target все, что с целями связано
  boss?: Target;
  player?: Target;
  primaryTarget?: Target;
  secondaryTarget?: Target;

  private _missionNumber?: number;
  private _occupiedSquaresIndexes: number[] = [];

  get missionNumber(): number | undefined {
    return this._missionNumber;
  }

  constructor(private readonly _gameService: GameService) {}

  getBoss(tier = 1): Target {
    const targets: Target[] = BOSSES.filter(
      (target: Target) => target.tier === tier,
    );

    const random = Math.floor(Math.random() * targets.length);
    const target: Target = structuredClone(targets[random]);

    target.squareIndex = this._getRandomSquareIndex(target.type);

    return target;
  }

  getPlayer(): Target {
    const player: Target = structuredClone(PLAYER);

    player.squareIndex = this._getRandomSquareIndex(player.type);

    return player;
  }

  getPrimaryTarget(): Target {
    const random = Math.floor(Math.random() * PRIMARY_TARGETS.length);
    const target: Target = structuredClone(PRIMARY_TARGETS[random]);

    target.squareIndex = this._getRandomSquareIndex(target.type);

    return target;
  }

  getSecondaryTarget(): Target {
    const random = Math.floor(Math.random() * SECONDARY_TARGETS.length);
    const target: Target = structuredClone(SECONDARY_TARGETS[random]);

    target.squareIndex = this._getRandomSquareIndex(target.type);

    return target;
  }

  init(): void {
    this._missionNumber = this._gameService.currentMissionNumber();
    this._occupiedSquaresIndexes = [];
    this.player = this.getPlayer();

    this.boss = this._gameService.isBossMission()
      ? this.getBoss(this._gameService.currentMissionTier())
      : undefined;

    this.primaryTarget = this._gameService.isBossMission()
      ? undefined
      : this.getPrimaryTarget();

    this.secondaryTarget = this._gameService.isBossMission()
      ? undefined
      : this.getSecondaryTarget();
  }

  private _getRandomSquareIndex(targetType: TargetType): number {
    let squareIndex = 0;

    switch (targetType) {
      case 'air':
        squareIndex = this._getRandomAirSquareIndex();
        break;
      case 'land':
        squareIndex = this._getRandomLandSquareIndex();
        break;
      case 'sea':
        squareIndex = this._getRandomSeaSquareIndex();
        break;
      case 'player':
      default:
        squareIndex = this._getRandomPlayerSquareIndex();
        break;
    }

    if (this._occupiedSquaresIndexes.includes(squareIndex)) {
      return this._getRandomSquareIndex(targetType);
    }

    this._occupiedSquaresIndexes.push(squareIndex);

    return squareIndex;
  }

  private _getRandomAirSquareIndex(): number {
    const airSquaresIndexes: number[] = [
      ...LAND_SQUARES_INDEXES,
      ...SEA_SQUARES_INDEXES,
    ];
    const random = Math.floor(Math.random() * airSquaresIndexes.length);

    return airSquaresIndexes[random];
  }

  private _getRandomLandSquareIndex(): number {
    const random = Math.floor(Math.random() * LAND_SQUARES_INDEXES.length);

    return LAND_SQUARES_INDEXES[random];
  }

  private _getRandomPlayerSquareIndex(): number {
    const random = Math.floor(Math.random() * PLAYER_SQUARES_INDEXES.length);

    return PLAYER_SQUARES_INDEXES[random];
  }

  private _getRandomSeaSquareIndex(): number {
    const random = Math.floor(Math.random() * SEA_SQUARES_INDEXES.length);

    return SEA_SQUARES_INDEXES[random];
  }
}
