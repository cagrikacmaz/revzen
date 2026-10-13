/**
 * Geometry and colour model for the sun clock illustration.
 * Time is expressed in minutes after midnight (06:00 = 360, 20:00 = 1200).
 * All lengths are SVG user units of the 640 x 400 room cross-section.
 */

export type SunMode = 'directional' | 'colour';
export type Tone = 'warm' | 'neutral' | 'orange';

export const MIN_TIME = 360;
export const MAX_TIME = 1200;
export const NOON = 720;

/** Largest beam angle from vertical, reached at 06:00 and 20:00. */
const MAX_ANGLE = 29;
/** Ceiling underside to floor. */
const ROOM_HEIGHT = 304;
/** Height of the plant that casts the shadow. */
const OBJECT_HEIGHT = 110;
const OBJECT_WIDTH = 60;
/** Horizontal travel of the sun disc inside the window panel. */
const SUN_TRAVEL = 112;

/* Wall mount: window in the left wall, light enters from the side. */
/** Inner face of the left wall. */
const WALL_X = 56;
const WALL_WIN_TOP = 130;
const WALL_WIN_BOTTOM = 290;
const FLOOR_Y = 352;
/** Beam elevation above horizontal: lowest at 06:00 and 20:00, highest at noon. */
const ELEV_MIN = 12;
const ELEV_MAX = 60;
const WALL_OBJECT_HEIGHT = 94;
const WALL_OBJECT_HALF = 20;
/** Travel of the sun disc inside the wall panel. */
const WALL_DISC_X = 12;
const WALL_DISC_Y = 56;

const COLOUR_STOPS: Array<[number, [number, number, number]]> = [
  [360, [255, 150, 80]],
  [480, [255, 190, 118]],
  [600, [255, 226, 184]],
  [720, [255, 244, 226]],
  [870, [255, 233, 201]],
  [1020, [255, 167, 94]],
  [1140, [255, 130, 72]],
  [1200, [242, 107, 58]],
];

export interface SunState {
  minutes: number;
  /** Beam angle from vertical in degrees, positive when light comes from the east (left). */
  angle: number;
  /** 0 at 06:00, 0.5 at noon, 1 at 20:00. */
  dayFraction: number;
  /** Relative light level, 0.25 to 1. */
  level: number;
  color: string;
  tone: Tone;
  beamSkew: number;
  patchShift: number;
  sunShift: number;
  /** Signed length of the cast shadow, measured from the pot centre. */
  shadowCast: number;
  /** Wall mount: beam elevation above horizontal in degrees. */
  wallElevation: number;
  wallPatchX: number;
  wallPatchWidth: number;
  wallShadow: number;
  wallDiscX: number;
  wallDiscY: number;
}

export const clampTime = (m: number) => Math.min(MAX_TIME, Math.max(MIN_TIME, m));

export function formatTime(minutes: number): string {
  const m = Math.round(minutes);
  const h = Math.floor(m / 60);
  const mm = m % 60;
  return `${String(h).padStart(2, '0')}:${String(mm).padStart(2, '0')}`;
}

function dayFraction(m: number): number {
  return m <= NOON ? ((m - MIN_TIME) / (NOON - MIN_TIME)) * 0.5 : 0.5 + ((m - NOON) / (MAX_TIME - NOON)) * 0.5;
}

function lightColor(m: number): string {
  for (let i = 1; i < COLOUR_STOPS.length; i++) {
    const [t1, c1] = COLOUR_STOPS[i];
    if (m <= t1) {
      const [t0, c0] = COLOUR_STOPS[i - 1];
      const k = (m - t0) / (t1 - t0);
      const mix = c0.map((v, j) => Math.round(v + (c1[j] - v) * k));
      return `rgb(${mix.join(' ')})`;
    }
  }
  return `rgb(${COLOUR_STOPS[COLOUR_STOPS.length - 1][1].join(' ')})`;
}

function toneAt(m: number): Tone {
  if (m < 630) return 'warm';
  if (m <= 930) return 'neutral';
  return 'orange';
}

export function sunState(minutes: number, mode: SunMode = 'directional'): SunState {
  const m = clampTime(minutes);
  const f = dayFraction(m);
  const realAngle = (0.5 - f) * 2 * MAX_ANGLE;
  const angle = mode === 'directional' ? realAngle : 0;
  const tan = Math.tan((angle * Math.PI) / 180);
  const shadowLength = tan * OBJECT_HEIGHT;

  return {
    minutes: m,
    angle,
    dayFraction: f,
    level: 0.25 + 0.75 * Math.sin(Math.PI * f),
    color: lightColor(m),
    tone: toneAt(m),
    beamSkew: angle,
    patchShift: tan * ROOM_HEIGHT,
    sunShift: -(realAngle / MAX_ANGLE) * SUN_TRAVEL,
    shadowCast: (shadowLength < 0 ? -1 : 1) * (OBJECT_WIDTH / 2 + Math.abs(shadowLength) * 1.3),
    ...wallGeometry(f, realAngle, mode),
  };
}

function wallGeometry(f: number, realAngle: number, mode: SunMode) {
  const realElevation = ELEV_MIN + (ELEV_MAX - ELEV_MIN) * Math.sin(Math.PI * f);
  const elevation = mode === 'directional' ? realElevation : ELEV_MAX;
  const tan = Math.tan((elevation * Math.PI) / 180);
  const near = WALL_X + (FLOOR_Y - WALL_WIN_BOTTOM) / tan;
  const far = Math.min(700, WALL_X + (FLOOR_Y - WALL_WIN_TOP) / tan);
  const k = (realElevation - ELEV_MIN) / (ELEV_MAX - ELEV_MIN);
  return {
    wallElevation: elevation,
    wallPatchX: near,
    wallPatchWidth: Math.max(1, far - near),
    wallShadow: Math.min(600, WALL_OBJECT_HALF + WALL_OBJECT_HEIGHT / tan),
    wallDiscX: -(realAngle / MAX_ANGLE) * WALL_DISC_X,
    wallDiscY: (1 - 2 * k) * WALL_DISC_Y,
  };
}

/** CSS custom properties that drive the SVG. */
export function sunStyle(s: SunState): Record<string, string> {
  return {
    '--sun-light': s.color,
    '--sun-level': s.level.toFixed(3),
    '--sun-skew': `${s.beamSkew.toFixed(2)}deg`,
    '--sun-patch': `${s.patchShift.toFixed(1)}px`,
    '--sun-disc': `${s.sunShift.toFixed(1)}px`,
    '--sun-shadow': s.shadowCast.toFixed(2),
    '--wall-skew': `${s.wallElevation.toFixed(2)}deg`,
    '--wall-patch-x': `${s.wallPatchX.toFixed(1)}px`,
    '--wall-patch-w': s.wallPatchWidth.toFixed(1),
    '--wall-shadow': s.wallShadow.toFixed(1),
    '--wall-disc': `${s.wallDiscX.toFixed(1)}px, ${s.wallDiscY.toFixed(1)}px`,
  };
}

export const styleString = (vars: Record<string, string>) =>
  Object.entries(vars)
    .map(([k, v]) => `${k}:${v}`)
    .join(';');
