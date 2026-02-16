import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

@NgModule({
  declarations: [],
  imports: [BrowserModule, FormsModule, AppComponent, DashboardComponent],
  providers: [],
  bootstrap: [],
})
export class AppModule {}
