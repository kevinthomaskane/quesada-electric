import { Zap, Phone, MapPin, Mail, ExternalLink } from 'lucide-react'

const services = [
  'Panel Upgrades',
  'EV Charger Installation',
  'Residential Wiring',
  'Commercial Electrical',
  'Underground Conduit',
  'Emergency Service',
]

const areas = [
  'Hermosa Beach',
  'Manhattan Beach',
  'Redondo Beach',
  'Torrance',
  'El Segundo',
  'Lawndale',
]

export default function Footer() {
  return (
    <footer className="bg-[#05070F] border-t border-white/5">
      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-amber-500/10 via-amber-500/20 to-amber-500/10 border-b border-amber-500/15 py-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <p className="text-white font-bold text-xl">Ready to get started?</p>
            <p className="text-slate-400 text-sm mt-1">
              Call now for a free estimate — no obligation, just honest advice.
            </p>
          </div>
          <a
            href="tel:8622027122"
            className="flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-[#080B14] font-black text-lg px-8 py-3.5 rounded-xl transition-all hover:shadow-xl hover:shadow-amber-500/25 whitespace-nowrap"
          >
            <Phone className="w-5 h-5" />
            (862) 202-7122
          </a>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 bg-amber-500 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-[#080B14]" strokeWidth={2.5} />
              </div>
              <div className="leading-none">
                <p className="text-white font-bold text-sm tracking-widest uppercase">Quesada</p>
                <p className="text-amber-500 font-semibold text-xs tracking-widest uppercase">Electric</p>
              </div>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Licensed electrical contractor serving Hermosa Beach and the South Bay
              since day one. Quality work, honest pricing.
            </p>
            <div className="space-y-2.5">
              <a
                href="tel:8622027122"
                className="flex items-center gap-2 text-slate-400 hover:text-amber-400 text-sm transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-500/60" />
                (862) 202-7122
              </a>
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <MapPin className="w-4 h-4 text-amber-500/60 flex-shrink-0" />
                Hermosa Beach, CA 90254
              </div>
              <a
                href="mailto:info@quesadaelectric.com"
                className="flex items-center gap-2 text-slate-400 hover:text-amber-400 text-sm transition-colors"
              >
                <Mail className="w-4 h-4 text-amber-500/60" />
                info@quesadaelectric.com
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">
              Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-slate-500 hover:text-amber-400 text-sm transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-amber-500/50 group-hover:bg-amber-400 transition-colors" />
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">
              Service Areas
            </h4>
            <ul className="space-y-2.5">
              {areas.map((a) => (
                <li key={a}>
                  <span className="text-slate-500 text-sm flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-amber-500/30" />
                    {a}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* License & Links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">
              License & Info
            </h4>
            <div className="bg-amber-500/5 border border-amber-500/15 rounded-xl p-4 mb-5">
              <p className="text-amber-400 font-bold text-xs uppercase tracking-wide mb-2">
                CA Contractor License
              </p>
              <p className="text-white font-bold">#1132988</p>
              <p className="text-slate-500 text-xs mt-1">C-10 Electrical · Active</p>
            </div>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://www.buildzoom.com/contractor/quesada-electric"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-slate-500 hover:text-amber-400 text-sm transition-colors"
                >
                  BuildZoom Profile
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.yelp.com/biz/quesada-electric-hermosa-beach"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-slate-500 hover:text-amber-400 text-sm transition-colors"
                >
                  Yelp Listing
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.cslb.ca.gov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-slate-500 hover:text-amber-400 text-sm transition-colors"
                >
                  Verify License (CSLB)
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center">
          <p className="text-slate-600 text-xs">
            © {new Date().getFullYear()} Quesada Electric. All rights reserved.
          </p>
          <p className="text-slate-700 text-xs">
            Licensed Electrical Contractor · Hermosa Beach, CA · CA License #1132988
          </p>
        </div>
      </div>
    </footer>
  )
}
