export const MONTHS_MAP: { [key: string]: number } = {
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

export const DEFAULT_EXPIRY_DAY = 15;

export const REFERENCE_DATE = new Date("2026-02-14");

export const STRENGTH_COLORS = {
  extrema: "from-violet-500/80 to-fuchsia-500/80",
  forte: "from-cyan-500/80 to-blue-500/80",
  moderada: "from-emerald-500/80 to-teal-500/80",
} as const;

export const PUT_DELTAS_CONFIG = [
  {
    delta: 10,
    label: "V Point Extremo",
    strength: "extrema" as const,
  },
  {
    delta: 25,
    label: "V Point Comum",
    strength: "forte" as const,
  },
  {
    delta: 37,
    label: "V Point Médio",
    strength: "moderada" as const,
  },
];

export const CALL_DELTAS_CONFIG = [
  {
    delta: 63,
    label: "B Point Médio",
    strength: "moderada" as const,
  },
  {
    delta: 75,
    label: "B Point Comum",
    strength: "forte" as const,
  },
  {
    delta: 90,
    label: "B Point Extremo",
    strength: "extrema" as const,
  },
];
