import {
  ChangeDetectionStrategy,
  Component,
  output,
  OutputEmitterRef,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';

import { MapService } from '../map/map.service';
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

  constructor(private readonly _mapService: MapService) {
    this._initDefaultWeaponTypes();
  }

  onArmamentSelect(): void {
    this.armamentSelect.emit();
  }

  private _initDefaultWeaponTypes(): void {
    if (this._mapService.boss) {
      this.defaultWeaponTypes[0] = this._mapService.boss.weaponType;
      this.defaultWeaponTypes[1] = this._mapService.boss.weaponType;
    } else {
      this.defaultWeaponTypes[0] = this._mapService.primaryTarget?.weaponType;
      this.defaultWeaponTypes[1] = this._mapService.secondaryTarget?.weaponType;
    }
  }
}
