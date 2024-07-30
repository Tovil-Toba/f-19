import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectItemGroup } from 'primeng/api';
import { SelectItem } from 'primeng/api/selectitem';
import { DropdownModule } from 'primeng/dropdown';

import { WeaponType } from './weapon-type.model';
import { WEAPONS } from './weapons';

@Component({
  selector: 'app-weapons-bay',
  standalone: true,
  imports: [DropdownModule, FormsModule],
  templateUrl: './weapons-bay.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeaponsBayComponent implements OnInit {
  @Input()
  defaultWeaponType?: WeaponType;

  @Input()
  upgradedWeaponNames?: Set<string>;

  weapons: SelectItemGroup[] = WEAPONS;
  selectedWeapon?: SelectItem;

  ngOnInit(): void {
    this._selectDefaultWeapon();
  }

  private _selectDefaultWeapon(): void {
    if (!this.defaultWeaponType) {
      return;
    }

    for (const weapon of WEAPONS) {
      const selectedWeapon = weapon.items.find(
        (item) => item.value === this.defaultWeaponType,
      );

      if (selectedWeapon) {
        this.selectedWeapon = selectedWeapon;

        return;
      }
    }
  }
}
