import { motion } from 'framer-motion'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-semibold tracking-wide transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2'

const variants = {
  primary:
    'bg-blue-accent text-white shadow-glow-sm hover:bg-blue-royal',
  secondary:
    'border border-white/25 text-white hover:border-blue-light hover:text-blue-light',
  outline:
    'border border-border text-navy hover:border-blue-accent hover:text-blue-accent',
}

export default function Button({ href, onClick, children, variant = 'primary', className = '', ...rest }) {
  const classes = `${base} ${variants[variant]} ${className}`
  const Component = href ? motion.a : motion.button

  return (
    <Component
      href={href}
      onClick={onClick}
      className={classes}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      {...rest}
    >
      {children}
    </Component>
  )
}
