import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

import { SharedService } from '../core/shared.service';

@Component({
  selector: 'app-game-over',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './game-over.component.html',
  styleUrl: './game-over.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameOverComponent {
  constructor(private readonly _sharedService: SharedService) {}

  resetGame(): void {
    this._sharedService.resetGame();
  }
}
