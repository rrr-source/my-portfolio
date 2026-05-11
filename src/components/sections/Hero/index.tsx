import { useRef } from 'react'
import { motion } from 'framer-motion'
import { MagneticButton } from '../../ui/MagneticButton'
import { useGSAP, gsap } from '../../../hooks/useGSAP'

const WORDS = ['ROMAN', 'GOLOVLYOV'] as const

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)

  // Clip-reveal each heading word from below on mount
  useGSAP(
    () => {
      gsap.from('[data-word]', {
        y: '110%',
        opacity: 0,
        duration: 1.1,
        ease: 'power4.out',
        stagger: 0.15,
        delay: 0.1,
      })
    },
    { scope: sectionRef },
  )

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative flex-shrink-0 w-screen h-screen overflow-hidden bg-background"
    >
      {/* ── Animated mesh gradient orbs ─────────────────────────────── */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-40 -left-40 w-[750px] h-[750px] rounded-full opacity-70"
          style={{
            background: 'radial-gradient(circle, #1a0533 0%, transparent 65%)',
            filter: 'blur(90px)',
            animation: 'orb-drift-1 20s ease-in-out infinite alternate',
          }}
        />
        <div
          className="absolute -bottom-32 right-0 w-[650px] h-[650px] rounded-full opacity-55"
          style={{
            background: 'radial-gradient(circle, #001a1a 0%, transparent 65%)',
            filter: 'blur(90px)',
            animation: 'orb-drift-2 25s ease-in-out infinite alternate',
          }}
        />
        <div
          className="absolute top-[15%] right-[25%] w-[420px] h-[420px] rounded-full opacity-40"
          style={{
            background: 'radial-gradient(circle, #0d0030 0%, transparent 65%)',
            filter: 'blur(70px)',
            animation: 'orb-drift-3 18s ease-in-out infinite alternate',
          }}
        />
      </div>

      {/* ── Grid lines ──────────────────────────────────────────────── */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: [
            'repeating-linear-gradient(to right, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 100px)',
            'repeating-linear-gradient(to bottom, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 100px)',
          ].join(', '),
        }}
      />

      {/* ── Floating geometric accents ──────────────────────────────── */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        {/* Large circle — top right */}
        <div
          className="absolute top-[10%] right-[6%] w-32 h-32 rounded-full"
          style={{
            border: '1px solid rgba(255,255,255,0.06)',
            animation: 'float-gentle 8s ease-in-out infinite',
          }}
        />
        {/* Tall rectangle — bottom right area */}
        <div
          className="absolute bottom-[20%] right-[20%] w-14 h-40"
          style={{
            border: '1px solid rgba(0,255,136,0.09)',
            animation: 'float-alt 10s ease-in-out infinite',
          }}
        />
        {/* Small accent dot */}
        <div
          className="absolute top-[42%] right-[10%] w-2.5 h-2.5 rounded-full"
          style={{
            background: 'rgba(0,255,136,0.35)',
            animation: 'float-gentle 6s ease-in-out infinite reverse',
          }}
        />
      </div>

      {/* ── Main content ─────────────────────────────────────────────── */}
      <div className="relative z-10 flex flex-col h-full px-12 lg:px-20 pt-28 pb-10">

        {/* Available label */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.3, ease: 'easeOut' }}
          className="flex items-center gap-3 mb-10"
        >
          <span
            className="w-2 h-2 rounded-full bg-accent"
            style={{ animation: 'pulse-dot 2.8s ease-in-out infinite' }}
          />
          <span className="font-mono text-[11px] tracking-[0.28em] text-white/50 uppercase">
            Available for Work
          </span>
        </motion.div>

        {/* Heading — GSAP clip-reveal on [data-word] spans */}
        <div className="flex-1 flex flex-col justify-center">
          <h1 className="font-display leading-[0.88] tracking-tight select-none">
            {WORDS.map((word, i) => (
              <div key={word} className="overflow-hidden">
                <span
                  data-word=""
                  className={`block ${i === 1 ? 'text-accent' : 'text-white'}`}
                  style={{ fontSize: 'clamp(72px, 13vw, 172px)' }}
                >
                  {word}
                </span>
              </div>
            ))}
          </h1>

          {/* Subtitles */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 space-y-3 max-w-xl"
          >
            <p className="font-sans font-medium text-xl text-white/90 tracking-tight">
              Frontend &amp; Web3 Engineer
            </p>
            <p className="font-sans text-base leading-relaxed text-white/40">
              Building scalable SaaS platforms, trading systems and blockchain applications.
            </p>
          </motion.div>
        </div>

        {/* Bottom row: CTAs + scroll indicator */}
        <div className="flex items-end justify-between">
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <MagneticButton href="#projects" variant="primary">
              View Projects
            </MagneticButton>
            <MagneticButton href="#contact" variant="ghost">
              Contact Me
            </MagneticButton>
          </motion.div>

          {/* Vertical scroll label */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="font-mono text-[10px] tracking-[0.35em] text-white/25 uppercase select-none"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            Scroll to Explore →
          </motion.p>
        </div>
      </div>
    </section>
  )
}
