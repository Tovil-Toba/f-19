import { Injectable } from '@angular/core';

import { Upgrade } from '../upgrade/upgrade.model';

@Injectable({
  providedIn: 'root',
})
export class UpgradesService {
  readonly selectedUpgrades: Set<Upgrade> = new Set<Upgrade>();
}
