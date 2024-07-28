import { Injectable } from '@angular/core';

import { MissionService } from '../mission/mission.service';
import { FIRST_NAMES } from './first-names';
import { LAST_NAMES } from './last-names';

// todo: перенести в pilot-service или person-service
@Injectable({
  providedIn: 'root',
})
export class DossierService {
  readonly firstName = this.getRandomFirstName();
  readonly lastName = this.getRandomLastName();

  get isAce(): boolean {
    return this.getAirTargetsDestroyed() >= 5;
  }

  constructor(private readonly _missionService: MissionService) {}

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
}
