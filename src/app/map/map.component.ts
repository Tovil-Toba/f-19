import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Mission } from '../mission/mission.model';
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
  isAvailableSquaresHighlighted = false;

  @Input()
  isGridEnabled = true;

  @Input()
  isSmall = false;

  @Input()
  mission?: Mission;
}
