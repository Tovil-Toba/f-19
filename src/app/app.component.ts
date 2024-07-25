import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  Signal,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { MenubarModule } from 'primeng/menubar';
import { ScrollTopModule } from 'primeng/scrolltop';

import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { ThemeService } from './core/theme.service';
import { GameService } from './game/game.service';
import { HeaderComponent } from './header/header.component';
import { MissionsInfoComponent } from './missions-info/missions-info.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    BreadcrumbModule,
    HeaderComponent,
    MenubarModule,
    RouterOutlet,
    ScrollTopModule,
    MissionsInfoComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  readonly isDarkTheme: Signal<boolean> = this._themeService.isDarkTheme;
  readonly isGameOver: Signal<boolean> = this._gameService.isGameOver;
  readonly isGameStarted: Signal<boolean> = this._gameService.isGameStarted;

  constructor(
    private readonly _gameService: GameService,
    private readonly _primengConfig: PrimeNGConfig,
    private readonly _themeService: ThemeService,
  ) {}

  ngOnInit(): void {
    this._primengConfig.ripple = true;
  }
}
