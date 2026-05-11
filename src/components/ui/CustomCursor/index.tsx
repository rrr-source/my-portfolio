import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export function CustomCursor() {
  const [isMobile, setIsMobile] = useState(false)
  const [isOverMagnetic, setIsOverMagnetic] = useState(false)

  // Raw mouse position
  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  // Dot: very stiff spring — near-instant follow
  const dotX = useSpring(mouseX, { stiffness: 2000, damping: 100, mass: 0.1 })
  const dotY = useSpring(mouseY, { stiffness: 2000, damping: 100, mass: 0.1 })

  // Ring: softer spring — ~80ms lag
  const ringX = useSpring(mouseX, { stiffness: 160, damping: 22, mass: 0.3 })
  const ringY = useSpring(mouseY, { stiffness: 160, damping: 22, mass: 0.3 })

  // Detect mobile once on mount
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)')
    setIsMobile(mq.matches)
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  useEffect(() => {
    if (isMobile) return

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    const onOver = (e: MouseEvent) => {
      if ((e.target as Element).closest('[data-magnetic]')) setIsOverMagnetic(true)
    }

    const onOut = (e: MouseEvent) => {
      if ((e.target as Element).closest('[data-magnetic]')) setIsOverMagnetic(false)
    }

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
    }
  }, [isMobile, mouseX, mouseY])

  if (isMobile) return null

  return (
    <>
      {/* Small dot — instant */}
      <motion.div
        aria-hidden
        className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full bg-white"
        style={{
          width: 6,
          height: 6,
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />

      {/* Larger ring — lagged */}
      <motion.div
        aria-hidden
        className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full border"
        style={{
          width: 32,
          height: 32,
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isOverMagnetic ? 2.5 : 1,
          borderColor: isOverMagnetic ? '#00ff88' : 'rgba(255,255,255,0.5)',
          backgroundColor: isOverMagnetic ? 'rgba(0,255,136,0.06)' : 'transparent',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      />
    </>
  )
}
