import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '../animations/variants'

export default function SectionTitle({ eyebrow, title, subtitle, align = 'center', light = false }) {
  const alignClass = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'

  return (
    <motion.div
      className={`flex flex-col gap-4 max-w-2xl ${alignClass}`}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {eyebrow && (
        <span
          className={`text-xs font-bold uppercase tracking-[0.2em] ${
            light ? 'text-blue-light' : 'text-blue-accent'
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display text-3xl sm:text-4xl font-extrabold tracking-tight ${
          light ? 'text-white' : 'text-navy'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base sm:text-lg ${light ? 'text-white/70' : 'text-ink-muted'}`}>{subtitle}</p>
      )}
    </motion.div>
  )
}
