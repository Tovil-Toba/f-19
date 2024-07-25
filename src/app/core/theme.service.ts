import { DOCUMENT } from '@angular/common';
import {
  Inject,
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
  private readonly _darkThemeBundleName = 'mdc-dark-indigo';
  private readonly _lightThemeBundleName = 'mdc-light-indigo';
  private readonly _window: (Window & typeof globalThis) | null;
  private _isDarkTheme: WritableSignal<boolean> = signal(false);

  readonly isDarkTheme: Signal<boolean> = this._isDarkTheme;

  constructor(
    @Inject(DOCUMENT) private readonly _document: Document,
    private readonly _localStorageService: LocalStorageService,
  ) {
    this._window = this._document.defaultView;
  }

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
