import { CheckCircle2, MapPin, Award, Zap } from 'lucide-react'

const highlights = [
  'CA Licensed Electrical Contractor (C-10)',
  'Bonded & insured for your protection',
  'Residential & commercial expertise',
  'Clean, code-compliant work on every job',
  'Transparent pricing — no surprise charges',
  'Serving Hermosa Beach & the greater South Bay',
]

export default function About() {
  return (
    <section id="about" className="section-padding bg-[#080B14]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Visual */}
          <div className="relative">
            {/* Main card */}
            <div className="relative bg-[#0F1629] border border-amber-500/15 rounded-3xl p-8 overflow-hidden">
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-amber-500/5 rounded-full -translate-y-1/2 translate-x-1/2" />

              {/* License badge */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-amber-500 rounded-2xl flex items-center justify-center flex-shrink-0 amber-glow">
                  <Award className="w-8 h-8 text-[#080B14]" strokeWidth={2} />
                </div>
                <div>
                  <p className="text-amber-400 font-bold text-lg">Licensed Electrician</p>
                  <p className="text-slate-400 text-sm">CA License #1132988 · Active</p>
                </div>
              </div>

              <div className="h-px bg-white/5 mb-8" />

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6">
                <StatCard value="C-10" label="CA Electrical License" />
                <StatCard value="92" label="BuildZoom Score" />
                <StatCard value="$25K" label="Bond Protection" />
                <StatCard value="24/7" label="Emergency Available" />
              </div>

              <div className="h-px bg-white/5 my-8" />

              {/* Location */}
              <div className="flex items-center gap-3 text-slate-400">
                <MapPin className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span className="text-sm">
                  Based in Hermosa Beach, CA · Serving the South Bay
                </span>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-5 -left-5 bg-amber-500 text-[#080B14] font-black text-sm px-5 py-3 rounded-xl shadow-xl shadow-amber-500/20 rotate-[-2deg]">
              Top 32% of CA Contractors
            </div>
          </div>

          {/* Right: Text */}
          <div>
            <span className="inline-block text-amber-500 text-sm font-semibold uppercase tracking-widest mb-3">
              About Us
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
              Local Expertise,
              <br />
              <span className="gradient-text">Professional Results</span>
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              Quesada Electric is a locally owned and operated electrical contracting
              business based in Hermosa Beach, CA. Founded and led by licensed
              electrician Samir Quesada Castillo, we bring hands-on expertise and a
              commitment to quality to every project we take on.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              Whether you're upgrading an aging electrical panel, installing an EV
              charger, running underground conduit, or tackling a full commercial
              fit-out, we approach every job with the same attention to detail and
              respect for your property. Our work is always code-compliant and built to
              last.
            </p>

            {/* Highlights */}
            <ul className="space-y-3 mb-10">
              {highlights.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">{item}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href="tel:8622027122"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-[#080B14] font-bold px-7 py-3.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-amber-500/20"
            >
              <Zap className="w-4 h-4" />
              Talk to Samir Today
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-[#080B14] rounded-xl p-4 border border-white/5">
      <p className="text-amber-400 font-black text-2xl mb-1">{value}</p>
      <p className="text-slate-500 text-xs leading-snug">{label}</p>
    </div>
  )
}
