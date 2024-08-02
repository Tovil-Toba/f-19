import { ChangeDetectionStrategy, Component, Signal } from '@angular/core';

import { ArmamentComponent } from '../armament/armament.component';
import { GameOverComponent } from '../game-over/game-over.component';
import { HomeScreenComponent } from '../home-screen/home-screen.component';
import { MissionComponent } from '../mission/mission.component';
import { MissionResultComponent } from '../mission-result/mission-result.component';
import { RewardComponent } from '../reward/reward.component';
import { RewardService } from '../reward/reward.service';
import { StoreComponent } from '../store/store.component';
import { UpgradeComponent } from '../upgrade/upgrade.component';
import { Upgrade } from '../upgrade/upgrade.model';
import { GameService } from './game.service';
import { GameStep } from './game-step.model';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [
    ArmamentComponent,
    GameOverComponent,
    HomeScreenComponent,
    MissionComponent,
    MissionResultComponent,
    RewardComponent,
    StoreComponent,
    UpgradeComponent,
  ],
  templateUrl: './game.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameComponent {
  readonly gameStep: Signal<GameStep | undefined> = this._gameService.gameStep;
  readonly isGameOver: Signal<boolean> = this._gameService.isGameOver;

  isMissionConfirmed = false;
  selectedUpgrade?: Upgrade;

  constructor(
    private readonly _gameService: GameService,
    private readonly _rewardService: RewardService,
  ) {}

  onArmamentSelect(): void {
    this._gameService.nextGameStep();
  }

  onGameStart(): void {
    this._gameService.startGame();
  }

  onMissionConfirm(): void {
    this.isMissionConfirmed = true;
    this._gameService.nextGameStep();
  }

  onShoppingCompleted(): void {
    this._gameService.nextGameStep();
  }

  onUpgradeSelect(upgrade?: Upgrade): void {
    this.selectedUpgrade = upgrade;

    if (upgrade) {
      this._rewardService.selectedUpgrades.add(upgrade);
    }

    this._gameService.nextGameStep();
  }
}
