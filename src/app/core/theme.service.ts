import { DOCUMENT } from '@angular/common';
import {
  inject,
  Injectable,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly _document = inject(DOCUMENT);
  private readonly _localStorageService = inject(LocalStorageService);

  private readonly _darkThemeBundleName = 'mdc-dark-indigo';
  private readonly _lightThemeBundleName = 'mdc-light-indigo';
  private readonly _window = this._document.defaultView;
  private _isDarkTheme: WritableSignal<boolean> = signal(false);

  readonly isDarkTheme: Signal<boolean> = this._isDarkTheme;

  initTheme(): void {
    let isDarkTheme: unknown =
      this._localStorageService.retrieve('isDarkTheme');

    if (
      typeof isDarkTheme !== 'boolean' &&
      this._window?.matchMedia &&
      this._window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      isDarkTheme = true;
    }

    this.setTheme(!!isDarkTheme);
  }

  setTheme(isDarkTheme: boolean): void {
    this._isDarkTheme.set(isDarkTheme);
    this._localStorageService.store('isDarkTheme', isDarkTheme);

    const themeLink: HTMLLinkElement = this._document.getElementById(
      'theme-css',
    ) as HTMLLinkElement;
    const bundleName = isDarkTheme
      ? this._darkThemeBundleName
      : this._lightThemeBundleName;

    themeLink.href = `${bundleName}.css`;
  }

  toggleTheme(): void {
    this.setTheme(!this._isDarkTheme());
  }
}
