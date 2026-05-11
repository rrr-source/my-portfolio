import { useRef } from 'react'
import { motion } from 'framer-motion'
import { MagneticButton } from '../../ui/MagneticButton'
import { useGSAP, gsap } from '../../../hooks/useGSAP'

const WORDS = ['ROMAN', 'GOLOVLYOV'] as const

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)

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
      {/* ── Vivid gradient orbs ─────────────────────────────────────────── */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-40 -left-20 w-[900px] h-[900px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(124,58,237,0.45) 0%, rgba(59,130,246,0.22) 45%, transparent 70%)',
            filter: 'blur(80px)',
            animation: 'orb-drift-1 22s ease-in-out infinite alternate',
          }}
        />
        <div
          className="absolute -bottom-32 -right-20 w-[800px] h-[800px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(6,182,212,0.38) 0%, rgba(99,102,241,0.18) 45%, transparent 70%)',
            filter: 'blur(90px)',
            animation: 'orb-drift-2 28s ease-in-out infinite alternate',
          }}
        />
        <div
          className="absolute top-[30%] right-[22%] w-[380px] h-[380px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(0,255,136,0.18) 0%, rgba(6,182,212,0.1) 50%, transparent 70%)',
            filter: 'blur(60px)',
            animation: 'orb-drift-3 18s ease-in-out infinite alternate',
          }}
        />
      </div>

      {/* ── Grid lines ──────────────────────────────────────────────────── */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: [
            'repeating-linear-gradient(to right, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 1px, transparent 1px, transparent 100px)',
            'repeating-linear-gradient(to bottom, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 1px, transparent 1px, transparent 100px)',
          ].join(', '),
        }}
      />

      {/* ── Floating geometric accents ──────────────────────────────────── */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[8%] right-[5%] w-36 h-36 rounded-full"
          style={{ border: '1px solid rgba(124,58,237,0.25)', animation: 'float-gentle 9s ease-in-out infinite' }}
        />
        <div
          className="absolute top-[13%] right-[9.5%] w-20 h-20 rounded-full"
          style={{ border: '1px solid rgba(6,182,212,0.22)', animation: 'float-gentle 9s ease-in-out infinite', animationDelay: '0.6s' }}
        />
        <div
          className="absolute bottom-[22%] right-[17%] w-16 h-52"
          style={{ border: '1px solid rgba(0,255,136,0.18)', animation: 'float-alt 11s ease-in-out infinite' }}
        />
        <div
          className="absolute top-[38%] right-[7%] w-3 h-3 rounded-full"
          style={{ background: 'rgba(124,58,237,0.75)', boxShadow: '0 0 14px rgba(124,58,237,0.7)', animation: 'float-gentle 6s ease-in-out infinite reverse' }}
        />
        <div
          className="absolute top-[62%] right-[28%] w-2 h-2 rounded-full"
          style={{ background: 'rgba(6,182,212,0.85)', boxShadow: '0 0 10px rgba(6,182,212,0.8)', animation: 'float-alt 7s ease-in-out infinite' }}
        />
        <div
          className="absolute top-[75%] right-[10%] w-24 h-24"
          style={{ border: '1px solid rgba(99,102,241,0.18)', transform: 'rotate(45deg)', animation: 'float-gentle 12s ease-in-out infinite' }}
        />
      </div>

      {/* ── Main content ─────────────────────────────────────────────────── */}
      {/*
        Outer: flex-col, full height, horizontal padding via style so we can use max().
        flex-shrink-0 nav spacer at top pushes the flex-1 zone below the fixed nav.
        The flex-1 zone uses items-center to vertically center the content row.
      */}
      <div
        className="relative z-10 flex flex-col h-full"
        style={{ paddingLeft: 'max(8vw, 120px)', paddingRight: '5vw' }}
      >
        {/* Nav clearance spacer */}
        <div className="flex-shrink-0" style={{ height: '72px' }} />

        {/* Vertically centered content row */}
        <div className="flex flex-1 items-center gap-8 lg:gap-16">

          {/* ── Left column — all text ── */}
          <div className="flex flex-col" style={{ maxWidth: 'min(52vw, 680px)' }}>

            {/* Available for Work badge */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.3, ease: 'easeOut' }}
              className="mb-8 w-fit"
            >
              <div
                className="flex items-center gap-2.5 px-4 py-2 rounded-full"
                style={{
                  background: 'rgba(255,255,255,0.055)',
                  border: '1px solid rgba(255,255,255,0.14)',
                  backdropFilter: 'blur(12px)',
                }}
              >
                <span
                  className="w-2 h-2 rounded-full bg-accent flex-shrink-0"
                  style={{ animation: 'pulse-dot 2.8s ease-in-out infinite' }}
                />
                <span className="font-mono text-[11px] tracking-[0.25em] text-white/70 uppercase whitespace-nowrap">
                  Available for Work
                </span>
              </div>
            </motion.div>

            {/* Name heading */}
            <h1 className="font-display leading-[0.88] tracking-tight select-none">
              {WORDS.map((word, i) => (
                <div key={word} className="overflow-hidden">
                  <span
                    data-word=""
                    className={`block ${i === 1 ? 'text-accent' : 'text-white'}`}
                    style={{ fontSize: 'clamp(52px, 9vw, 136px)' }}
                  >
                    {word}
                  </span>
                </div>
              ))}
            </h1>

            {/* Gradient accent line */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.9, delay: 1.05, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 h-[2px] w-52 origin-left"
              style={{
                background: 'linear-gradient(to right, #00ff88, #3b82f6, rgba(99,102,241,0))',
              }}
            />

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 mb-12 space-y-3 max-w-lg"
            >
              <p className="font-sans font-semibold text-xl text-white/90 tracking-tight">
                Frontend &amp; Web3 Engineer
              </p>
              <p className="font-sans text-base leading-relaxed text-white/45">
                Building scalable SaaS platforms, trading systems and blockchain applications.
              </p>
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              className="flex items-center gap-5"
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
          </div>

          {/* ── Right column — decorative orb rings ── */}
          <div className="hidden lg:flex flex-1 items-center justify-center pointer-events-none select-none">
            <div className="relative w-[380px] h-[380px]">
              <div
                className="absolute inset-[-20%] rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(99,102,241,0.28) 0%, rgba(59,130,246,0.12) 50%, transparent 70%)',
                  filter: 'blur(48px)',
                  animation: 'orb-drift-3 16s ease-in-out infinite alternate',
                }}
              />
              <div className="absolute inset-0 rounded-full" style={{ border: '1px solid rgba(255,255,255,0.07)' }} />
              <div
                className="absolute inset-[14%] rounded-full"
                style={{ border: '1px solid rgba(124,58,237,0.25)', animation: 'spin-slow 30s linear infinite' }}
              />
              <div
                className="absolute inset-[30%] rounded-full"
                style={{ border: '1px solid rgba(0,255,136,0.28)', animation: 'spin-slow-reverse 20s linear infinite' }}
              />
              <div
                className="absolute inset-[45%] rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(0,255,136,0.5) 0%, rgba(0,255,136,0.1) 60%, transparent 100%)',
                  boxShadow: '0 0 30px rgba(0,255,136,0.35), 0 0 60px rgba(0,255,136,0.15)',
                  animation: 'pulse-dot 3.5s ease-in-out infinite',
                }}
              />
              <div
                className="absolute top-[8%] left-[50%] -translate-x-1/2 w-3 h-3 rounded-full"
                style={{ background: 'rgba(124,58,237,0.9)', boxShadow: '0 0 12px rgba(124,58,237,0.8)' }}
              />
              <div
                className="absolute bottom-[10%] right-[18%] w-2.5 h-2.5 rounded-full"
                style={{ background: 'rgba(6,182,212,0.95)', boxShadow: '0 0 12px rgba(6,182,212,0.85)' }}
              />
              <div
                className="absolute top-[50%] right-[4%] -translate-y-1/2 w-2 h-2 rounded-full"
                style={{ background: 'rgba(59,130,246,0.9)', boxShadow: '0 0 10px rgba(59,130,246,0.8)' }}
              />
            </div>
          </div>
        </div>

        {/* ── Scroll cue — bottom center, absolute ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none select-none"
        >
          <span className="font-mono text-[9px] tracking-[0.3em] text-white/30 uppercase">Scroll</span>
          <div
            className="w-px h-10"
            style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.3), transparent)' }}
          />
        </motion.div>
      </div>
    </section>
  )
}
