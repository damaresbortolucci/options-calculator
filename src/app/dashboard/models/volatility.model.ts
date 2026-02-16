export interface VolatilityData {
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

export interface CriticalPoint {
  delta: number;
  vol: number;
  label: string;
  strength: string;
  strike: number;
  type: string;
}

export interface CriticalPoints {
  vPoints: CriticalPoint[];
  bPoints: CriticalPoint[];
  atm: number;
  atmVol: number;
}

export interface DeltaPoint {
  delta: number;
  vol: number;
  label: string;
  strength: "extrema" | "forte" | "moderada";
}
