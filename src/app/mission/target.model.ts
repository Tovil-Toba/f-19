import { WeaponType } from '../weapons-bay/weapon-type.model';
import { TargetType } from './target-type.model';

export interface Target {
  count?: number;
  cost?: number;
  icon: string;
  id: string;
  isDestroyed?: boolean;
  label?: string;
  squareIndex?: number;
  tier?: number;
  type: TargetType;
  weaponType?: WeaponType;
}
