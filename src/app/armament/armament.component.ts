import {
  ChangeDetectionStrategy,
  Component,
  output,
  OutputEmitterRef,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';

import { MissionService } from '../mission/mission.service';
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

  constructor(private readonly _missionService: MissionService) {
    this._initDefaultWeaponTypes();
  }

  onArmamentSelect(): void {
    this.armamentSelect.emit();
  }

  private _initDefaultWeaponTypes(): void {
    if (this._missionService.boss) {
      this.defaultWeaponTypes[0] = this._missionService.boss.weaponType;
      this.defaultWeaponTypes[1] = this._missionService.boss.weaponType;
    } else {
      this.defaultWeaponTypes[0] =
        this._missionService.primaryTarget?.weaponType;

      this.defaultWeaponTypes[1] =
        this._missionService.secondaryTarget?.weaponType;
    }
  }
}
