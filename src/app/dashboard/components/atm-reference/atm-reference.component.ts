import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CriticalPoints } from "../../models/volatility.model";
import { OptionsCalculatorService } from "../../services/options-calculator.service";

@Component({
  selector: "atm-reference",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./atm-reference.component.html",
  styleUrls: ["./atm-reference.component.css"],
})
export class AtmReferenceComponent {
  @Input() criticalPoints!: CriticalPoints;

  constructor(private calculatorService: OptionsCalculatorService) {}

  formatPrice(price: number | undefined): string {
    return this.calculatorService.formatPrice(price);
  }
}
