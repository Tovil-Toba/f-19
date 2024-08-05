import { Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { BehaviorSubject, Observable } from 'rxjs';

import { BadgeMenuItemId } from './badge-menu-item-id';
import { MENU_ITEMS } from './menu-items';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  private readonly _menuItems: WritableSignal<MenuItem[]> =
    signal<MenuItem[]>(MENU_ITEMS);

  // Сигналы с p-menubar при OnPush не работают
  private readonly _menuItems$: BehaviorSubject<MenuItem[]> =
    new BehaviorSubject<MenuItem[]>(MENU_ITEMS);

  readonly menuItems: Signal<MenuItem[]> = this._menuItems;
  readonly menuItems$: Observable<MenuItem[]> = this._menuItems$.asObservable();

  constructor() {}

  clearBadge(menuItemId: BadgeMenuItemId): void {
    this._setBadge(menuItemId, undefined);
  }

  reset(): void {
    const menuItems: MenuItem[] = this._menuItems();

    menuItems.forEach((menuItem) => (menuItem.badge = undefined));

    this._menuItems.set(menuItems);
    this._menuItems$.next(menuItems);
  }

  setBadge(menuItemId: BadgeMenuItemId): void {
    this._setBadge(menuItemId, 'true');
  }

  private _setBadge(menuItemId: BadgeMenuItemId, badge?: string): void {
    const menuItems: MenuItem[] = this._menuItems();

    const menuItem: MenuItem | undefined = menuItems.find(
      (menuItem) => menuItem.id === menuItemId,
    );

    if (!menuItem) {
      return;
    }

    menuItem.badge = badge;

    this._menuItems.set(menuItems);
    this._menuItems$.next(menuItems);
  }
}
