import { motion } from 'framer-motion'
import { fadeUp } from '../animations/variants'

export default function AnimatedCard({ children, className = '', custom = 0, hover = true, as = 'div' }) {
  const Component = motion[as] ?? motion.div

  return (
    <Component
      variants={fadeUp}
      custom={custom}
      whileHover={hover ? { y: -6 } : undefined}
      className={`rounded-2xl border border-border bg-white shadow-card transition-shadow duration-300 hover:shadow-card-hover ${className}`}
    >
      {children}
    </Component>
  )
}
