import { sunState, sunStyle, formatTime, type SunMode } from '../lib/sun';

interface Labels {
  dirEast: string;
  dirWest: string;
  dirOverhead: string;
  dirFixed: string;
  wallAngle: string;
  wallFixed: string;
  toneWarm: string;
  toneNeutral: string;
  toneOrange: string;
  level: string;
  valueText: string;
  modeNoteColour: string;
  modeNoteDirectional: string;
}

const AUTOPLAY_FROM = 480;
const AUTOPLAY_TO = 1080;
const AUTOPLAY_MS = 12000;

const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function setup(root: HTMLElement) {
  const labels = JSON.parse(root.dataset.labels ?? '{}') as Labels;
  const range = root.querySelector<HTMLInputElement>('[data-sc-range]')!;
  const timeOut = root.querySelector<HTMLElement>('[data-sc-time]');
  const note = root.querySelector<HTMLElement>('[data-sc-note]');
  const jumps = Array.from(root.querySelectorAll<HTMLButtonElement>('[data-sc-jump]'));
  const plays = Array.from(root.querySelectorAll<HTMLButtonElement>('[data-sc-play]'));
  const modes = Array.from(root.querySelectorAll<HTMLInputElement>('[data-sc-mode]'));
  const read = (key: string) => root.querySelector<HTMLElement>(`[data-sc-read="${key}"]`);

  let mode: SunMode = 'directional';
  let minutes = Number(range.value);
  let frame = 0;
  let playedOnce = false;

  function render(m: number) {
    minutes = m;
    const s = sunState(m, mode);
    for (const [k, v] of Object.entries(sunStyle(s))) root.style.setProperty(k, v);

    const time = formatTime(m);
    const deg = String(Math.round(Math.abs(s.angle)));
    const dir =
      mode === 'colour'
        ? labels.dirFixed
        : Math.abs(s.angle) < 2
          ? labels.dirOverhead
          : (s.angle > 0 ? labels.dirEast : labels.dirWest).replace('{deg}', deg);
    const tone = { warm: labels.toneWarm, neutral: labels.toneNeutral, orange: labels.toneOrange }[s.tone];
    const level = labels.level.replace('{n}', String(Math.round(s.level * 100)));

    if (timeOut) timeOut.textContent = time;
    const rt = read('time');
    if (rt) rt.textContent = time;
    const rd = read('dir');
    if (rd) rd.textContent = dir;
    const rl = read('level');
    if (rl) rl.textContent = level;
    const rw = read('wall');
    if (rw) {
      rw.textContent =
        mode === 'colour' ? labels.wallFixed : labels.wallAngle.replace('{deg}', String(Math.round(s.wallElevation)));
    }
    const rto = read('tone');
    if (rto) rto.textContent = tone;

    range.setAttribute(
      'aria-valuetext',
      labels.valueText.replace('{time}', time).replace('{dir}', dir).replace('{level}', level).replace('{tone}', tone),
    );
    const snapped = Math.round(m / 15) * 15;
    for (const b of jumps) b.setAttribute('aria-pressed', String(Number(b.dataset.scJump) === snapped));
  }

  function stop() {
    if (frame) cancelAnimationFrame(frame);
    frame = 0;
    root.classList.remove('is-playing');
  }

  function play() {
    stop();
    playedOnce = true;
    root.classList.add('is-playing');
    const t0 = performance.now();
    const tick = (now: number) => {
      const k = Math.min(1, (now - t0) / AUTOPLAY_MS);
      const eased = k < 0.5 ? 2 * k * k : 1 - (-2 * k + 2) ** 2 / 2;
      const m = AUTOPLAY_FROM + (AUTOPLAY_TO - AUTOPLAY_FROM) * eased;
      range.value = String(Math.round(m / 15) * 15);
      render(m);
      if (k < 1) frame = requestAnimationFrame(tick);
      else stop();
    };
    frame = requestAnimationFrame(tick);
  }

  const userStop = () => {
    playedOnce = true;
    stop();
  };

  range.addEventListener('input', () => {
    userStop();
    render(Number(range.value));
  });
  for (const ev of ['pointerdown', 'keydown'] as const) range.addEventListener(ev, userStop);

  for (const b of jumps) {
    b.addEventListener('click', () => {
      userStop();
      range.value = b.dataset.scJump!;
      render(Number(range.value));
    });
  }

  for (const b of plays) {
    b.addEventListener('click', () => {
      if (reducedMotion()) {
        range.value = String(AUTOPLAY_TO);
        render(AUTOPLAY_TO);
      } else play();
    });
  }

  for (const r of modes) {
    r.addEventListener('change', () => {
      if (!r.checked) return;
      mode = r.value as SunMode;
      root.dataset.mode = mode;
      if (note) note.textContent = mode === 'colour' ? labels.modeNoteColour : labels.modeNoteDirectional;
      render(minutes);
    });
  }

  // One morning-to-evening cycle the first time the illustration is on screen.
  if (!reducedMotion() && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting) && !playedOnce) {
          io.disconnect();
          play();
        }
      },
      { threshold: 0.5 },
    );
    io.observe(root.querySelector('.sunclock__stage') ?? root);
  }

  window.addEventListener('beforeprint', stop);
  render(minutes);
}

export function initSunClocks() {
  document.querySelectorAll<HTMLElement>('[data-sunclock]').forEach((el) => {
    if (el.dataset.ready) return;
    el.dataset.ready = '1';
    setup(el);
  });
}
