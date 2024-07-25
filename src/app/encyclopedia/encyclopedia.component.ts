import { ChangeDetectionStrategy, Component } from '@angular/core';
// import { provideRouter } from '@angular/router';
// import { withComponentInputBinding } from '@angular/router';

// import { routes } from './encyclopedia.routes';

@Component({
  selector: 'app-encyclopedia',
  standalone: true,
  // imports: [provideRouter(routes, withComponentInputBinding())],
  imports: [],
  templateUrl: './encyclopedia.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EncyclopediaComponent {}
