import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  Input,
  signal,
  WritableSignal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { BreadcrumbModule } from 'primeng/breadcrumb';

import { BREADCRUMB_MENU_ITEMS } from '../core/breadcrumb-menu-items';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [BreadcrumbModule],
  templateUrl: './breadcrumb.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbComponent {
  @Input()
  menuItems: MenuItem[] = BREADCRUMB_MENU_ITEMS;

  readonly breadcrumbItems: WritableSignal<MenuItem[]> = signal([]);

  constructor(
    private readonly _destroyRef: DestroyRef,
    private readonly _router: Router,
  ) {
    this._router.events
      .pipe(takeUntilDestroyed(this._destroyRef))
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this._setBreadcrumbItems(event.url);
        }
      });
  }

  private _setBreadcrumbItems(route: string): void {
    let breadcrumbItems: MenuItem[] = [];

    const breadcrumbItem: MenuItem | undefined = structuredClone(
      this.menuItems.find((menuItem) => menuItem['route'] === route),
    );

    if (breadcrumbItem) {
      breadcrumbItem.icon = undefined;
      breadcrumbItems = [breadcrumbItem];
    }

    this.breadcrumbItems.set(breadcrumbItems);
  }
}
