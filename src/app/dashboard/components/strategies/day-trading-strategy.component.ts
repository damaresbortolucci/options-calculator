import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CriticalPoints } from "../../models/volatility.model";
import { OptionsCalculatorService } from "../../services/options-calculator.service";

@Component({
  selector: "day-trading-strategy",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./day-trading-strategy.component.html",
})
export class DayTradingStrategyComponent {
  @Input() criticalPoints!: CriticalPoints;

  constructor(private calculatorService: OptionsCalculatorService) {}

  formatPrice(price: number | undefined): string {
    return this.calculatorService.formatPrice(price);
  }
}
