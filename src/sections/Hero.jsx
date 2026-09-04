import { motion } from 'framer-motion'
import { personal, heroStatus } from '../data/portfolioData'
import Button from '../components/Button'
import SocialLinks from '../components/SocialLinks'

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.16, delayChildren: 0.2 },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-hero-gradient pt-28 pb-20"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="pointer-events-none absolute inset-0 bg-grid animate-grid-pan"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-blue-accent/25 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-blue-royal/25 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-6 text-center lg:items-start lg:text-left"
        >
          <motion.span
            variants={item}
            className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium text-white/85 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulse-soft rounded-full bg-blue-light" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-light" />
            </span>
            {heroStatus}
          </motion.span>

          <motion.h1
            variants={item}
            className="font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl"
          >
            {personal.fullGreeting}
          </motion.h1>

          <motion.div variants={item} className="flex flex-col gap-1">
            {personal.roles.map((role, index) => (
              <p
                key={role}
                className={`font-display text-lg font-semibold sm:text-xl ${
                  index === 0 ? 'text-blue-light' : 'text-white/80'
                }`}
              >
                {role}
              </p>
            ))}
          </motion.div>

          <motion.p variants={item} className="max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            {personal.heroSupportingText}
          </motion.p>

          <motion.div variants={item} className="flex flex-col gap-4 sm:flex-row">
            <Button href="#projects" variant="primary">
              View My Work
            </Button>
            <Button href="#contact" variant="secondary">
              Contact Me
            </Button>
          </motion.div>

          <motion.div variants={item}>
            <SocialLinks variant="dark" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto h-56 w-56 sm:h-72 sm:w-72 lg:h-[22rem] lg:w-[22rem]"
        >
          <div
            className="absolute inset-0 rounded-full bg-blue-light/20 blur-2xl"
            aria-hidden="true"
          />
          <motion.span
            className="absolute -top-3 left-6 h-4 w-4 rounded-full bg-blue-light/70 animate-float"
            aria-hidden="true"
          />
          <motion.span
            className="absolute bottom-8 -right-2 h-6 w-6 rounded-full border-2 border-blue-light/70 animate-float-delayed"
            aria-hidden="true"
          />
          <motion.span
            className="absolute top-10 -right-6 h-3 w-3 rounded-full bg-white/60 animate-float"
            aria-hidden="true"
          />
          <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-blue-light/60 shadow-glow">
            <img
              src={personal.photo}
              alt="Portrait of Jershika, Computer Science student and Frontend Developer Intern"
              className="h-full w-full object-cover object-[50%_8%]"
              width={1087}
              height={1447}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
