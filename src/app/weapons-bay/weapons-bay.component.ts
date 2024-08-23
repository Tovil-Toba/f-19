import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
  OnInit,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectItemGroup } from 'primeng/api';
import { SelectItem } from 'primeng/api/selectitem';
import { DropdownModule } from 'primeng/dropdown';

import { GameService } from '../game/game.service';
import { WeaponType } from './weapon-type.model';
import { WEAPONS_RU } from './weapons-ru';
import { WEAPONS_US } from './weapons-us';

@Component({
  selector: 'app-weapons-bay',
  standalone: true,
  imports: [DropdownModule, FormsModule],
  templateUrl: './weapons-bay.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeaponsBayComponent implements OnInit {
  private readonly _gameService = inject(GameService);

  @Input()
  defaultWeaponType?: WeaponType;

  @Input()
  upgradedWeaponNames?: Set<string>;

  selectedWeapon?: SelectItem;

  get weapons(): SelectItemGroup[] {
    return this._gameService.isRuPlayerSide() ? WEAPONS_RU : WEAPONS_US;
  }

  ngOnInit(): void {
    this._selectDefaultWeapon();
  }

  private _selectDefaultWeapon(): void {
    if (!this.defaultWeaponType) {
      return;
    }

    for (const weapon of this.weapons) {
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
