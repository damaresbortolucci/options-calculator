import { Component } from '@angular/core';
import { OptionsCalculatorComponent } from './options-calculator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [OptionsCalculatorComponent],
  template: `<app-options-calculator></app-options-calculator>`,
  styles: []
})
export class AppComponent {
  title = 'b-points-v-points-calculator';
}
