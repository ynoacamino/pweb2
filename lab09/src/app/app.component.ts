import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {InputTextComponent} from './input-text/input-text.component';
import { DisplayComponent } from './display/display.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InputTextComponent, DisplayComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'AHORCADO';

  wordPrimary = 'PALABRA';
  readonly MAX_TRIES = 6;
  tries_number = 0;

  addTries_number() {
    this.tries_number += 1;
    if(this.tries_number === this.MAX_TRIES) {
      alert('Perdiste');
      this.tries_number = 0;
    }
  }
}
