import { Injectable, Signal } from '@angular/core';

import { MissionService } from '../mission/mission.service';
import { RewardService } from '../reward/reward.service';
import { FIRST_NAMES } from './first-names';
import { LAST_NAMES } from './last-names';

// todo: перенести в pilot-service или person-service
@Injectable({
  providedIn: 'root',
})
export class DossierService {
  private _firstName = this.getRandomFirstName();
  private _lastName = this.getRandomLastName();

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

  constructor(
    private readonly _missionService: MissionService,
    private readonly _rewardService: RewardService,
  ) {}

  getRandomFirstName(): string {
    const random = Math.floor(Math.random() * FIRST_NAMES.length);

    return FIRST_NAMES[random];
  }

  getRandomLastName(): string {
    const random = Math.floor(Math.random() * LAST_NAMES.length);

    return LAST_NAMES[random];
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
  }
}
