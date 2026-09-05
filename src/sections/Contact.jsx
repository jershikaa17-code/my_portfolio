import { motion } from 'framer-motion'
import { HiOutlineMail } from 'react-icons/hi'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { personal } from '../data/portfolioData'
import SectionTitle from '../components/SectionTitle'
import { fadeUp, staggerContainer, viewportOnce } from '../animations/variants'

const contactItems = [
  {
    label: 'Email',
    value: personal.email,
    href: personal.emailHref,
    icon: HiOutlineMail,
  },
  {
    label: 'LinkedIn',
    value: personal.linkedinLabel,
    href: personal.linkedinUrl,
    icon: FaLinkedinIn,
    external: true,
  },
  {
    label: 'GitHub',
    value: personal.githubLabel,
    href: personal.githubUrl,
    icon: FaGithub,
    external: true,
  },
]

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-navy-gradient py-24 sm:py-28">
      <div
        className="pointer-events-none absolute inset-0 bg-grid opacity-40"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-accent/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-4xl px-5 sm:px-8">
        <SectionTitle
          eyebrow="09 · Contact"
          title="Let's Build Something Great"
          subtitle="Interested in connecting, discussing opportunities, or talking about software development? I'd love to hear from you."
          light
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto mt-10 flex w-fit flex-col items-center gap-1 rounded-2xl border border-white/12 bg-white/5 px-6 py-4 text-center backdrop-blur-sm"
        >
          <span className="text-sm font-semibold text-blue-light sm:text-base">{personal.currentRole}</span>
          <span className="text-xs text-white/60 sm:text-sm">{personal.currentCompany}</span>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3"
        >
          {contactItems.map((item) => (
            <motion.a
              key={item.label}
              variants={fadeUp}
              href={item.href}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noreferrer noopener' : undefined}
              whileHover={{ y: -4 }}
              className="flex items-center gap-4 rounded-2xl border border-white/12 bg-white/5 p-5 backdrop-blur-sm transition-colors duration-200 hover:border-blue-light/50 hover:bg-white/10"
            >
              <span className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-blue-accent/20 text-blue-light">
                <item.icon size={20} />
              </span>
              <span className="min-w-0">
                <span className="block text-xs font-semibold uppercase tracking-wide text-white/50">
                  {item.label}
                </span>
                <span className="block truncate text-sm font-semibold text-white sm:text-base">
                  {item.value}
                </span>
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
