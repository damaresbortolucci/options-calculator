import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { OptionsCalculatorComponent } from './options-calculator.component';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    FormsModule,
    AppComponent,
    OptionsCalculatorComponent
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
