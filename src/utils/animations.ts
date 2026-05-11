import type { Variants } from 'framer-motion'

// ─── Framer Motion Variants ───────────────────────────────────────────────────

export const containerVariants = (stagger = 0.1, delayChildren = 0): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
      delayChildren,
    },
  },
})

export const itemVariants = (duration = 0.6, delay = 0): Variants => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  },
})

export const scaleVariants = (duration = 0.5, delay = 0): Variants => ({
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  },
})

// Kept as static variants for convenience where no config is needed
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

// ─── GSAP Animation Configs ───────────────────────────────────────────────────

export interface GSAPAnimConfig {
  duration: number
  delay: number
  ease: string
}

/**
 * Fade + rise from below. Apply to opacity and y.
 * Usage: gsap.from(el, gsapFadeInUp())
 */
export const gsapFadeInUp = (delay = 0, duration = 0.8): gsap.TweenVars => ({
  opacity: 0,
  y: 40,
  duration,
  delay,
  ease: 'power3.out',
})

/**
 * Fade + slide from left.
 */
export const gsapFadeInLeft = (delay = 0, duration = 0.8): gsap.TweenVars => ({
  opacity: 0,
  x: -60,
  duration,
  delay,
  ease: 'power3.out',
})

/**
 * Stagger config for gsap.from(els, { stagger: gsapStaggerChildren() })
 */
export const gsapStaggerChildren = (each = 0.08, from: gsap.Position = 'start') => ({
  each,
  from,
})

/**
 * Clip-path text reveal — animate from clipped to fully visible.
 * Set initial clip-path on the element: clip-path: inset(0 100% 0 0)
 * Usage: gsap.to(el, gsapTextReveal())
 */
export const gsapTextReveal = (delay = 0, duration = 1): gsap.TweenVars => ({
  clipPath: 'inset(0 0% 0 0)',
  duration,
  delay,
  ease: 'power4.inOut',
})
