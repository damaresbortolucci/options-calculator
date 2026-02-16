import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

interface VolatilityData {
  date: string;
  d1: number;
  d5: number;
  d10: number;
  d25: number;
  d37: number;
  d50: number;
  d63: number;
  d75: number;
  d90: number;
  d95: number;
  d99: number;
}

interface CriticalPoint {
  delta: number;
  vol: number;
  label: string;
  strength: string;
  strike: number;
  type: string;
}

interface CriticalPoints {
  vPoints: CriticalPoint[];
  bPoints: CriticalPoint[];
  atm: number;
  atmVol: number;
}

@Component({
  selector: "app-options-calculator",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./options-calculator.component.html",
  styleUrls: ["./options-calculator.component.css"],
})
export class OptionsCalculatorComponent implements OnInit {
  spotPrice: number = 5215;
  selectedExpiry: string = "mar-26";
  showDetails: boolean = false;

  volatilityData: VolatilityData[] = [
    {
      date: "mar-26",
      d1: 13.92,
      d5: 13.8,
      d10: 13.57,
      d25: 11.67,
      d37: 10.85,
      d50: 10.03,
      d63: 9.52,
      d75: 9.01,
      d90: 8.72,
      d95: 8.75,
      d99: 8.8,
    },
    {
      date: "abr-26",
      d1: 16.44,
      d5: 15.83,
      d10: 15.1,
      d25: 13.03,
      d37: 12.15,
      d50: 11.22,
      d63: 10.66,
      d75: 10.09,
      d90: 9.73,
      d95: 9.77,
      d99: 9.83,
    },
    {
      date: "mai-26",
      d1: 16.98,
      d5: 16.34,
      d10: 15.61,
      d25: 13.86,
      d37: 12.49,
      d50: 11.73,
      d63: 10.9,
      d75: 10.6,
      d90: 10.22,
      d95: 10.26,
      d99: 10.31,
    },
    {
      date: "jun-26",
      d1: 17.35,
      d5: 16.71,
      d10: 15.96,
      d25: 13.92,
      d37: 13.01,
      d50: 12.08,
      d63: 11.53,
      d75: 10.96,
      d90: 10.6,
      d95: 10.65,
      d99: 10.74,
    },
    {
      date: "jul-26",
      d1: 17.61,
      d5: 17.03,
      d10: 16.35,
      d25: 14.56,
      d37: 13.39,
      d50: 12.39,
      d63: 11.94,
      d75: 11.39,
      d90: 11.05,
      d95: 11.1,
      d99: 11.18,
    },
    {
      date: "ago-26",
      d1: 17.75,
      d5: 17.2,
      d10: 16.53,
      d25: 14.62,
      d37: 13.75,
      d50: 12.84,
      d63: 12.32,
      d75: 11.79,
      d90: 11.48,
      d95: 11.49,
      d99: 11.5,
    },
    {
      date: "set-26",
      d1: 18.19,
      d5: 17.68,
      d10: 17.05,
      d25: 15.15,
      d37: 14.29,
      d50: 13.34,
      d63: 12.86,
      d75: 12.34,
      d90: 12.06,
      d95: 12.02,
      d99: 11.99,
    },
    {
      date: "out-26",
      d1: 18.73,
      d5: 18.27,
      d10: 17.67,
      d25: 15.78,
      d37: 14.94,
      d50: 14.02,
      d63: 13.51,
      d75: 13.01,
      d90: 12.75,
      d95: 12.65,
      d99: 12.57,
    },
    {
      date: "nov-26",
      d1: 20.44,
      d5: 19.87,
      d10: 19.2,
      d25: 17.44,
      d37: 16.3,
      d50: 15.35,
      d63: 14.69,
      d75: 14.34,
      d90: 14.28,
      d95: 14.31,
      d99: 14.37,
    },
    {
      date: "dez-26",
      d1: 20.59,
      d5: 20.0,
      d10: 19.31,
      d25: 17.56,
      d37: 16.42,
      d50: 15.46,
      d63: 15.05,
      d75: 14.54,
      d90: 14.36,
      d95: 14.4,
      d99: 14.47,
    },
    {
      date: "jan-27",
      d1: 20.71,
      d5: 20.13,
      d10: 19.44,
      d25: 17.66,
      d37: 16.53,
      d50: 15.66,
      d63: 15.2,
      d75: 14.76,
      d90: 14.66,
      d95: 14.71,
      d99: 14.8,
    },
    {
      date: "fev-27",
      d1: 20.89,
      d5: 20.3,
      d10: 19.63,
      d25: 17.94,
      d37: 16.67,
      d50: 15.95,
      d63: 15.5,
      d75: 15.0,
      d90: 14.83,
      d95: 14.86,
      d99: 14.92,
    },
  ];

  selectedData!: VolatilityData;
  daysToExpiry!: number;
  criticalPoints!: CriticalPoints;

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

  toggleDetails(): void {
    this.showDetails = !this.showDetails;
  }

  private updateCalculations(): void {
    this.selectedData =
      this.volatilityData.find((d) => d.date === this.selectedExpiry) ||
      this.volatilityData[0];
    this.daysToExpiry = this.getDaysToExpiry(this.selectedExpiry);
    this.criticalPoints = this.calculateCriticalPoints();
  }

  private calculateStrike(
    spotPrice: number,
    delta: number,
    volatility: number,
    daysToExpiry: number,
  ): number {
    const T = daysToExpiry / 365;
    const sigma = volatility / 100;
    const adjustmentFactor = sigma * Math.sqrt(T);

    if (delta <= 50) {
      const zScore = (50 - delta) / 25;
      return spotPrice * (1 - adjustmentFactor * zScore * 0.8);
    } else {
      const zScore = (delta - 50) / 25;
      return spotPrice * (1 + adjustmentFactor * zScore * 0.8);
    }
  }

  private getDaysToExpiry(expiryDate: string): number {
    const today = new Date("2026-02-14");
    const months: { [key: string]: number } = {
      mar: 2,
      abr: 3,
      mai: 4,
      jun: 5,
      jul: 6,
      ago: 7,
      set: 8,
      out: 9,
      nov: 10,
      dez: 11,
      jan: 0,
      fev: 1,
    };

    const [monthStr, yearStr] = expiryDate.split("-");
    const year = parseInt("20" + yearStr);
    const month = months[monthStr];
    const expiry = new Date(year, month, 15);

    return Math.max(
      1,
      Math.ceil((expiry.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)),
    );
  }

  private calculateCriticalPoints(): CriticalPoints {
    const vPoints: CriticalPoint[] = [];
    const bPoints: CriticalPoint[] = [];

    const putDeltas = [
      {
        delta: 10,
        vol: this.selectedData.d10,
        label: "V Point Extremo",
        strength: "extrema",
      },
      {
        delta: 25,
        vol: this.selectedData.d25,
        label: "V Point Comum",
        strength: "forte",
      },
      {
        delta: 37,
        vol: this.selectedData.d37,
        label: "V Point Médio",
        strength: "moderada",
      },
    ];

    const callDeltas = [
      {
        delta: 63,
        vol: this.selectedData.d63,
        label: "B Point Médio",
        strength: "moderada",
      },
      {
        delta: 75,
        vol: this.selectedData.d75,
        label: "B Point Comum",
        strength: "forte",
      },
      {
        delta: 90,
        vol: this.selectedData.d90,
        label: "B Point Extremo",
        strength: "extrema",
      },
    ];

    const atmStrike = this.calculateStrike(
      this.spotPrice,
      50,
      this.selectedData.d50,
      this.daysToExpiry,
    );

    putDeltas.forEach((p) => {
      vPoints.push({
        ...p,
        strike:
          Math.round(
            this.calculateStrike(
              this.spotPrice,
              p.delta,
              p.vol,
              this.daysToExpiry,
            ) * 2,
          ) / 2,
        type: "support",
      });
    });

    callDeltas.forEach((c) => {
      bPoints.push({
        ...c,
        strike:
          Math.round(
            this.calculateStrike(
              this.spotPrice,
              c.delta,
              c.vol,
              this.daysToExpiry,
            ) * 2,
          ) / 2,
        type: "resistance",
      });
    });

    return {
      vPoints: vPoints.sort((a, b) => a.strike - b.strike),
      bPoints: bPoints.sort((a, b) => a.strike - b.strike),
      atm: Math.round(atmStrike * 2) / 2,
      atmVol: this.selectedData.d50,
    };
  }

  formatPrice(price: number | undefined): string {
    if (price === undefined) return "-";
    return price.toLocaleString("pt-BR", { minimumFractionDigits: 1 });
  }

  getStrengthColor(strength: string): string {
    switch (strength) {
      case "extrema":
        return "from-violet-500/80 to-fuchsia-500/80";
      case "forte":
        return "from-cyan-500/80 to-blue-500/80";
      default:
        return "from-emerald-500/80 to-teal-500/80";
    }
  }

  getFirstSixExpiries(): VolatilityData[] {
    return this.volatilityData.slice(0, 6);
  }

  getReversedVPoints(): CriticalPoint[] {
    return [...this.criticalPoints.vPoints].reverse();
  }
}
