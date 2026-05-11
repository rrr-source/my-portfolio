import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import clsx from 'clsx'

interface MagneticButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  className?: string
  variant?: 'primary' | 'ghost'
}

const MAX_PULL = 12
const SPRING = { stiffness: 300, damping: 20, mass: 0.5 }

export function MagneticButton({
  children,
  href,
  onClick,
  className,
  variant = 'ghost',
}: MagneticButtonProps) {
  const anchorRef = useRef<HTMLAnchorElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, SPRING)
  const springY = useSpring(y, SPRING)

  function handleMouseMove(e: React.MouseEvent) {
    const el = anchorRef.current ?? buttonRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    x.set(Math.max(-MAX_PULL, Math.min(MAX_PULL, (e.clientX - cx) * 0.4)))
    y.set(Math.max(-MAX_PULL, Math.min(MAX_PULL, (e.clientY - cy) * 0.4)))
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  const classes = clsx(
    'inline-flex items-center justify-center px-8 py-4 rounded-full font-sans font-medium text-[18px] transition-all duration-200 select-none cursor-pointer',
    variant === 'primary'
      ? 'bg-accent text-background hover:bg-accent/90 hover:shadow-[0_0_36px_rgba(0,255,136,0.5)]'
      : 'border border-white/30 text-white hover:border-white/60 hover:bg-white/5',
    className,
  )

  const sharedMotionProps = {
    'data-magnetic': '',
    style: { x: springX, y: springY },
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    className: classes,
    whileHover: { scale: 1.04 },
    whileTap: { scale: 0.97 },
  }

  if (href) {
    return (
      <motion.a ref={anchorRef} href={href} {...sharedMotionProps}>
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      ref={buttonRef}
      type="button"
      onClick={onClick}
      {...sharedMotionProps}
    >
      {children}
    </motion.button>
  )
}
