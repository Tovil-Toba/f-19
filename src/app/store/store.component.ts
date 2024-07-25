import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [],
  templateUrl: './store.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoreComponent {}
