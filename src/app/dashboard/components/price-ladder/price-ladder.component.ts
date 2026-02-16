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

  getBPointTop(idx: number): number {
    const isMobile = window.innerWidth < 768;
    return isMobile ? 2 + idx * 13 : 8 + idx * 13;
  }

  getVPointTop(idx: number): number {
    const isMobile = window.innerWidth < 768;
    return isMobile ? 58 + idx * 13 : 58 + idx * 13;
  }
}
