import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CriticalPoint, CriticalPoints } from "../../models/volatility.model";
import { OptionsCalculatorService } from "../../services/options-calculator.service";
import { STRENGTH_COLORS } from "../../constants/app.constants";

@Component({
  selector: "critical-points",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./critical-points.component.html",
})
export class CriticalPointsComponent {
  @Input() criticalPoints!: CriticalPoints;

  constructor(private calculatorService: OptionsCalculatorService) {}

  formatPrice(price: number | undefined): string {
    return this.calculatorService.formatPrice(price);
  }

  getStrengthColor(strength: string): string {
    return (
      STRENGTH_COLORS[strength as keyof typeof STRENGTH_COLORS] ||
      STRENGTH_COLORS.moderada
    );
  }
}
