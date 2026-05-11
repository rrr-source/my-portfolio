import { motion } from 'framer-motion'
import { containerVariants, itemVariants } from '../../../utils/animations'

const STATS = [
  { value: '4+',         label: 'Years of\nExperience' },
  { value: '25+',        label: 'Pages &\nInterfaces Built' },
  { value: '10+',        label: 'SaaS & Web3\nProjects' },
  { value: 'Multi‑chain', label: 'Web3\nIntegrations' },
] as const

const SKILLS_ROW_1 = ['Vue 3', 'React', 'TypeScript', 'Wagmi', 'GSAP', 'Framer Motion', 'Tailwind CSS']
const SKILLS_ROW_2 = ['Next.js', 'Node.js', 'PostgreSQL', 'ethers.js', 'web3.js', 'Hardhat', 'Docker']

// Pre-compute variants so they're stable across renders
const cardContainerVariants = containerVariants(0.1, 0.15)
const cardItemVariants = itemVariants(0.65)

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative flex-shrink-0 h-screen overflow-hidden bg-background"
      style={{ minWidth: '150vw' }}
    >
      {/* ── "02" watermark ───────────────────────────────────────────── */}
      <div
        aria-hidden
        className="absolute left-0 top-1/2 -translate-y-[55%] font-display leading-none select-none pointer-events-none"
        style={{ fontSize: '30vw', color: 'rgba(255,255,255,0.03)' }}
      >
        02
      </div>

      {/* ── Layout ───────────────────────────────────────────────────── */}
      <div className="relative z-10 flex h-full items-center px-12 lg:px-20 pt-24 pb-12 gap-16">

        {/* Left column — section title */}
        <div className="flex flex-col justify-center shrink-0" style={{ width: '32%' }}>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="font-mono text-[11px] tracking-[0.28em] text-white/35 uppercase mb-5"
          >
            02 / About
          </motion.span>

          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: '100%', opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.9, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-white leading-none"
              style={{ fontSize: 'clamp(64px, 7vw, 120px)' }}
            >
              ABOUT
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 font-sans text-sm leading-relaxed text-white/38 max-w-[280px]"
          >
            Focused on crafting high-performance interfaces and on-chain integrations that push the
            boundaries of what&apos;s possible on the web.
          </motion.p>
        </div>

        {/* Right column — stat cards + skill badges */}
        <div className="flex flex-col justify-center gap-9 flex-1">

          {/* Stat cards grid */}
          <motion.div
            variants={cardContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="grid grid-cols-4 gap-4"
          >
            {STATS.map((stat) => (
              <motion.div
                key={stat.label}
                variants={cardItemVariants}
                whileHover={{
                  y: -10,
                  boxShadow: '0 24px 64px rgba(0,255,136,0.12)',
                  borderColor: 'rgba(0,255,136,0.28)',
                  transition: { duration: 0.22, ease: 'easeOut' },
                }}
                className="flex flex-col gap-3 p-6 rounded-2xl border border-white/8 cursor-default"
                style={{
                  background: 'linear-gradient(140deg, rgba(255,255,255,0.045) 0%, rgba(255,255,255,0.01) 100%)',
                  backdropFilter: 'blur(24px)',
                }}
              >
                <span
                  className="font-display text-accent leading-none"
                  style={{ fontSize: 'clamp(30px, 2.8vw, 48px)' }}
                >
                  {stat.value}
                </span>
                <span className="font-sans text-xs leading-snug text-white/45 whitespace-pre-line">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Skill badge rows */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-2.5"
          >
            {[SKILLS_ROW_1, SKILLS_ROW_2].map((row, rowIdx) => (
              <div key={rowIdx} className="flex flex-wrap gap-2">
                {row.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{
                      borderColor: 'rgba(0,255,136,0.3)',
                      color: 'rgba(255,255,255,0.8)',
                      transition: { duration: 0.15 },
                    }}
                    className="px-3 py-1.5 rounded-full font-mono text-xs text-white/45 border border-white/8 bg-white/[0.025] cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
