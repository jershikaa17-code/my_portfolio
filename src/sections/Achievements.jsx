import { motion } from 'framer-motion'
import { FaTrophy, FaMedal, FaGraduationCap } from 'react-icons/fa'
import { achievements } from '../data/portfolioData'
import SectionTitle from '../components/SectionTitle'
import CountUp from '../components/CountUp'
import { scaleIn, staggerContainer, viewportOnce } from '../animations/variants'

const iconMap = {
  trophy: FaTrophy,
  medal: FaMedal,
  academic: FaGraduationCap,
}

export default function Achievements() {
  return (
    <section id="achievements" className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionTitle eyebrow="05 · Achievements" title="Achievements" />

        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3"
        >
          {achievements.map((achievement, index) => {
            const Icon = iconMap[achievement.icon] ?? FaTrophy
            return (
              <motion.div
                key={achievement.title}
                variants={scaleIn}
                custom={index * 0.1}
                whileHover={{ y: -6 }}
                className="relative overflow-hidden rounded-2xl border border-border bg-surface p-7 text-center shadow-card transition-shadow duration-300 hover:shadow-card-hover"
              >
                <div
                  className="pointer-events-none absolute -top-10 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-blue-accent/15 blur-2xl"
                  aria-hidden="true"
                />
                <motion.div
                  whileHover={{ scale: 1.12, rotate: -6 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                  className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-hero-gradient text-white shadow-glow-sm"
                >
                  <Icon size={22} />
                </motion.div>

                <h3 className="relative mt-5 font-display text-base font-bold text-navy">
                  {achievement.title}
                </h3>

                {achievement.cgpa ? (
                  <p className="relative mt-2 font-display text-2xl font-extrabold text-blue-accent">
                    <CountUp value={achievement.cgpa} />
                    <span className="ml-1 text-sm font-semibold text-ink-muted">
                      {achievement.detail}
                    </span>
                  </p>
                ) : (
                  <p className="relative mt-2 text-sm leading-relaxed text-ink-muted">
                    {achievement.detail}
                  </p>
                )}
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
