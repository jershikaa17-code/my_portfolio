import SocialLinks from '../components/SocialLinks'
import { personal } from '../data/portfolioData'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy-deep py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 text-center sm:flex-row sm:justify-between sm:text-left sm:px-8">
        <div>
          <p className="font-display text-base font-extrabold tracking-[0.15em] text-white">
            JERSHIKA
          </p>
          <p className="mt-1 text-xs text-white/50">
            &copy; {year} {personal.name}. All rights reserved.
          </p>
        </div>

        <SocialLinks variant="dark" />
      </div>
    </footer>
  )
}
