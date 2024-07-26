import { WeaponType } from '../weapons-bay/weapon-type.model';
import { TargetType } from './target-type.model';

export interface Target {
  icon: string;
  id: string;
  isBoss?: boolean;
  label?: string;
  squareIndex?: number;
  tier?: number;
  type: TargetType;
  weaponType?: WeaponType;
}
