export const motionDuration = {
  instant: 0.12,
  fast: 0.2,
  base: 0.32,
  reveal: 0.5,
} as const;

export const motionEasing = {
  standard: [0.22, 1, 0.36, 1],
  enter: [0.16, 1, 0.3, 1],
  exit: [0.4, 0, 1, 1],
} as const;

export const motionOffset = {
  revealY: 16,
  hoverLiftY: -4,
} as const;

export const motionScale = {
  press: 0.985,
} as const;

export const motionStagger = {
  cards: 0.07,
  menuItems: 0.045,
} as const;
