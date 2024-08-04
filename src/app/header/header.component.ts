import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  Signal,
} from '@angular/core';
import { ConfirmationService, MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { MenubarModule } from 'primeng/menubar';

import { MENU_ITEMS } from '../core/menu-items';
import { SharedService } from '../core/shared.service';
import { ThemeService } from '../core/theme.service';
import { GameService } from '../game/game.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonModule, MenubarModule, ConfirmPopupModule],
  providers: [ConfirmationService],
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  readonly isRuPlayerSide: Signal<boolean> = this._gameService.isRuPlayerSide;
  readonly isUsPlayerSide: Signal<boolean> = this._gameService.isUsPlayerSide;
  readonly isDarkTheme: Signal<boolean> = this._themeService.isDarkTheme;
  readonly menuItems: MenuItem[] = MENU_ITEMS;

  constructor(
    private readonly _confirmationService: ConfirmationService,
    private readonly _gameService: GameService,
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
