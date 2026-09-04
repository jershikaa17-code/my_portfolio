import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { personal } from '../data/portfolioData'

export default function SocialLinks({ variant = 'dark', className = '' }) {
  const base =
    'flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2'
  const style =
    variant === 'dark'
      ? 'border-white/20 text-white hover:border-blue-light hover:text-blue-light hover:-translate-y-1'
      : 'border-border text-navy hover:border-blue-accent hover:text-blue-accent hover:-translate-y-1'

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <a
        href={personal.linkedinUrl}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Jershika's LinkedIn profile"
        className={`${base} ${style}`}
      >
        <FaLinkedinIn size={18} />
      </a>
      <a
        href={personal.githubUrl}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Jershika's GitHub profile"
        className={`${base} ${style}`}
      >
        <FaGithub size={18} />
      </a>
    </div>
  )
}
