import { motion } from 'framer-motion'
import { HiOutlineTranslate } from 'react-icons/hi'
import { languages } from '../data/portfolioData'
import SectionTitle from '../components/SectionTitle'
import { fadeUp, staggerContainer, viewportOnce } from '../animations/variants'

export default function Languages() {
  return (
    <section id="languages" className="bg-surface py-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-16 px-5 text-center sm:px-8">
        <SectionTitle title="Languages Known" />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          {languages.map((language) => (
            <motion.span
              key={language}
              variants={fadeUp}
              className="flex items-center gap-2 rounded-full border border-border bg-white px-5 py-2.5 text-sm font-semibold text-navy shadow-card"
            >
              <HiOutlineTranslate className="text-blue-accent" size={18} />
              {language}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
