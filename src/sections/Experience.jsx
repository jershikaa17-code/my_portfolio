import { motion } from 'framer-motion'
import { personal, experience } from '../data/portfolioData'
import SectionTitle from '../components/SectionTitle'
import { fadeUp, staggerContainer, viewportOnce } from '../animations/variants'

export default function Experience() {
  return (
    <section id="experience" className="bg-surface py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionTitle title="Current Internship" />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative mx-auto mt-14 max-w-3xl overflow-hidden rounded-3xl bg-hero-gradient p-8 shadow-glow sm:p-10"
        >
          <div
            className="pointer-events-none absolute -top-16 -right-16 h-56 w-56 rounded-full bg-blue-light/20 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative flex flex-col gap-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="mb-2 font-display text-lg font-bold text-blue-light sm:text-xl">
                  {personal.primaryRole}
                </p>
                <p className="text-lg font-semibold text-white sm:text-xl">{experience.role}</p>
                <p className="mt-1 text-sm font-medium text-white/60">{experience.company}</p>
              </div>

              <span className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold text-white">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-pulse-soft rounded-full bg-emerald-400" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                {experience.status}
              </span>
            </div>

            <motion.div
              variants={staggerContainer(0.08)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="flex flex-wrap gap-3"
            >
              {experience.focus.map((item, index) => (
                <motion.span
                  key={item}
                  variants={fadeUp}
                  custom={index * 0.05}
                  className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/85"
                >
                  {item}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
