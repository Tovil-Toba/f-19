import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  output,
  OutputEmitterRef,
  Signal,
} from '@angular/core';

import { GameService } from '../game/game.service';
import { PlayerSide } from '../game/player-side.model';
import { RewardService } from '../reward/reward.service';
import { StoreService } from '../store/store.service';
import { UpgradeComponent } from '../upgrade/upgrade.component';
import { Upgrade } from '../upgrade/upgrade.model';
import { UPGRADES } from '../upgrades/upgrades';
import { UpgradeGroup } from './upgrade-group.model';
import { UPGRADE_GROUP_TITLE } from './upgrade-group-title';

@Component({
  selector: 'app-upgrades-group',
  standalone: true,
  imports: [UpgradeComponent],
  templateUrl: './upgrades-group.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpgradesGroupComponent implements OnInit {
  @Input({ required: true })
  group!: UpgradeGroup;

  @Input()
  isStore = false;

  @Input()
  isUpgradesActive = false;

  @Input()
  selectedUpgrade?: Upgrade;

  @Input()
  upgrades?: Upgrade[];

  selectedUpgrades: Set<Upgrade> = this._rewardService.selectedUpgrades;
  title = '';
  upgradeClick: OutputEmitterRef<Upgrade> = output<Upgrade>();
  readonly wallet: Signal<number> = this._rewardService.wallet;

  constructor(
    private readonly _gameService: GameService,
    private readonly _rewardService: RewardService,
    private readonly _storeService: StoreService,
  ) {}

  isEnoughMoney(upgrade: Upgrade): boolean {
    const price = this._storeService.getUpgradePrice(upgrade);

    return price <= this.wallet();
  }

  isUpgradeActive(upgrade: Upgrade): boolean {
    const price = this._storeService.getUpgradePrice(upgrade);

    const isStoreUpgradeActive =
      !this._rewardService.selectedUpgrades.has(upgrade) &&
      price <= this._rewardService.wallet();

    const isUpgradeActive =
      this.isUpgradesActive ||
      this._rewardService.selectedUpgrades.has(upgrade);

    return this.isStore ? isStoreUpgradeActive : isUpgradeActive;
  }

  isUpgradeSold(upgrade: Upgrade): boolean {
    return this.isStore && this._rewardService.selectedUpgrades.has(upgrade);
  }

  ngOnInit(): void {
    this.title = UPGRADE_GROUP_TITLE[this.group];

    const playerSide: PlayerSide = this._gameService.playerSide();

    this.upgrades = (this.upgrades ?? UPGRADES).filter(
      (upgrade: Upgrade) =>
        upgrade.group === this.group &&
        (!upgrade.playerSide || upgrade.playerSide === playerSide),
    );
  }

  onUpgradeClick(upgrade: Upgrade): void {
    this.upgradeClick.emit(upgrade);
  }
}
