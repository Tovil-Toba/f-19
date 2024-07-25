import {
  computed,
  Injectable,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';

import {
  COMPLETED_STANDARD_MISSIONS_INTERVAL,
  MAX_MISSION_TIER,
  TOTAL_MISSIONS_COUNT,
} from './game-settings';
import { GAME_STEPS, GameStep } from './game-step.model';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private _gameStepIndex = -1;

  private readonly _completedBossMissionsCount: WritableSignal<number> =
    signal(0);

  private readonly _completedStandardMissionsCount: WritableSignal<number> =
    signal(0);

  private readonly _currentMissionNumber: WritableSignal<number> = signal(1);
  private readonly _currentMissionTier: WritableSignal<number> = signal(1);

  private readonly _gameStep: WritableSignal<GameStep | undefined> =
    signal(undefined);

  private readonly _isBossMission: WritableSignal<boolean> = signal(false);
  private readonly _isGameOver: WritableSignal<boolean> = signal(false);
  private readonly _isGameStarted: WritableSignal<boolean> = signal(false);

  readonly completedBossMissionsCount: WritableSignal<number> =
    this._completedBossMissionsCount;

  readonly completedMissionsCount: Signal<number> = computed(
    () =>
      this.completedStandardMissionsCount() + this.completedBossMissionsCount(),
  );

  readonly completedStandardMissionsCount: Signal<number> =
    this._completedStandardMissionsCount;

  readonly currentMissionNumber: Signal<number> = this._currentMissionNumber;
  readonly currentMissionTier: Signal<number> = this._currentMissionTier;
  readonly gameStep: Signal<GameStep | undefined> = this._gameStep;
  readonly isBossMission: Signal<boolean> = this._isBossMission;
  readonly isGameOver: Signal<boolean> = this._isGameOver;
  readonly isGameStarted: Signal<boolean> = this._isGameStarted;

  incrementCompletedBossMissions(): void {
    this.completedBossMissionsCount.update((value) => ++value);
  }

  incrementCompletedStandardMissions(): void {
    this._completedStandardMissionsCount.update((value) => ++value);
  }

  nextGameStep(): void {
    this._gameStepIndex++;
    this._checkIsNewCycle();
    this._gameStep.set(GAME_STEPS[this._gameStepIndex]);
  }

  startGame(): void {
    this._isGameStarted.set(true);
  }

  private _checkIsNewCycle(): void {
    if (this._gameStepIndex <= GAME_STEPS.length - 1) {
      return;
    }

    this._resetGameStepIndex();
    this._checkIsGameOver();
    this._incrementCurrentMissionNumber();
    this._checkCurrentMissionTier(this._isBossMission());
    this._checkIsBossCurrentMission();
  }

  private _checkCurrentMissionTier(isBossPreviousMission: boolean): void {
    if (
      isBossPreviousMission &&
      this._currentMissionTier() <= MAX_MISSION_TIER
    ) {
      this._currentMissionTier.update((value) => ++value);
    }
  }

  private _checkIsBossCurrentMission(): void {
    const completedStandardMissionsCount =
      this._completedStandardMissionsCount();

    const isBossMission = this._isBossMission()
      ? false
      : completedStandardMissionsCount > 0 &&
        !(
          completedStandardMissionsCount % COMPLETED_STANDARD_MISSIONS_INTERVAL
        );

    this._isBossMission.set(isBossMission);
  }

  private _checkIsGameOver(): void {
    if (this.completedMissionsCount() >= TOTAL_MISSIONS_COUNT) {
      this._isGameOver.set(true);
    }
  }

  private _incrementCurrentMissionNumber(): void {
    this._currentMissionNumber.update((value) => ++value);
  }

  private _resetGameStepIndex(): void {
    this._gameStepIndex = 0;
  }
}
