import { Injectable } from '@angular/core';

import { GameService } from '../game/game.service';
import { Mission } from '../mission/mission.model';
import { MissionService } from '../mission/mission.service';
import { TargetType } from '../mission/target-type.model';

@Injectable()
export class MissionResultService {
  constructor(
    private readonly _gameService: GameService,
    private readonly _missionService: MissionService,
  ) {}

  completeMission(mission: Mission | undefined): void {
    if (!mission || mission?.isCompleted) {
      return;
    }

    mission.isCompleted = true;
    mission.airTargetsDestroyed = this._getTargetsDestroyed(mission, 'air');
    mission.landTargetsDestroyed = this._getTargetsDestroyed(mission, 'land');
    mission.seaTargetsDestroyed = this._getTargetsDestroyed(mission, 'sea');

    if (mission.boss) {
      mission.boss.isDestroyed = true;
    }

    if (mission.primaryTarget) {
      mission.primaryTarget.isDestroyed = true;
    }

    if (mission.secondaryTarget) {
      mission.secondaryTarget.isDestroyed = true;
    }

    this._missionService.completeMission(mission);

    if (this._gameService.isBossMission()) {
      this._gameService.incrementCompletedBossMissions();
    } else {
      this._gameService.incrementCompletedStandardMissions();
    }
  }

  private _getTargetsDestroyed(
    mission: Mission,
    targetType: TargetType,
  ): number {
    return (
      (mission?.boss?.type === targetType ? mission.boss?.count ?? 1 : 0) +
      (mission?.primaryTarget?.type === targetType
        ? mission.primaryTarget?.count ?? 1
        : 0) +
      (mission?.secondaryTarget?.type === targetType
        ? mission.secondaryTarget?.count ?? 1
        : 0)
    );
  }
}
