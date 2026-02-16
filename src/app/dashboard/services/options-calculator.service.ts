import { Injectable } from "@angular/core";
import {
  VolatilityData,
  CriticalPoint,
  CriticalPoints,
} from "../models/volatility.model";
import {
  MONTHS_MAP,
  DEFAULT_EXPIRY_DAY,
  REFERENCE_DATE,
  PUT_DELTAS_CONFIG,
  CALL_DELTAS_CONFIG,
} from "../constants/app.constants";

@Injectable({
  providedIn: "root",
})
export class OptionsCalculatorService {
  /**
   * Calcula o preço do strike baseado no delta, volatilidade e dias até expiração
   */
  calculateStrike(
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

  /**
   * Calcula os dias até a data de expiração
   */
  getDaysToExpiry(expiryDate: string): number {
    const [monthStr, yearStr] = expiryDate.split("-");
    const year = parseInt("20" + yearStr);
    const month = MONTHS_MAP[monthStr];

    if (month === undefined) {
      throw new Error(`Invalid month: ${monthStr}`);
    }

    const expiry = new Date(year, month, DEFAULT_EXPIRY_DAY);

    return Math.max(
      1,
      Math.ceil(
        (expiry.getTime() - REFERENCE_DATE.getTime()) / (1000 * 60 * 60 * 24),
      ),
    );
  }

  /**
   * Calcula todos os pontos críticos (V Points e B Points)
   */
  calculateCriticalPoints(
    spotPrice: number,
    selectedData: VolatilityData,
    daysToExpiry: number,
  ): CriticalPoints {
    const vPoints: CriticalPoint[] = [];
    const bPoints: CriticalPoint[] = [];

    // Calcula ATM (At The Money)
    const atmStrike = this.calculateStrike(
      spotPrice,
      50,
      selectedData.d50,
      daysToExpiry,
    );

    // Calcula V Points (Puts)
    PUT_DELTAS_CONFIG.forEach((config) => {
      const volKey = `d${config.delta}` as keyof VolatilityData;
      const vol = selectedData[volKey] as number;

      vPoints.push({
        delta: config.delta,
        vol: vol,
        label: config.label,
        strength: config.strength,
        strike: this.roundStrike(
          this.calculateStrike(spotPrice, config.delta, vol, daysToExpiry),
        ),
        type: "support",
      });
    });

    // Calcula B Points (Calls)
    CALL_DELTAS_CONFIG.forEach((config) => {
      const volKey = `d${config.delta}` as keyof VolatilityData;
      const vol = selectedData[volKey] as number;

      bPoints.push({
        delta: config.delta,
        vol: vol,
        label: config.label,
        strength: config.strength,
        strike: this.roundStrike(
          this.calculateStrike(spotPrice, config.delta, vol, daysToExpiry),
        ),
        type: "resistance",
      });
    });

    return {
      vPoints: vPoints.sort((a, b) => a.strike - b.strike),
      bPoints: bPoints.sort((a, b) => a.strike - b.strike),
      atm: this.roundStrike(atmStrike),
      atmVol: selectedData.d50,
    };
  }

  /**
   * Arredonda o strike para 0.5
   */
  private roundStrike(strike: number): number {
    return Math.round(strike * 2) / 2;
  }

  /**
   * Formata o preço para exibição
   */
  formatPrice(price: number | undefined): string {
    if (price === undefined) return "-";
    return price.toLocaleString("pt-BR", { minimumFractionDigits: 1 });
  }
}
