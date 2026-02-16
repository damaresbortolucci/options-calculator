import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { DayTradingStrategyComponent } from "./components/strategies/day-trading-strategy.component";
import { PriceLadderComponent } from "./components/price-ladder/price-ladder.component";
import { VolatilityTableComponent } from "./components/volatility-table/volatility-table.component";
import { CriticalPointsComponent } from "./components/critical-points/critical-points.component";
import { AtmReferenceComponent } from "./components/atm-reference/atm-reference.component";
import { InputControlsComponent } from "./components/input-controls/input-controls.component";
import { EducationalSectionComponent } from "./components/aducational-section/educational-section.component";
import {
  VolatilityData,
  CriticalPoint,
  CriticalPoints,
} from "./models/volatility.model";
import { MOCK_VOLATILITY_DATA } from "./mocks/volatility.mock";
import { STRENGTH_COLORS } from "./constants/app.constants";
import { OptionsCalculatorService } from "./services/options-calculator.service";

@Component({
  selector: "dashboard",
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    InputControlsComponent,
    EducationalSectionComponent,
    DayTradingStrategyComponent,
    PriceLadderComponent,
    CriticalPointsComponent,
    AtmReferenceComponent,
    VolatilityTableComponent,
  ],
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  spotPrice: number = 5215;
  selectedExpiry: string = "mar-26";
  volatilityData: VolatilityData[] = MOCK_VOLATILITY_DATA;
  selectedData!: VolatilityData;
  daysToExpiry!: number;
  criticalPoints!: CriticalPoints;

  constructor(private calculatorService: OptionsCalculatorService) {}

  ngOnInit(): void {
    this.updateCalculations();
  }

  onSpotPriceChange(): void {
    this.updateCalculations();
  }

  onExpiryChange(expiry: string): void {
    this.selectedExpiry = expiry;
    this.updateCalculations();
  }

  private updateCalculations(): void {
    this.selectedData =
      this.volatilityData.find((d) => d.date === this.selectedExpiry) ||
      this.volatilityData[0];
    this.daysToExpiry = this.calculatorService.getDaysToExpiry(
      this.selectedExpiry,
    );
    this.criticalPoints = this.calculatorService.calculateCriticalPoints(
      this.spotPrice,
      this.selectedData,
      this.daysToExpiry,
    );
  }

  formatPrice(price: number | undefined): string {
    return this.calculatorService.formatPrice(price);
  }

  getStrengthColor(strength: string): string {
    return (
      STRENGTH_COLORS[strength as keyof typeof STRENGTH_COLORS] ||
      STRENGTH_COLORS.moderada
    );
  }

  getFirstSixExpiries(): VolatilityData[] {
    return this.volatilityData.slice(0, 6);
  }

  getReversedVPoints(): CriticalPoint[] {
    return [...this.criticalPoints.vPoints].reverse();
  }
}
