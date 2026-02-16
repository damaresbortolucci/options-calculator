import { Component, Input, Output, EventEmitter } from "@angular/core";
import { CommonModule } from "@angular/common";
import { OptionsCalculatorService } from "../../services/options-calculator.service";

@Component({
  selector: "input-controls",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./input-controls.component.html",
})
export class InputControlsComponent {
  @Input() spotPrice!: number;
  @Output() spotPriceChange = new EventEmitter<number>();

  @Input() selectedExpiry!: string;
  @Output() selectedExpiryChange = new EventEmitter<string>();

  @Input() expiries: any[] = [];
  @Input() daysToExpiry!: number;

  constructor(private calculatorService: OptionsCalculatorService) {}

  formatPrice(price: number | undefined): string {
    return this.calculatorService.formatPrice(price);
  }

  onSpotInput(event: Event) {
    const value = Number((event.target as HTMLInputElement).value);
    this.spotPriceChange.emit(value);
  }

  onSelectExpiry(date: string) {
    this.selectedExpiryChange.emit(date);
  }
}
