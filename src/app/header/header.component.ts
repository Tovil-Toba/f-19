import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  Signal,
} from '@angular/core';
import { ConfirmationService, MenuItem } from 'primeng/api';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { MenubarModule } from 'primeng/menubar';
import { Observable } from 'rxjs';

import { SharedService } from '../core/shared.service';
import { ThemeService } from '../core/theme.service';
import { GameService } from '../game/game.service';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    ButtonModule,
    MenubarModule,
    ConfirmPopupModule,
    BadgeModule,
    AsyncPipe,
  ],
  providers: [ConfirmationService],
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  readonly isRuPlayerSide: Signal<boolean> = this._gameService.isRuPlayerSide;
  readonly isUsPlayerSide: Signal<boolean> = this._gameService.isUsPlayerSide;
  readonly isDarkTheme: Signal<boolean> = this._themeService.isDarkTheme;
  readonly menuItems$: Observable<MenuItem[]> = this._headerService.menuItems$;

  constructor(
    private readonly _confirmationService: ConfirmationService,
    private readonly _gameService: GameService,
    private readonly _headerService: HeaderService,
    private readonly _sharedService: SharedService,
    private readonly _themeService: ThemeService,
  ) {}

  confirmGameReset(event: Event): void {
    this._confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Перезапустить игру?',
      icon: 'fa-regular fa-circle-exclamation',
      accept: () => {
        this._sharedService.resetGame();
      },
      acceptLabel: 'Да',
      rejectLabel: 'Нет',
    });
  }

  ngOnInit(): void {
    this._themeService.initTheme();
  }

  toggleTheme(): void {
    this._themeService.toggleTheme();
  }
}
