export const prefersReducedMotion = () =>
  typeof window !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches;
export const isTouch = () =>
  typeof window !== 'undefined' && matchMedia('(hover: none), (pointer: coarse)').matches;
export const isMobile = () =>
  typeof window !== 'undefined' && matchMedia('(max-width: 767px)').matches;

// Shared easing vocabulary. Use these names everywhere; never invent per-component curves.
export const ease = {
  out: 'expo.out', // default entrance
  inOut: 'expo.inOut', // curtains, page transitions
  soft: 'power3.out', // small UI
  spring: 'back.out(1.6)', // playful pops, use rarely
} as const;
