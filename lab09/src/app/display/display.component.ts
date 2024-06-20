import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-display',
  standalone: true,
  imports: [],
  templateUrl: './display.component.html',
})
export class DisplayComponent {
  @Input() tries_number: number = 0;
  @Input() wordPrimary = '';
}
