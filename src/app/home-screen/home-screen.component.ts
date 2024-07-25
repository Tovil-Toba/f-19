import {
  ChangeDetectionStrategy,
  Component,
  output,
  OutputEmitterRef,
} from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-home-screen',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './home-screen.component.html',
  styleUrl: './home-screen.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeScreenComponent {
  gameStart: OutputEmitterRef<void> = output<void>();

  onGameStart(): void {
    this.gameStart.emit();
  }
}
