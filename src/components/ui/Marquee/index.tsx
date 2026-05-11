import { motion } from 'framer-motion'
import clsx from 'clsx'

export interface MarqueeItemData {
  name: string
  color?: string
}

interface MarqueeProps {
  items: Array<string | MarqueeItemData>
  speed?: number
  direction?: 'left' | 'right'
  className?: string
}

function toItem(raw: string | MarqueeItemData): MarqueeItemData {
  return typeof raw === 'string' ? { name: raw } : raw
}

export function Marquee({ items, speed = 20, direction = 'left', className }: MarqueeProps) {
  const doubled = [...items, ...items]

  return (
    <div className={clsx('overflow-hidden', className)}>
      <div
        className="flex whitespace-nowrap will-change-transform"
        style={{
          animation: `${direction === 'right' ? 'marquee-reverse' : 'marquee'} ${speed}s linear infinite`,
        }}
      >
        {doubled.map((raw, i) => {
          const item = toItem(raw)
          return (
            <motion.span
              key={i}
              className="flex items-center gap-2.5 px-6 cursor-default select-none flex-shrink-0"
              whileHover={
                item.color
                  ? {
                      filter: `drop-shadow(0 0 10px ${item.color}70)`,
                      transition: { duration: 0.2 },
                    }
                  : undefined
              }
            >
              {/* Icon placeholder — colored circle */}
              <span
                className="w-2 h-2 rounded-full flex-shrink-0 opacity-80"
                style={{ background: item.color ?? 'rgba(255,255,255,0.35)' }}
              />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/38">
                {item.name}
              </span>
            </motion.span>
          )
        })}
      </div>
    </div>
  )
}
