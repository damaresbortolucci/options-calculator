import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CriticalPoints } from "../../models/volatility.model";
import { OptionsCalculatorService } from "../../services/options-calculator.service";

@Component({
  selector: "price-ladder",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./price-ladder.component.html",
})
export class PriceLadderComponent {
  @Input() spotPrice: number = 0;
  @Input() criticalPoints!: CriticalPoints;

  constructor(private calculatorService: OptionsCalculatorService) {}

  formatPrice(price: number | undefined): string {
    return this.calculatorService.formatPrice(price);
  }

  getReversedVPoints() {
    return [...(this.criticalPoints?.vPoints || [])].reverse();
  }
}
