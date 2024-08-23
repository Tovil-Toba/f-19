import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Signal,
} from '@angular/core';

import { ArmamentComponent } from '../armament/armament.component';
import { GameOverComponent } from '../game-over/game-over.component';
import { GameStartComponent } from '../game-start/game-start.component';
import { HeaderService } from '../header/header.service';
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
    GameStartComponent,
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
  private readonly _gameService = inject(GameService);
  private readonly _headerService = inject(HeaderService);
  private readonly _rewardService = inject(RewardService);

  readonly gameStep: Signal<GameStep | undefined> = this._gameService.gameStep;
  readonly isGameOver: Signal<boolean> = this._gameService.isGameOver;

  isMissionConfirmed = false;

  onArmamentSelect(): void {
    this._headerService.setBadge('missions-history');
    this._headerService.setBadge('dossier');
    this._gameService.nextGameStep();
  }

  onGameStart(): void {
    this._gameService.startGame();
  }

  onMissionComplete(): void {
    this._gameService.nextGameStep();
  }

  onMissionConfirm(): void {
    this.isMissionConfirmed = true;
    this._gameService.nextGameStep();
  }

  onShoppingComplete(): void {
    this._gameService.nextGameStep();
  }

  onUpgradeBuy(): void {
    this._headerService.setBadge('upgrades');
    this._headerService.setBadge('dossier');
  }

  onUpgradeSelect(upgrade?: Upgrade): void {
    if (upgrade) {
      this._rewardService.selectedUpgrades.add(upgrade);
      this._headerService.setBadge('upgrades');
    }

    this._gameService.nextGameStep();
  }
}
