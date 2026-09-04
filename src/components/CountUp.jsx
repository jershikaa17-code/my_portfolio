import { useEffect, useRef } from 'react'
import { useInView, animate } from 'framer-motion'

export default function CountUp({ value, decimals = 2, duration = 1.4, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })

  useEffect(() => {
    if (!inView || !ref.current) return
    const controls = animate(0, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate(latest) {
        if (ref.current) {
          ref.current.textContent = latest.toFixed(decimals)
        }
      },
    })
    return () => controls.stop()
  }, [inView, value, duration, decimals])

  return (
    <span ref={ref} className={className}>
      {(0).toFixed(decimals)}
    </span>
  )
}
