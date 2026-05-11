import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll } from 'framer-motion'

import { CustomCursor }       from './components/ui/CustomCursor'
import { LoadingScreen }      from './components/ui/LoadingScreen'
import { HeroSection }        from './components/sections/Hero'
import { AboutSection }       from './components/sections/About'
import { ExperienceSection }  from './components/sections/Experience'
import { TechStackSection }   from './components/sections/TechStack'
import { ProjectsSection }    from './components/sections/Projects'
import { ContactSection }     from './components/sections/Contact'

import { useLenis }           from './hooks/useLenis'
import { useHorizontalScroll } from './hooks/useHorizontalScroll'
import { SECTIONS }           from './utils/constants'
import './index.css'

// ─── Section progress thresholds ─────────────────────────────────────────────
// Derived from SECTIONS.width so they stay in sync automatically
const TOTAL_WIDTH = SECTIONS.reduce((acc, s) => acc + s.width, 0) // 1120 vw

const THRESHOLDS = (() => {
  let cum = 0
  return SECTIONS.map((s) => {
    const t = cum / TOTAL_WIDTH
    cum += s.width
    return t
  })
})()

// ─── Nav dots — all sections except Hero ─────────────────────────────────────
const NAV_SECTIONS = SECTIONS.filter((s) => s.id !== 'hero')

// ─── App ─────────────────────────────────────────────────────────────────────

export default function App() {
  const [loading,       setLoading]       = useState(true)
  const [activeIdx,     setActiveIdx]     = useState(0)
  const [navScrolled,   setNavScrolled]   = useState(false)

  // Lenis smooth scroll — drives GSAP ticker internally
  useLenis({ orientation: 'vertical' })

  // Horizontal scroll shell
  const { wrapperRef, containerRef } = useHorizontalScroll()

  // Framer Motion scroll progress (0 → 1)
  const { scrollYProgress } = useScroll()

  // ── Loading screen: hide after 1.5 s ──────────────────────────────────────
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1500)
    return () => clearTimeout(t)
  }, [])

  // ── Track active section & nav backdrop ───────────────────────────────────
  useEffect(() => {
    return scrollYProgress.on('change', (p) => {
      setNavScrolled(p > 0.005)

      // Find last threshold that's ≤ p
      let active = 0
      for (let i = THRESHOLDS.length - 1; i >= 0; i--) {
        if (p >= THRESHOLDS[i]) { active = i; break }
      }
      setActiveIdx(active)
    })
  }, [scrollYProgress])

  return (
    <>
      {/* ── Loading screen ──────────────────────────────────────────── */}
      <AnimatePresence>
        {loading && <LoadingScreen key="loader" />}
      </AnimatePresence>

      {/* ── Site content — fades in after loader exits ──────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.75, ease: 'easeOut' }}
      >
        {/* Scroll progress bar (top edge) */}
        <motion.div
          aria-hidden
          className="fixed top-0 left-0 right-0 z-[100] h-[2px] origin-left"
          style={{
            scaleX: scrollYProgress,
            background: 'linear-gradient(to right, #00ff88, #00cc6a)',
          }}
        />

        {/* Custom cursor */}
        <CustomCursor />

        {/* Film-grain noise overlay */}
        <div aria-hidden className="noise-overlay fixed inset-0 z-[60] pointer-events-none" />

        {/* ── Fixed navigation ────────────────────────────────────── */}
        <nav
          className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 transition-all duration-300"
          style={{
            backdropFilter: navScrolled ? 'blur(20px)' : 'none',
            borderBottom: navScrolled
              ? '1px solid rgba(255,255,255,0.06)'
              : '1px solid transparent',
            background: navScrolled ? 'rgba(5,5,8,0.7)' : 'transparent',
          }}
        >
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            className="font-display text-accent text-2xl tracking-widest select-none leading-none hover:opacity-80 transition-opacity duration-200"
          >
            RG
          </a>

          {/* Centre — current section name (hidden on small screens) */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2">
            <AnimatePresence mode="wait">
              <motion.span
                key={activeIdx}
                className="font-mono text-[10px] tracking-[0.3em] text-white/35 uppercase"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
              >
                {SECTIONS[activeIdx].label}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* Progress dots */}
          <div className="flex items-center gap-2" role="list" aria-label="Section navigation">
            {NAV_SECTIONS.map((section, i) => {
              // nav dots skip Hero (index 0), so dot index i maps to SECTIONS index i+1
              const sectionIdx = i + 1
              const isActive   = activeIdx === sectionIdx
              return (
                <motion.div
                  key={section.id}
                  role="listitem"
                  title={section.label}
                  className="rounded-full cursor-pointer"
                  animate={{
                    width:      isActive ? 20 : 6,
                    height:     6,
                    background: isActive ? '#00ff88' : 'rgba(255,255,255,0.22)',
                  }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                />
              )
            })}
          </div>
        </nav>

        {/* ── Horizontal scroll shell ─────────────────────────────── */}
        {/* wrapperRef: GSAP pins this and generates vertical scroll space */}
        <div ref={wrapperRef} className="h-screen overflow-hidden">
          {/* containerRef: GSAP translates this horizontally */}
          <div ref={containerRef} className="flex h-full will-change-transform">
            <HeroSection />
            <AboutSection />
            <ExperienceSection />
            <TechStackSection />
            <ProjectsSection />
            <ContactSection />
          </div>
        </div>
      </motion.div>
    </>
  )
}
