import { Target } from './target.model';

export interface Mission {
  boss?: Target;
  isCompleted?: boolean;
  number: number;
  primaryTarget?: Target;
  secondaryTarget?: Target;
}
