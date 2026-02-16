import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "volatility-table",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./volatility-table.component.html",
})
export class VolatilityTableComponent {
  @Input() selectedExpiry: string = "";
  @Input() selectedData: any = {
    d10: 0,
    d25: 0,
    d37: 0,
    d50: 0,
    d63: 0,
    d75: 0,
    d90: 0,
  };
}
