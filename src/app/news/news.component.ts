import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [],
  templateUrl: './news.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsComponent {}
