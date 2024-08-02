import { Injectable, Signal, signal, WritableSignal } from '@angular/core';

import { GameService } from '../game/game.service';
import { LAND_SQUARES_INDEXES } from '../map/land-squares-indexes';
import { PLAYER_SQUARES_INDEXES } from '../map/player-squares-indexes';
import { SEA_SQUARES_INDEXES } from '../map/sea-squares-indexes';
import { BOSSES } from './bosses';
import { Mission } from './mission.model';
import { PLAYER } from './player';
import { PRIMARY_TARGETS } from './primary-targets';
import { SECONDARY_TARGETS } from './secondary-targets';
import { Target } from './target.model';
import { TargetType } from './target-type.model';

@Injectable({
  providedIn: 'root',
})
export class MissionService {
  private readonly _destroyedPrimaryTargetIds: string[] = [];

  private readonly _mission: WritableSignal<Mission | undefined> =
    signal(undefined);

  private _missionsHistory: Mission[] = [];
  private _missionNumber?: number;
  private _occupiedSquaresIndexes: number[] = [];

  readonly mission: Signal<Mission | undefined> = this._mission;

  get missionsHistory(): Mission[] {
    return this._missionsHistory;
  }

  constructor(private readonly _gameService: GameService) {}

  init(): void {
    const currentMissionNumber = this._gameService.currentMissionNumber();

    if (this._missionNumber === currentMissionNumber) {
      return;
    }

    this._missionNumber = currentMissionNumber;
    this._occupiedSquaresIndexes = [];

    const player: Target = this._getPlayer();
    const currentMissionTier = this._gameService.currentMissionTier();
    const isBossMission = this._gameService.isBossMission();

    const boss: Target | undefined = isBossMission
      ? this._getBoss(currentMissionTier)
      : undefined;

    const primaryTarget: Target | undefined = isBossMission
      ? undefined
      : this._getPrimaryTarget();

    const secondaryTarget: Target | undefined = isBossMission
      ? undefined
      : this._getSecondaryTarget();

    const mission: Mission = {
      airTargetsDestroyed: 0,
      boss,
      isCompleted: false,
      landTargetsDestroyed: 0,
      number: currentMissionNumber,
      player,
      primaryTarget,
      seaTargetsDestroyed: 0,
      secondaryTarget,
      tier: currentMissionTier,
    };

    this._mission.set(mission);
  }

  completeMission(mission: Mission): void {
    this._mission.set(mission);
    this._missionsHistory.push(mission);

    if (mission.primaryTarget) {
      this._destroyedPrimaryTargetIds.push(mission.primaryTarget.id);
    }
  }

  reset(): void {
    this._mission.set(undefined);
    this._missionsHistory = [];
    this._missionNumber = undefined;
    this._occupiedSquaresIndexes = [];
  }

  private _getBoss(tier = 1): Target {
    const targets: Target[] = BOSSES.filter(
      (target: Target) => target.tier === tier,
    );

    const random = Math.floor(Math.random() * targets.length);
    const target: Target = structuredClone(targets[random]);

    target.squareIndex = this._getRandomSquareIndex(target.type);

    return target;
  }

  private _getPlayer(): Target {
    const player: Target = structuredClone(PLAYER);

    player.squareIndex = this._getRandomSquareIndex(player.type);

    return player;
  }

  private _getPrimaryTarget(): Target {
    const primaryTargets: Target[] = PRIMARY_TARGETS.filter(
      (target: Target) => !this._destroyedPrimaryTargetIds.includes(target.id),
    );

    const random = Math.floor(Math.random() * primaryTargets.length);
    const target: Target = structuredClone(primaryTargets[random]);

    target.squareIndex = this._getRandomSquareIndex(target.type);

    return target;
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

  private _getSecondaryTarget(): Target {
    const random = Math.floor(Math.random() * SECONDARY_TARGETS.length);
    const target: Target = structuredClone(SECONDARY_TARGETS[random]);

    target.squareIndex = this._getRandomSquareIndex(target.type);

    return target;
  }
}
