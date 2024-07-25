import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectItemGroup } from 'primeng/api';
import { SelectItem } from 'primeng/api/selectitem';
import { DropdownModule } from 'primeng/dropdown';

import { WEAPONS } from './weapons';

@Component({
  selector: 'app-weapons-bay',
  standalone: true,
  imports: [DropdownModule, FormsModule],
  templateUrl: './weapons-bay.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeaponsBayComponent {
  weapons: SelectItemGroup[] = WEAPONS;
  selectedWeapon?: SelectItem;
}
