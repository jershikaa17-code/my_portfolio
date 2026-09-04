import { motion } from 'framer-motion'
import { FaBolt, FaPuzzlePiece, FaComments } from 'react-icons/fa'
import { strengths } from '../data/portfolioData'
import SectionTitle from '../components/SectionTitle'
import { fadeUp, staggerContainer, viewportOnce } from '../animations/variants'

const icons = [FaBolt, FaPuzzlePiece, FaComments]

export default function Strengths() {
  return (
    <section id="strengths" className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionTitle eyebrow="07 · Strengths" title="Strengths" />

        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3"
        >
          {strengths.map((strength, index) => {
            const Icon = icons[index % icons.length]
            return (
              <motion.div
                key={strength.title}
                variants={fadeUp}
                custom={index * 0.08}
                whileHover={{ y: -5 }}
                className="rounded-2xl border border-border bg-surface p-7 shadow-card transition-shadow duration-300 hover:shadow-card-hover"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-accent/10 text-blue-accent">
                  <Icon size={20} />
                </div>
                <h3 className="mt-5 font-display text-base font-bold text-navy">{strength.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{strength.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
