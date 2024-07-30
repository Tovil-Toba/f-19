import {
  ChangeDetectionStrategy,
  Component,
  output,
  OutputEmitterRef,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';

import { Mission } from '../mission/mission.model';
import { MissionService } from '../mission/mission.service';
import { RewardService } from '../reward/reward.service';
import { Upgrade } from '../upgrade/upgrade.model';
import { WeaponType } from '../weapons-bay/weapon-type.model';
import { WeaponsBayComponent } from '../weapons-bay/weapons-bay.component';

@Component({
  selector: 'app-armament',
  standalone: true,
  imports: [DropdownModule, FormsModule, WeaponsBayComponent, ButtonModule],
  templateUrl: './armament.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArmamentComponent {
  armamentSelect: OutputEmitterRef<void> = output<void>();

  readonly defaultWeaponTypes: (WeaponType | undefined)[] = [
    undefined,
    undefined,
    'AIM-9 Sidewinder',
    'AIM-7 Sparrow',
  ];

  readonly upgradedWeaponNames: Set<string> = new Set<string>();

  constructor(
    private readonly _missionService: MissionService,
    private readonly _rewardService: RewardService,
  ) {
    this._initDefaultWeaponTypes();
    this._initUpgradedWeaponNames();
  }

  onArmamentSelect(): void {
    this.armamentSelect.emit();
  }

  private _initDefaultWeaponTypes(): void {
    const mission: Mission | undefined = this._missionService.mission();

    if (mission?.boss) {
      this.defaultWeaponTypes[0] = mission.boss.weaponType;
      this.defaultWeaponTypes[1] = mission.boss.weaponType;
    } else {
      this.defaultWeaponTypes[0] = mission?.primaryTarget?.weaponType;
      this.defaultWeaponTypes[1] = mission?.secondaryTarget?.weaponType;
    }
  }

  private _initUpgradedWeaponNames(): void {
    this.upgradedWeaponNames.clear();

    this._rewardService.selectedUpgrades.forEach((upgrade: Upgrade) => {
      if (upgrade.group === 'weapon') {
        this.upgradedWeaponNames.add(upgrade.name);
      }
    });
  }
}
