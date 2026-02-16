import { Component } from "@angular/core";
import { DashboardComponent } from "./dashboard/dashboard.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [DashboardComponent],
  template: `<dashboard></dashboard>`,
  styles: [],
})
export class AppComponent {
  title = "b-points-v-points-calculator";
}
