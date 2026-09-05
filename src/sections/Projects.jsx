import { motion } from 'framer-motion'
import { FaAndroid, FaLaptopCode } from 'react-icons/fa'
import { projects } from '../data/portfolioData'
import SectionTitle from '../components/SectionTitle'
import Button from '../components/Button'
import { fadeUp, staggerContainer, viewportOnce } from '../animations/variants'

export default function Projects() {
  return (
    <section id="projects" className="bg-surface py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionTitle
          title="Projects"
          subtitle="Two Android applications and two web applications built for a Montessori school management system, covering practical school workflows for staff and students."
        />

        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2"
        >
          {projects.map((project, index) => {
            const isMobile = project.platform === 'Android APK'
            const PlatformIcon = isMobile ? FaAndroid : FaLaptopCode

            return (
              <motion.article
                key={project.title}
                variants={fadeUp}
                custom={index * 0.08}
                whileHover={{ y: -6 }}
                className="flex flex-col overflow-hidden rounded-3xl border border-border bg-white shadow-card transition-shadow duration-300 hover:shadow-card-hover"
              >
                <div className="relative flex h-44 items-center justify-center overflow-hidden bg-hero-gradient">
                  <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" aria-hidden="true" />
                  <PlatformIcon className="relative text-white/90" size={56} aria-hidden="true" />
                  <span className="absolute right-4 top-4 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                    {project.platform}
                  </span>
                </div>

                <div className="flex flex-1 flex-col gap-3 p-7">
                  <p className="text-xs font-bold uppercase tracking-wide text-blue-accent">
                    {project.subtitle}
                  </p>
                  <h3 className="font-display text-xl font-bold text-navy">{project.title}</h3>
                  <p className="flex-1 text-sm leading-relaxed text-ink-muted">
                    {project.description}
                  </p>

                  {(project.link || project.repo) && (
                    <div className="mt-2 flex flex-wrap gap-3">
                      {project.link && (
                        <Button
                          href={project.link}
                          variant="outline"
                          className="px-5 py-2 text-xs"
                          {...(isMobile
                            ? { download: true }
                            : { target: '_blank', rel: 'noopener noreferrer' })}
                        >
                          {isMobile ? 'Download APK' : 'View Project'}
                        </Button>
                      )}
                      {project.repo && (
                        <Button
                          href={project.repo}
                          variant="outline"
                          className="px-5 py-2 text-xs"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          GitHub
                        </Button>
                      )}
                    </div>
                  )}
                </div>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
