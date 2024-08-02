import {
  ChangeDetectionStrategy,
  Component,
  output,
  OutputEmitterRef,
  Signal,
} from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

import { RewardService } from '../reward/reward.service';
import { Upgrade } from '../upgrade/upgrade.model';
import { UpgradesComponent } from '../upgrades/upgrades.component';
import { StoreService } from './store.service';

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [ButtonModule, UpgradesComponent, ConfirmDialogModule],
  providers: [ConfirmationService],
  templateUrl: './store.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoreComponent {
  shoppingCompleted: OutputEmitterRef<void> = output<void>();

  randomUpgrades: Upgrade[] = this._storeService.randomUpgrades;
  selectedUpgrade?: Upgrade;
  readonly wallet: Signal<number> = this._rewardService.wallet;

  constructor(
    private readonly _confirmationService: ConfirmationService,
    private readonly _rewardService: RewardService,
    private readonly _storeService: StoreService,
  ) {}

  onShoppingCompleted(): void {
    this.shoppingCompleted.emit();
  }

  onUpgradeClick(upgrade: Upgrade): void {
    if (upgrade.price > this._rewardService.wallet()) {
      return;
    }

    this._confirmationService.confirm({
      message: `Купить <span class="font-bold">${upgrade.name}</span> за <span class="font-medium">$${upgrade.price}?</span>`,
      header: 'Покупка',
      icon: upgrade.icon,
      rejectButtonStyleClass: 'p-button-text',
      acceptLabel: 'Купить',
      rejectLabel: 'Отмена',
      accept: () => this._buyUpgrade(upgrade),
    });
  }

  private _buyUpgrade(upgrade: Upgrade): void {
    this.selectedUpgrade = upgrade;
    this._rewardService.takeMoney(upgrade.price);
    this._rewardService.selectedUpgrades.add(upgrade);
  }
}
