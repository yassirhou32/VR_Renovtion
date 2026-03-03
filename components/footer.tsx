import Image from 'next/image'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-slate-700 via-slate-800 to-slate-950 text-white pt-16 pb-10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-10">
          {/* Column 1: Logo & About */}
          <div className="flex flex-col gap-4">
            <div className="inline-flex items-center justify-center rounded-2xl bg-white/6 border border-slate-600/60 px-5 py-3 shadow-[0_14px_40px_rgba(15,23,42,0.6)]">
              <Image
                src="/images/logo.png"
                alt="VR Harmonie"
                width={120}
                height={120}
               
                priority
              />
            </div>
            <p className="text-slate-300 text-sm leading-relaxed max-w-xs">
              VR Harmonie : Artisans de père en fils depuis 25 ans. Expertise en toiture, façades et patrimoine.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-xs uppercase tracking-[0.22em]">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-slate-400 hover:text-white transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-400 hover:text-white transition-colors">
                  Nos Services
                </Link>
              </li>
              <li>
                <Link href="/realisations" className="text-slate-400 hover:text-white transition-colors">
                  Nos Réalisations
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="text-slate-400 hover:text-white transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-xs uppercase tracking-[0.22em]">
              Services
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="text-slate-400 hover:text-white transition-colors">
                  Toiture
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-400 hover:text-white transition-colors">
                  Façades
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-400 hover:text-white transition-colors">
                  Patrimoine
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-white transition-colors">
                  Demander un devis
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-xs uppercase tracking-[0.22em]">
              Contact
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="text-slate-300">
                <strong className="text-white">Téléphone :</strong><br />
                <a href="tel:+33788557295" className="hover:text-white transition-colors">
                  07&nbsp;88&nbsp;55&nbsp;72&nbsp;95
                </a>
              </li>
              <li className="text-slate-300">
                <strong className="text-white">Zone d'intervention :</strong><br />
                Indre-et-Loire et Loir-et-Cher
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8">
          {/* Copyright */}
          <p className="text-center text-slate-500 text-xs md:text-sm">
            &copy; {new Date().getFullYear()} VR Harmonie. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}
