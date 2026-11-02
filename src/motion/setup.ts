// Global motion setup: runs once on client before first page mounts.
import { gsap } from 'gsap';
import { ease, setBackground, setLoaderFormat, setTransition } from '@/engine';

// Living computational field shader in Ayush's bio-phosphor palette
const bioFieldShader = /* glsl */ `
precision highp float;
varying vec2 vUv;
uniform float uTime;
uniform float uScroll;
uniform vec2 uMouse;
uniform vec2 uResolution;
uniform vec3 uGround;
uniform vec3 uEmerald;
uniform vec3 uCyan;

float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1, 0)), u.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), u.x), u.y);
}
float fbm(vec2 p) {
  float v = 0.0, a = 0.5;
  for (int i = 0; i < 4; i++) { v += a * noise(p); p *= 2.05; a *= 0.5; }
  return v;
}

void main() {
  vec2 st = vUv;
  float aspect = uResolution.x / uResolution.y;
  vec2 p = vec2(st.x * aspect, st.y);

  // Breathing continuous pulse (idle life)
  float breath = sin(uTime * 0.8) * 0.08 + 0.92;
  
  // Vector flow coordinates
  float t = uTime * 0.12;
  vec2 q = vec2(fbm(p * 1.2 + vec2(t * 0.4, -t * 0.2)), fbm(p * 1.2 + vec2(-t * 0.3, t * 0.5)));
  
  // Mouse energy warp
  vec2 m = (uMouse - 0.5) * 0.4;
  float d = length(st - uMouse);
  float mouseGlow = smoothstep(0.45, 0.0, d) * 0.25;

  float f = fbm(p * 1.8 + q * 1.5 + m) * breath;
  
  // Base obsidian ground
  vec3 col = uGround;
  
  // Emerald bio-cellular veins
  float vein = smoothstep(0.48, 0.53, f) - smoothstep(0.53, 0.58, f);
  col = mix(col, uEmerald, vein * 0.25 * breath);
  
  // Prismatic cyan glow on focal peaks
  float peak = smoothstep(0.62, 0.85, f);
  col = mix(col, uCyan, peak * 0.18 + mouseGlow);

  // Deep spatial vignette
  float vignette = smoothstep(1.3, 0.2, length((st - 0.5) * vec2(aspect, 1.0)));
  col *= vignette;

  // Film grain
  col += (hash(st * uResolution + fract(uTime)) - 0.5) * 0.025;

  gl_FragColor = vec4(col, 1.0);
}`;

export function setupMotion() {
  setLoaderFormat((p) => `${Math.round(p)}%`);
  
  let point = { x: innerWidth / 2, y: innerHeight / 2 };
  if (typeof window !== 'undefined') {
    addEventListener('pointerdown', (e) => {
      point = { x: e.clientX, y: e.clientY };
    });
  }

  // Architectural circular iris curtain transition
  setTransition({
    leave: (c) =>
      gsap.timeline()
        .set(c, { autoAlpha: 1 })
        .set(c.querySelector('.curtain__panel'), { yPercent: 0 })
        .fromTo(
          c.querySelector('.curtain__panel'),
          { clipPath: `circle(0% at ${point.x}px ${point.y}px)` },
          { clipPath: `circle(150% at ${point.x}px ${point.y}px)`, duration: 0.85, ease: ease.inOut }
        ),
    enter: (c) =>
      gsap.timeline()
        .to(c.querySelector('.curtain__panel'), {
          clipPath: 'circle(0% at 50% 50%)',
          duration: 0.85,
          ease: ease.inOut,
        })
        .set(c, { autoAlpha: 0 }),
  });

  // Fullscreen ambient background shader
  const bg = setBackground(bioFieldShader, {
    uGround: { value: [9 / 255, 10 / 255, 13 / 255] },
    uEmerald: { value: [16 / 255, 185 / 255, 129 / 255] },
    uCyan: { value: [6 / 255, 182 / 255, 212 / 255] },
  });

  if (!bg && typeof document !== 'undefined') {
    document.documentElement.style.background = '#090a0d';
  }
}
