import { motion } from 'framer-motion'
import { personal, aboutStats } from '../data/portfolioData'
import SectionTitle from '../components/SectionTitle'
import { fadeUp, staggerContainer, viewportOnce } from '../animations/variants'

export default function About() {
  return (
    <section id="about" className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionTitle title="About Me" />

        <div className="mt-14 grid grid-cols-1 gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="text-lg leading-relaxed text-ink-muted sm:text-xl"
          >
            {personal.aboutText}
          </motion.p>

          <motion.div
            variants={staggerContainer(0.12)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-2 gap-5"
          >
            {aboutStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                custom={index * 0.05}
                className="rounded-2xl border border-border bg-surface px-6 py-7 text-center shadow-card transition-transform duration-300 hover:-translate-y-1 hover:shadow-card-hover"
              >
                <p className="font-display text-3xl font-extrabold text-blue-accent sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm font-medium text-ink-muted">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
