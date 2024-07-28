import { Target } from './target.model';

export interface Mission {
  airTargetsDestroyed?: number;
  boss?: Target;
  isCompleted?: boolean;
  landTargetsDestroyed?: number;
  number: number;
  player?: Target;
  primaryTarget?: Target;
  seaTargetsDestroyed?: number;
  secondaryTarget?: Target;
}
