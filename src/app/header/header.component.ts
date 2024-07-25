import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  Signal,
} from '@angular/core';
import { MenuItem, SharedModule } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';

import { MENU_ITEMS } from '../core/menu-items';
import { ThemeService } from '../core/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonModule, MenubarModule, SharedModule],
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  readonly isDarkTheme: Signal<boolean> = this._themeService.isDarkTheme;
  readonly menuItems: MenuItem[] = MENU_ITEMS;

  constructor(private readonly _themeService: ThemeService) {}

  ngOnInit(): void {
    this._themeService.initTheme();
  }

  toggleTheme(): void {
    this._themeService.toggleTheme();
  }
}
