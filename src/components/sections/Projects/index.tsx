import { motion } from 'framer-motion'
import { MagneticButton } from '../../ui/MagneticButton'
import { PROJECTS } from '../../../utils/constants'

// ─── Badge variants ───────────────────────────────────────────────────────────

const badgeContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.065, delayChildren: 0.35 } },
}
const badgeItem = {
  hidden:   { opacity: 0, y: 10 },
  visible:  { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' as const } },
}

// ─── Abstract mockup shapes ───────────────────────────────────────────────────

function TradingMockup({ accent }: { accent: string }) {
  const barHeights = [55, 80, 45, 90, 65, 110, 75, 95, 60, 85]
  return (
    <>
      {/* Header bar */}
      <div className="absolute top-5 left-5 right-5 h-1 rounded-full" style={{ background: `${accent}30` }} />
      {/* Chart bars */}
      <div className="absolute bottom-16 left-8 right-8 flex items-end gap-1.5">
        {barHeights.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t-sm"
            style={{
              height: h,
              background: i === barHeights.length - 1
                ? accent
                : `linear-gradient(to top, ${accent}90, ${accent}20)`,
              opacity: 0.75 + i * 0.025,
            }}
          />
        ))}
      </div>
      {/* Trend line overlay */}
      <svg className="absolute bottom-16 left-8 right-8 pointer-events-none" style={{ width: 'calc(100% - 4rem)', height: 130 }}>
        <polyline
          points="0,90 30,60 60,75 90,35 120,50 150,20 180,38 210,15 240,30 270,10"
          fill="none"
          stroke={accent}
          strokeWidth="1.5"
          strokeOpacity="0.6"
        />
      </svg>
      {/* Metric row */}
      <div className="absolute bottom-4 left-8 right-8 flex gap-3">
        {['24h Vol', 'P&L', 'Signals'].map((label) => (
          <div key={label} className="flex-1 rounded-lg py-1.5 px-2" style={{ background: `${accent}12`, border: `1px solid ${accent}20` }}>
            <div className="text-[8px] font-mono" style={{ color: `${accent}80` }}>{label}</div>
            <div className="text-[10px] font-mono text-white/60 mt-0.5">—</div>
          </div>
        ))}
      </div>
    </>
  )
}

function PresaleMockup({ accent }: { accent: string }) {
  return (
    <>
      {/* Token header */}
      <div className="absolute top-6 left-6 right-6 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full flex-shrink-0" style={{ background: `linear-gradient(135deg, ${accent}, ${accent}60)` }} />
        <div>
          <div className="h-2 w-16 rounded-full bg-white/20" />
          <div className="h-1.5 w-10 rounded-full mt-1.5" style={{ background: `${accent}50` }} />
        </div>
        <div className="ml-auto text-[11px] font-mono" style={{ color: accent }}>$0.08</div>
      </div>
      {/* Progress bar */}
      <div className="absolute top-24 left-6 right-6">
        <div className="h-1.5 rounded-full bg-white/10">
          <div className="h-full w-[62%] rounded-full" style={{ background: `linear-gradient(to right, ${accent}90, ${accent})` }} />
        </div>
        <div className="flex justify-between mt-1.5">
          <span className="text-[9px] font-mono text-white/35">Raised: $1.24M</span>
          <span className="text-[9px] font-mono" style={{ color: accent }}>62%</span>
        </div>
      </div>
      {/* Tier grid */}
      <div className="absolute top-36 left-6 right-6 grid grid-cols-2 gap-2.5">
        {['Tier 1', 'Tier 2', 'Tier 3', 'Tier 4'].map((tier, i) => (
          <div
            key={tier}
            className="rounded-xl p-3"
            style={{
              background: i === 0 ? `${accent}20` : 'rgba(255,255,255,0.04)',
              border: `1px solid ${i === 0 ? `${accent}40` : 'rgba(255,255,255,0.08)'}`,
            }}
          >
            <div className="text-[9px] font-mono text-white/40">{tier}</div>
            <div className="text-[11px] font-mono mt-1" style={{ color: i === 0 ? accent : 'rgba(255,255,255,0.5)' }}>
              {['$0.06', '$0.08', '$0.10', '$0.12'][i]}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

function StakingMockup({ accent }: { accent: string }) {
  return (
    <>
      {/* APY ring */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div
          className="w-24 h-24 rounded-full flex flex-col items-center justify-center"
          style={{
            border: `3px solid ${accent}`,
            boxShadow: `0 0 30px ${accent}30`,
          }}
        >
          <span className="font-display text-2xl" style={{ color: accent }}>124%</span>
          <span className="font-mono text-[9px] text-white/40">APY</span>
        </div>
      </div>
      {/* Stats row */}
      <div className="absolute top-36 left-6 right-6 flex gap-3">
        {['TVL', 'Staked', 'Rewards'].map((label) => (
          <div key={label} className="flex-1 text-center">
            <div className="text-[9px] font-mono text-white/35">{label}</div>
            <div className="text-[11px] font-mono mt-1" style={{ color: accent }}>—</div>
          </div>
        ))}
      </div>
      {/* Input area */}
      <div className="absolute bottom-12 left-6 right-6">
        <div className="h-10 rounded-xl px-3 flex items-center" style={{ background: 'rgba(255,255,255,0.05)', border: `1px solid ${accent}30` }}>
          <span className="text-[9px] font-mono text-white/30">Amount to stake</span>
          <span className="ml-auto text-[9px] font-mono" style={{ color: accent }}>MAX</span>
        </div>
        <div className="mt-2 h-8 rounded-xl flex items-center justify-center" style={{ background: `${accent}20`, border: `1px solid ${accent}50` }}>
          <span className="text-[10px] font-mono" style={{ color: accent }}>STAKE</span>
        </div>
      </div>
    </>
  )
}

function SaaSMockup({ accent }: { accent: string }) {
  const navItems = 4
  return (
    <>
      {/* Sidebar */}
      <div className="absolute left-0 top-0 bottom-0 w-14 flex flex-col pt-6 pb-4 items-center gap-4 rounded-l-2xl" style={{ background: 'rgba(255,255,255,0.04)', borderRight: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="w-6 h-6 rounded-full" style={{ background: `${accent}50` }} />
        <div className="w-px h-3 bg-white/10 mx-auto" />
        {Array.from({ length: navItems }).map((_, i) => (
          <div key={i} className="w-6 h-1.5 rounded-full" style={{ background: i === 1 ? accent : 'rgba(255,255,255,0.15)' }} />
        ))}
      </div>
      {/* Header bar */}
      <div className="absolute top-4 left-16 right-6 h-6 rounded-lg flex items-center px-3 gap-2" style={{ background: 'rgba(255,255,255,0.04)' }}>
        <div className="w-14 h-1.5 rounded-full bg-white/20" />
        <div className="ml-auto w-5 h-5 rounded-full" style={{ background: `${accent}30` }} />
      </div>
      {/* Metric cards */}
      <div className="absolute top-16 left-16 right-6 grid grid-cols-2 gap-2">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="rounded-lg p-2.5" style={{ background: 'rgba(255,255,255,0.04)', border: `1px solid ${i === 0 ? `${accent}30` : 'rgba(255,255,255,0.07)'}` }}>
            <div className="w-8 h-1.5 rounded-full bg-white/20" />
            <div className="mt-2 font-display text-sm" style={{ color: i === 0 ? accent : 'rgba(255,255,255,0.5)' }}>—</div>
          </div>
        ))}
      </div>
      {/* Chart bar */}
      <div className="absolute bottom-6 left-16 right-6 h-14 rounded-xl overflow-hidden" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
        <div className="absolute bottom-0 left-0 right-0 flex items-end gap-1 px-2 pb-1">
          {[30, 50, 35, 65, 45, 80, 55].map((h, i) => (
            <div key={i} className="flex-1 rounded-t" style={{ height: h * 0.42, background: `linear-gradient(to top, ${accent}80, ${accent}20)` }} />
          ))}
        </div>
      </div>
    </>
  )
}

const MOCKUPS = [TradingMockup, PresaleMockup, StakingMockup, SaaSMockup]

// ─── Single project panel ─────────────────────────────────────────────────────

interface ProjectPanelProps {
  project: typeof PROJECTS[number]
  index: number
  isLast: boolean
}

function ProjectPanel({ project, index, isLast }: ProjectPanelProps) {
  const isLeft    = index % 2 === 0
  const num       = String(index + 1).padStart(2, '0')
  const accent    = project.accent ?? '#00ff88'
  const Mockup    = MOCKUPS[index]
  const animDelay = 0.1

  return (
    <div
      className="relative flex-shrink-0 h-screen overflow-hidden"
      style={{ minWidth: '100vw' }}
    >
      {/* Background tint from accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 60% 60% at ${isLeft ? '70%' : '30%'} 50%, ${accent}08 0%, transparent 70%)`,
        }}
      />

      {/* Vertical accent divider (right edge, bleeds into next section) */}
      {!isLast && (
        <div
          className="absolute right-0 top-0 bottom-0 w-px pointer-events-none"
          style={{
            background: `linear-gradient(to bottom, transparent 0%, ${accent}50 50%, transparent 100%)`,
          }}
        />
      )}

      {/* ── Info side ─────────────────────────────────────────────── */}
      <div
        className={`absolute top-0 bottom-0 w-1/2 flex flex-col justify-center px-16 lg:px-20 ${isLeft ? 'left-0' : 'right-0'}`}
      >
        {/* Large number watermark */}
        <div
          aria-hidden
          className="absolute font-display leading-none select-none pointer-events-none"
          style={{
            fontSize: '20vw',
            color: `${accent}18`,
            bottom: '6%',
            [isLeft ? 'left' : 'right']: '-2vw',
            lineHeight: 0.85,
          }}
        >
          {num}
        </div>

        {/* Content */}
        <div className="relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: animDelay }}
            className="font-mono text-[11px] tracking-[0.28em] text-white/35 uppercase"
          >
            05 / Projects — {num}
          </motion.span>

          <div className="overflow-hidden mt-3">
            <motion.h2
              initial={{ y: '100%', opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.9, delay: animDelay + 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-white leading-none"
              style={{ fontSize: 'clamp(32px, 4.5vw, 68px)' }}
            >
              {project.title}
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.65, delay: animDelay + 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 font-sans text-sm text-white/45 leading-relaxed max-w-sm"
          >
            {project.description}
          </motion.p>

          {/* Tech badges */}
          <motion.div
            className="flex flex-wrap gap-2 mt-6"
            variants={badgeContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            {project.tags.map((tag) => (
              <motion.span
                key={tag}
                variants={badgeItem}
                whileHover={{
                  borderColor: `${accent}50`,
                  color: 'rgba(255,255,255,0.85)',
                  transition: { duration: 0.15 },
                }}
                className="px-3 py-1 rounded-full font-mono text-[10px] text-white/45 border border-white/12 cursor-default"
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: animDelay + 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-4 mt-8"
          >
            <MagneticButton href={project.href} variant="primary">
              View Live
            </MagneticButton>
            <MagneticButton href={project.github} variant="ghost">
              Case Study
            </MagneticButton>
          </motion.div>
        </div>
      </div>

      {/* ── Mockup side ───────────────────────────────────────────── */}
      <div
        className={`absolute top-0 bottom-0 w-1/2 flex items-center justify-center ${isLeft ? 'right-0' : 'left-0'}`}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, delay: animDelay + 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-2xl overflow-hidden"
          style={{
            width: 'clamp(300px, 36vw, 520px)',
            height: 'clamp(220px, 28vw, 380px)',
            background: `linear-gradient(145deg, ${accent}0d 0%, rgba(255,255,255,0.018) 60%, ${accent}06 100%)`,
            border: `1px solid ${accent}22`,
            boxShadow: `0 0 80px ${accent}18, inset 0 0 40px ${accent}08`,
            animation: 'mockup-bob 7s ease-in-out infinite',
          }}
        >
          {/* Inner glow */}
          <div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{
              background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${accent}15 0%, transparent 60%)`,
            }}
          />
          {/* Abstract UI elements */}
          <div className="absolute inset-0">
            <Mockup accent={accent} />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

// ─── Section ──────────────────────────────────────────────────────────────────

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative flex-shrink-0 h-screen flex"
      style={{ minWidth: '400vw', background: '#050508' }}
    >
      {PROJECTS.map((project, i) => (
        <ProjectPanel
          key={project.title}
          project={project}
          index={i}
          isLast={i === PROJECTS.length - 1}
        />
      ))}
    </section>
  )
}
