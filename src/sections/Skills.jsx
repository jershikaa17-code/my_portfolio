import { motion } from 'framer-motion'
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaWindows,
  FaJava,
  FaCode,
} from 'react-icons/fa'
import { SiCplusplus } from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'
import { HiOutlineCode, HiOutlineColorSwatch } from 'react-icons/hi'
import { skillGroups } from '../data/portfolioData'
import SectionTitle from '../components/SectionTitle'
import { fadeUp, staggerContainer, viewportOnce } from '../animations/variants'

const iconMap = {
  C: FaCode,
  'C++': SiCplusplus,
  Java: FaJava,
  HTML: FaHtml5,
  CSS: FaCss3Alt,
  React: FaReact,
  'Frontend Development': HiOutlineCode,
  'UI/UX': HiOutlineColorSwatch,
  'Visual Studio Code': VscVscode,
  Git: FaGitAlt,
  GitHub: FaGithub,
  Windows: FaWindows,
}

export default function Skills() {
  return (
    <section id="skills" className="bg-surface py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionTitle title="Technical Skills" />

        <div className="mt-14 flex flex-col gap-12">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              variants={fadeUp}
              custom={groupIndex * 0.08}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <div className="mb-5 flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-display text-lg font-bold text-navy">{group.category}</h3>
                <span className="rounded-full bg-blue-accent/10 px-3 py-1 text-xs font-semibold text-blue-accent">
                  {group.status}
                </span>
              </div>

              <motion.div
                variants={staggerContainer(0.06)}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                className="flex flex-wrap gap-4"
              >
                {group.skills.map((skill, index) => {
                  const Icon = iconMap[skill] ?? FaCode
                  return (
                    <motion.div
                      key={skill}
                      variants={fadeUp}
                      custom={index * 0.05}
                      whileHover={{ y: -5 }}
                      className="flex items-center gap-3 rounded-xl border border-border bg-white px-5 py-4 shadow-card transition-shadow duration-300 hover:shadow-card-hover"
                    >
                      <Icon className="text-2xl text-blue-accent" aria-hidden="true" />
                      <span className="text-sm font-semibold text-navy">{skill}</span>
                    </motion.div>
                  )
                })}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
