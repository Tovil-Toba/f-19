import { PlayerSide } from '../game/player-side.model';
import { UpgradeGroup } from '../upgrades-group/upgrade-group.model';
import { UpgradeTier } from './upgrade-tier.model';

export interface Upgrade {
  description: string;
  discountPercents?: number;
  group: UpgradeGroup;
  id?: string; // todo
  icon: string;
  name: string;
  playerSide?: PlayerSide;
  price: number;
  tier: UpgradeTier;
}
