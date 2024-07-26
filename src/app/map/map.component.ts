import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Target } from '../mission/target.model';
import { AVAILABLE_SQUARES_INDEXES } from './available-squares-indexes';

@Component({
  selector: 'app-map',
  standalone: true,
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapComponent {
  readonly availableSquaresIndexes: number[] = AVAILABLE_SQUARES_INDEXES;
  readonly squaresCount = 100;
  readonly squaresIndexes: number[] = [...Array(this.squaresCount).keys()];

  @Input()
  boss?: Target;

  @Input()
  isAvailableSquaresHighlighted = false;

  @Input()
  isGridEnabled = true;

  @Input()
  player?: Target;

  @Input()
  primaryTarget?: Target;

  @Input()
  secondaryTarget?: Target;
}
