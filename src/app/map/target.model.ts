import { TargetType } from './target-type.model';

export interface Target {
  id: string;
  icon: string;
  isBoss?: boolean;
  squareIndex?: number;
  tier?: number;
  type: TargetType;
}
