import { motion } from 'framer-motion'
import { MagneticButton } from '../../ui/MagneticButton'
import { CONTACT_LINKS } from '../../../utils/constants'

const HEADING_LINES = ['LET\'S BUILD', 'SOMETHING', 'EXCEPTIONAL.'] as const

// Variant propagation for contact link hover underlines
const linkHover = {
  default: {},
  hover:   {},
}
const underlineVariants = {
  default: { scaleX: 0 },
  hover:   { scaleX: 1 },
}
const textVariants = {
  default: { color: 'rgba(255,255,255,0.48)' },
  hover:   { color: 'rgba(255,255,255,0.85)' },
}

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative flex-shrink-0 w-screen h-screen overflow-hidden bg-background flex flex-col"
    >
      {/* ── Radial glow behind centred text ─────────────────────────── */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 55% 45% at 50% 48%, rgba(0,255,136,0.055) 0%, transparent 70%)',
        }}
      />

      {/* ── "06" watermark ───────────────────────────────────────────── */}
      <div
        aria-hidden
        className="absolute font-display leading-none select-none pointer-events-none"
        style={{
          fontSize: '30vw',
          color: 'rgba(255,255,255,0.022)',
          right: '2%',
          top: '50%',
          transform: 'translateY(-55%)',
        }}
      >
        06
      </div>

      {/* ── Main centred content ─────────────────────────────────────── */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-8 text-center">

        {/* Section label */}
        <motion.span
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="font-mono text-[11px] tracking-[0.28em] text-white/30 uppercase mb-10"
        >
          06 / Contact
        </motion.span>

        {/* Top accent line — draws from center outward */}
        <motion.div
          className="h-px mb-10 bg-white/12 origin-center"
          style={{ width: 'min(520px, 80vw)' }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Heading */}
        <h2 className="font-display leading-[0.9] tracking-tight select-none">
          {HEADING_LINES.map((line, i) => (
            <div key={line} className="overflow-hidden">
              <motion.span
                className={`block ${i === 2 ? 'text-accent' : 'text-white'}`}
                style={{ fontSize: 'clamp(56px, 9vw, 120px)' }}
                initial={{ y: '100%', opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{
                  duration: 0.95,
                  delay: i * 0.13,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {line}
              </motion.span>
            </div>
          ))}
        </h2>

        {/* Bottom accent line */}
        <motion.div
          className="h-px mt-10 bg-white/12 origin-center"
          style={{ width: 'min(520px, 80vw)' }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* CTA button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.65, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12"
        >
          <MagneticButton href="mailto:roman@example.com" variant="primary">
            Get In Touch
          </MagneticButton>
        </motion.div>

        {/* Contact links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.65, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 flex items-start justify-center gap-10 flex-wrap"
        >
          {CONTACT_LINKS.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-1.5 cursor-pointer"
              variants={linkHover}
              initial="default"
              whileHover="hover"
            >
              {/* Abbreviation badge */}
              <span
                className="w-8 h-8 rounded-full flex items-center justify-center font-mono text-[10px] text-white/50 border border-white/12 bg-white/[0.03]"
              >
                {link.abbr}
              </span>
              {/* Label */}
              <span className="font-mono text-[9px] tracking-[0.2em] text-white/28 uppercase">
                {link.label}
              </span>
              {/* Value + sliding underline */}
              <div className="relative pb-0.5">
                <motion.span
                  className="font-sans text-xs"
                  variants={textVariants}
                  transition={{ duration: 0.2 }}
                >
                  {link.value}
                </motion.span>
                <motion.span
                  className="absolute bottom-0 left-0 h-px w-full bg-accent"
                  style={{ originX: 0 }}
                  variants={underlineVariants}
                  transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* ── Footer ───────────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="relative z-10 flex items-center justify-between px-10 pb-8 mt-auto"
      >
        <span className="font-mono text-[10px] text-white/22 tracking-widest">
          © 2025 Roman Golovlyov
        </span>
        <span className="font-mono text-[10px] text-white/22 tracking-widest">
          Built with React &amp; GSAP
        </span>
      </motion.div>
    </section>
  )
}
