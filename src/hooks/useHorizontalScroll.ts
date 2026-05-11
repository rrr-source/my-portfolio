import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from './useGSAP'

export function useHorizontalScroll() {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const wrapper = wrapperRef.current
    const container = containerRef.current
    if (!wrapper || !container) return

    // Total distance = container scroll width minus one viewport width
    const getScrollDistance = () => container.scrollWidth - wrapper.offsetWidth

    const tween = gsap.to(container, {
      x: () => -getScrollDistance(),
      ease: 'none',
      scrollTrigger: {
        trigger: wrapper,
        pin: true,
        scrub: 1,
        start: 'top top',
        end: () => `+=${getScrollDistance()}`,
        invalidateOnRefresh: true,
      },
    })

    return () => {
      tween.kill()
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return { containerRef, wrapperRef }
}
