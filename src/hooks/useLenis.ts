import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import type { LenisOptions, Orientation } from 'lenis'
import { gsap, ScrollTrigger } from './useGSAP'

interface UseLenisOptions {
  duration?: number
  easing?: (t: number) => number
  orientation?: Orientation
}

const defaultEasing = (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t))

export function useLenis(options: UseLenisOptions = {}) {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    const { duration = 1.2, easing = defaultEasing, orientation = 'vertical' } = options

    const lenisOptions: LenisOptions = {
      duration,
      easing,
      orientation,
      smoothWheel: true,
    }

    const lenis = new Lenis(lenisOptions)
    lenisRef.current = lenis

    // Keep ScrollTrigger positions in sync with Lenis scroll
    lenis.on('scroll', ScrollTrigger.update)

    // Drive Lenis via GSAP ticker so animations stay frame-perfect
    const tickerFn = (time: number) => lenis.raf(time * 1000)
    gsap.ticker.add(tickerFn)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(tickerFn)
      lenis.destroy()
      lenisRef.current = null
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options.duration, options.orientation])

  return lenisRef
}
