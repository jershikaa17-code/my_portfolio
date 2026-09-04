import { motion } from 'framer-motion'
import { education } from '../data/portfolioData'
import SectionTitle from '../components/SectionTitle'
import { fadeUp, scaleIn, viewportOnce } from '../animations/variants'

export default function Education() {
  return (
    <section id="education" className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <SectionTitle eyebrow="03 · Education" title="Education" />

        <div className="relative mt-16">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.9, ease: 'easeInOut' }}
            style={{ transformOrigin: 'top' }}
            className="absolute left-[11px] top-2 bottom-2 w-px bg-border sm:left-[15px]"
            aria-hidden="true"
          />

          <ul className="flex flex-col gap-12">
            {education.map((item, index) => (
              <li key={item.degree} className="relative pl-10 sm:pl-12">
                <motion.span
                  variants={scaleIn}
                  custom={index * 0.15}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                  className="absolute left-0 top-1.5 flex h-6 w-6 items-center justify-center rounded-full border-2 border-blue-accent bg-white shadow-glow-sm sm:h-8 sm:w-8"
                >
                  <span className="h-2.5 w-2.5 rounded-full bg-blue-accent" />
                </motion.span>

                <motion.div
                  variants={fadeUp}
                  custom={index * 0.15 + 0.1}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                  className="rounded-2xl border border-border bg-surface p-6 shadow-card transition-shadow duration-300 hover:shadow-card-hover sm:p-7"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-lg font-bold text-navy sm:text-xl">
                      {item.degree}
                    </h3>
                    {item.meta && (
                      <span className="text-sm font-medium text-blue-accent">{item.meta}</span>
                    )}
                  </div>
                  <p className="mt-1 text-sm font-medium text-ink-muted">
                    {item.institution} · {item.location}
                  </p>
                  {item.result && (
                    <p className="mt-3 text-sm font-semibold text-navy">{item.result}</p>
                  )}
                  {item.detail && (
                    <div className="mt-4 flex flex-wrap gap-3">
                      {item.detail.map((d) => (
                        <span
                          key={d.label}
                          className="rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold text-blue-royal ring-1 ring-border"
                        >
                          {d.label}: {d.value}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
