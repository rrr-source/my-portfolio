import { motion } from 'framer-motion'

export function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[300] bg-background flex flex-col items-center justify-center gap-6"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.55, ease: 'easeInOut' } }}
    >
      {/* Monogram */}
      <motion.span
        className="font-display text-accent select-none leading-none"
        style={{ fontSize: '4.5rem', letterSpacing: '0.15em' }}
        initial={{ opacity: 0, scale: 0.65 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        RG
      </motion.span>

      {/* Thin progress indicator */}
      <motion.div
        className="h-px bg-accent/40 rounded-full"
        style={{ width: 48 }}
        initial={{ scaleX: 0, originX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.3, delay: 0.2, ease: 'easeInOut' }}
      />
    </motion.div>
  )
}
