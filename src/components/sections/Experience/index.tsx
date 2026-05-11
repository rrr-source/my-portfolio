import { motion } from 'framer-motion'
import { EXPERIENCES } from '../../../utils/constants'

// Horizontal positions of each node as % of 250vw section width
const NODE_X = [18, 38.5, 61.5, 82] as const

// Badge variants built outside render to keep references stable
const makeBadgeContainer = (nodeIdx: number) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05, delayChildren: nodeIdx * 0.12 + 0.45 },
  },
})
const badgeItem = {
  hidden: { opacity: 0, scale: 0.75 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.28, ease: 'easeOut' as const } },
}

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative flex-shrink-0 h-screen overflow-hidden"
      style={{ minWidth: '250vw', background: '#060610' }}
    >
      {/* ── Decorative vertical "EXPERIENCE" label ──────────────────── */}
      <div
        aria-hidden
        className="absolute font-display select-none pointer-events-none"
        style={{
          fontSize: '7vw',
          color: 'rgba(255,255,255,0.03)',
          writingMode: 'vertical-rl',
          transform: 'rotate(180deg) translateY(50%)',
          top: '50%',
          left: '2.5vw',
          lineHeight: 1,
        }}
      >
        EXPERIENCE
      </div>

      {/* ── "03" watermark ───────────────────────────────────────────── */}
      <div
        aria-hidden
        className="absolute font-display leading-none select-none pointer-events-none"
        style={{
          fontSize: '28vw',
          color: 'rgba(255,255,255,0.025)',
          right: '4%',
          top: '50%',
          transform: 'translateY(-55%)',
        }}
      >
        03
      </div>

      {/* ── Section header ───────────────────────────────────────────── */}
      <div className="absolute top-28 left-20 z-10">
        <motion.span
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="font-mono text-[11px] tracking-[0.28em] text-white/35 uppercase"
        >
          03 / Experience
        </motion.span>
        <div className="overflow-hidden mt-2">
          <motion.h2
            initial={{ y: '100%', opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-white leading-none"
            style={{ fontSize: 'clamp(38px, 4.5vw, 72px)' }}
          >
            EXPERIENCE
          </motion.h2>
        </div>
      </div>

      {/* ── Timeline ─────────────────────────────────────────────────── */}
      <div className="absolute inset-0">

        {/* Horizontal line — draws left to right via scaleX */}
        <motion.div
          aria-hidden
          className="absolute h-px origin-left"
          style={{
            top: '50%',
            left: '14%',
            right: '14%',
            background:
              'linear-gradient(to right, transparent, rgba(255,255,255,0.14) 4%, rgba(255,255,255,0.14) 96%, transparent)',
          }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* ── Nodes ─────────────────────────────────────────────────── */}
        {EXPERIENCES.map((exp, i) => {
          const isAbove = i % 2 === 0
          const xPos = NODE_X[i]
          const badgeContainerVariants = makeBadgeContainer(i)

          return (
            <div
              key={exp.company}
              className="absolute"
              style={{ left: `${xPos}%`, top: '50%' }}
            >
              {/* Connector line (vertical, node → card) */}
              <motion.div
                className="absolute"
                style={{
                  left: 0,
                  width: 1,
                  height: 64,
                  background: 'rgba(255,255,255,0.14)',
                  transform: 'translateX(-50%)',
                  ...(isAbove
                    ? { bottom: 10, transformOrigin: 'bottom' }
                    : { top: 10, transformOrigin: 'top' }),
                }}
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.38, delay: i * 0.12 + 0.25, ease: 'easeOut' }}
              />

              {/* Circle node — spring bounce */}
              <motion.div
                className="absolute rounded-full"
                style={{
                  width: 16,
                  height: 16,
                  top: 0,
                  left: 0,
                  transform: 'translate(-50%, -50%)',
                  background: '#060610',
                  border: '2px solid #00ff88',
                  boxShadow: '0 0 0 5px rgba(0,255,136,0.10), 0 0 24px rgba(0,255,136,0.18)',
                }}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{
                  type: 'spring',
                  stiffness: 360,
                  damping: 13,
                  delay: i * 0.12,
                }}
              >
                {/* Inner filled accent dot */}
                <div
                  className="absolute rounded-full bg-accent"
                  style={{
                    width: 6,
                    height: 6,
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                />
              </motion.div>

              {/* Card */}
              <motion.div
                className="absolute rounded-2xl border border-white/[0.08] p-5 cursor-default"
                style={{
                  width: 272,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  ...(isAbove ? { bottom: 82 } : { top: 82 }),
                  background:
                    'linear-gradient(140deg, rgba(255,255,255,0.048) 0%, rgba(255,255,255,0.012) 100%)',
                  backdropFilter: 'blur(20px)',
                }}
                initial={{ opacity: 0, y: isAbove ? -32 : 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.72,
                  delay: i * 0.12 + 0.18,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  borderColor: 'rgba(0,255,136,0.18)',
                  boxShadow: '0 16px 48px rgba(0,255,136,0.08)',
                  transition: { duration: 0.2 },
                }}
              >
                {/* Period */}
                <span className="font-mono text-[10px] tracking-[0.2em] text-white/30 uppercase">
                  {exp.period}
                </span>

                {/* Company */}
                <h3
                  className="font-display text-white leading-none mt-1"
                  style={{ fontSize: '1.65rem' }}
                >
                  {exp.company}
                </h3>

                {/* Role */}
                <p className="font-sans font-medium text-xs text-accent mt-1 tracking-wide">
                  {exp.role}
                </p>

                {/* Achievement bullets */}
                <ul className="mt-3.5 space-y-2">
                  {exp.achievements.map((achievement) => (
                    <li key={achievement} className="flex items-start gap-2">
                      <span
                        className="rounded-full bg-accent flex-shrink-0"
                        style={{ width: 4, height: 4, marginTop: 5 }}
                      />
                      <span className="font-sans text-[11px] leading-snug text-white/[0.42]">
                        {achievement}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Tech stack badges with stagger */}
                <motion.div
                  className="flex flex-wrap gap-1.5 mt-4"
                  variants={badgeContainerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.25 }}
                >
                  {exp.tags.map((tag) => (
                    <motion.span
                      key={tag}
                      variants={badgeItem}
                      whileHover={{
                        borderColor: 'rgba(0,255,136,0.38)',
                        color: 'rgba(255,255,255,0.85)',
                        transition: { duration: 0.14 },
                      }}
                      className="px-2 py-0.5 rounded-full font-mono text-[9px] text-white/38 border border-white/12"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
