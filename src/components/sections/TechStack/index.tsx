import { motion } from 'framer-motion'
import { Marquee } from '../../ui/Marquee'
import type { MarqueeItemData } from '../../ui/Marquee'

// ─── Marquee data ─────────────────────────────────────────────────────────────

const FRONTEND: MarqueeItemData[] = [
  { name: 'Vue 3',         color: '#41b883' },
  { name: 'React',         color: '#61dafb' },
  { name: 'TypeScript',    color: '#3178c6' },
  { name: 'Next.js',       color: '#e2e8f0' },
  { name: 'Nuxt 3',        color: '#00dc82' },
  { name: 'Tailwind CSS',  color: '#06b6d4' },
  { name: 'GSAP',          color: '#88ce02' },
  { name: 'Framer Motion', color: '#cc6699' },
]

const WEB3: MarqueeItemData[] = [
  { name: 'Wagmi',        color: '#1c6eff' },
  { name: 'Ethers.js',    color: '#6b8cff' },
  { name: 'Web3.js',      color: '#f16822' },
  { name: 'WalletConnect',color: '#3b99fc' },
  { name: 'Hardhat',      color: '#fde047' },
  { name: 'Solidity',     color: '#627eea' },
  { name: 'Viem',         color: '#c084fc' },
]

const TOOLS: MarqueeItemData[] = [
  { name: 'Vite',       color: '#646cff' },
  { name: 'Docker',     color: '#2496ed' },
  { name: 'Git',        color: '#f05032' },
  { name: 'PostgreSQL', color: '#4169e1' },
  { name: 'GraphQL',    color: '#e10098' },
  { name: 'Node.js',    color: '#339933' },
  { name: 'Figma',      color: '#f24e1e' },
  { name: 'Vercel',     color: '#e2e8f0' },
]

const ROWS = [
  { items: FRONTEND, direction: 'left'  as const, speed: 38, label: 'Frontend',  count: FRONTEND.length },
  { items: WEB3,     direction: 'right' as const, speed: 30, label: 'Web3',       count: WEB3.length },
  { items: TOOLS,    direction: 'left'  as const, speed: 44, label: 'Tools',      count: TOOLS.length },
]

// ─── Component ────────────────────────────────────────────────────────────────

export function TechStackSection() {
  return (
    <section
      id="techstack"
      className="relative flex-shrink-0 h-screen overflow-hidden"
      style={{
        minWidth: '120vw',
        background: '#080812',
        backgroundImage: 'radial-gradient(rgba(255,255,255,0.055) 1px, transparent 1px)',
        backgroundSize: '30px 30px',
      }}
    >
      {/* ── "04" watermark ───────────────────────────────────────────── */}
      <div
        aria-hidden
        className="absolute font-display leading-none select-none pointer-events-none"
        style={{
          fontSize: '26vw',
          color: 'rgba(255,255,255,0.022)',
          right: '2%',
          top: '50%',
          transform: 'translateY(-55%)',
        }}
      >
        04
      </div>

      {/* ── Main layout ──────────────────────────────────────────────── */}
      <div className="relative z-10 flex flex-col h-full px-16 lg:px-24 pt-28 pb-12">

        {/* Header */}
        <div className="mb-10">
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="font-mono text-[11px] tracking-[0.28em] text-white/35 uppercase"
          >
            04 / Tech Stack
          </motion.span>

          <div className="overflow-hidden mt-2">
            <motion.h2
              initial={{ y: '100%', opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.9, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-white leading-none"
              style={{ fontSize: 'clamp(42px, 5.5vw, 88px)' }}
            >
              TECH STACK
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 font-sans text-sm text-white/38 max-w-sm leading-relaxed"
          >
            Tools and technologies I reach for when building high-performance products.
          </motion.p>
        </div>

        {/* Marquee rows */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex-1 flex flex-col justify-center gap-0"
        >
          {ROWS.map((row) => (
            <div key={row.label} className="py-4 border-b border-white/[0.05] last:border-b-0">
              {/* Row label */}
              <span className="sr-only">{row.label}</span>
              <Marquee items={row.items} direction={row.direction} speed={row.speed} />
            </div>
          ))}
        </motion.div>

        {/* Summary grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 grid grid-cols-3 gap-8 max-w-md"
        >
          {ROWS.map((row) => (
            <div key={row.label} className="flex flex-col gap-1">
              <span
                className="font-display text-accent leading-none"
                style={{ fontSize: '2.8rem' }}
              >
                {row.count}
              </span>
              <span className="font-sans text-xs text-white/35 tracking-wide">
                {row.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
