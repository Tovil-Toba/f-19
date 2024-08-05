import { Injectable, Signal } from '@angular/core';

import { FaceService } from '../face/face.service';
import { GameService } from '../game/game.service';
import { MissionService } from '../mission/mission.service';
import { RewardService } from '../reward/reward.service';
import { FIRST_NAMES_RU } from './first-names-ru';
import { FIRST_NAMES_US } from './first-names-us';
import { LAST_NAMES_RU } from './last-names-ru';
import { LAST_NAMES_US } from './last-names-us';

// todo: перенести в pilot-service или person-service
@Injectable({
  providedIn: 'root',
})
export class DossierService {
  private _firstName = '';
  private _lastName = '';

  readonly wallet: Signal<number> = this._rewardService.wallet;

  get isAce(): boolean {
    return this.getAirTargetsDestroyed() >= 5;
  }

  get firstName(): string {
    return this._firstName;
  }

  get lastName(): string {
    return this._lastName;
  }

  get _firstNames(): string[] {
    return this._gameService.isRuPlayerSide() ? FIRST_NAMES_RU : FIRST_NAMES_US;
  }

  get _lastNames(): string[] {
    return this._gameService.isRuPlayerSide() ? LAST_NAMES_RU : LAST_NAMES_US;
  }

  constructor(
    private readonly _faceService: FaceService,
    private readonly _gameService: GameService,
    private readonly _missionService: MissionService,
    private readonly _rewardService: RewardService,
  ) {
    this.reset();
  }

  getRandomFirstName(): string {
    const random = Math.floor(Math.random() * this._firstNames.length);

    return this._firstNames[random];
  }

  getRandomLastName(): string {
    const random = Math.floor(Math.random() * this._lastNames.length);

    return this._lastNames[random];
  }

  getAirTargetsDestroyed(): number {
    return this._missionService.missionsHistory.reduce(
      (accumulator, mission) =>
        accumulator + (mission.airTargetsDestroyed ?? 0),
      0,
    );
  }

  getLandTargetsDestroyed(): number {
    return this._missionService.missionsHistory.reduce(
      (accumulator, mission) =>
        accumulator + (mission.landTargetsDestroyed ?? 0),
      0,
    );
  }

  getSeaTargetsDestroyed(): number {
    return this._missionService.missionsHistory.reduce(
      (accumulator, mission) =>
        accumulator + (mission.seaTargetsDestroyed ?? 0),
      0,
    );
  }

  reset(): void {
    this._firstName = this.getRandomFirstName();
    this._lastName = this.getRandomLastName();

    this._faceService.reset();
  }
}
