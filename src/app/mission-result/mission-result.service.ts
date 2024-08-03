import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

import { GameService } from '../game/game.service';
import {
  BOSS_COST,
  PRIMARY_TARGET_COST,
  SECONDARY_TARGET_COST,
} from '../game/game-settings';
import { Mission } from '../mission/mission.model';
import { MissionService } from '../mission/mission.service';
import { TargetType } from '../mission/target-type.model';
import { RewardService } from '../reward/reward.service';

@Injectable()
export class MissionResultService {
  constructor(
    private readonly _gameService: GameService,
    private readonly _messageService: MessageService,
    private readonly _missionService: MissionService,
    private readonly _rewardService: RewardService,
  ) {}

  completeMission(mission: Mission | undefined): void {
    if (!mission || mission?.isCompleted) {
      return;
    }

    mission.isCompleted = true;
    mission.airTargetsDestroyed = this._getTargetsDestroyed(mission, 'air');
    mission.landTargetsDestroyed = this._getTargetsDestroyed(mission, 'land');
    mission.seaTargetsDestroyed = this._getTargetsDestroyed(mission, 'sea');

    const currentMissionTier = this._gameService.currentMissionTier();
    let money = 0;

    if (mission.boss) {
      const cost = BOSS_COST * currentMissionTier;
      money += cost;

      mission.boss.isDestroyed = true;
      mission.boss.cost = cost;
    }

    if (mission.primaryTarget) {
      const cost = PRIMARY_TARGET_COST * currentMissionTier;
      money += cost;

      mission.primaryTarget.isDestroyed = true;
      mission.primaryTarget.cost = cost;
    }

    if (mission.secondaryTarget) {
      const cost = SECONDARY_TARGET_COST * currentMissionTier;
      money += cost;

      mission.secondaryTarget.isDestroyed = true;
      mission.secondaryTarget.cost = cost;
    }

    this._rewardService.fillWallet(money);
    this._missionService.completeMission(mission);

    if (this._gameService.isBossMission()) {
      this._gameService.incrementCompletedBossMissions();
    } else {
      this._gameService.incrementCompletedStandardMissions();
    }

    this._showMissionCompleteToast();
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

  private _showMissionCompleteToast() {
    this._messageService.add({
      severity: 'success',
      summary: 'Миссия завершена',
    });
  }
}
