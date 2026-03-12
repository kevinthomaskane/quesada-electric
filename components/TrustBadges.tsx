import { ShieldCheck, Clock, MapPin, FileCheck, ThumbsUp, DollarSign } from 'lucide-react'

const badges = [
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: 'Licensed & Bonded',
    description:
      'Fully licensed by the California Contractors State License Board (C-10 Electrical). Bonded for your financial protection.',
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: '24/7 Emergency',
    description:
      'Electrical emergencies do not follow a schedule. Available around the clock for urgent situations that cannot wait.',
  },
  {
    icon: <MapPin className="w-8 h-8" />,
    title: 'South Bay Local',
    description:
      'Based in Hermosa Beach, we serve Manhattan Beach, Redondo Beach, Torrance, El Segundo, and the broader South Bay area.',
  },
  {
    icon: <DollarSign className="w-8 h-8" />,
    title: 'Free Estimates',
    description:
      'No commitment required. Call or message us to get a clear, upfront estimate for your electrical project.',
  },
  {
    icon: <FileCheck className="w-8 h-8" />,
    title: 'Code Compliant',
    description:
      'All work meets California electrical code requirements. We pull permits when required and leave you with documentation.',
  },
  {
    icon: <ThumbsUp className="w-8 h-8" />,
    title: 'Quality Guaranteed',
    description:
      'We stand behind our work. If something is not right, we make it right — no hassle, no excuses.',
  },
]

export default function TrustBadges() {
  return (
    <section className="section-padding bg-[#0F1629] border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-amber-500 text-sm font-semibold uppercase tracking-widest mb-3">
            Why Choose Us
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            The Quesada Difference
          </h2>
          <p className="max-w-xl mx-auto text-slate-400 text-lg">
            When you hire Quesada Electric, you're getting more than a contractor —
            you're getting a partner who takes your project seriously.
          </p>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-6 rounded-full" />
        </div>

        {/* Badges Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {badges.map((badge, i) => (
            <div
              key={i}
              className="group flex gap-5 p-6 bg-[#080B14] border border-white/5 rounded-2xl card-hover"
            >
              <div className="flex-shrink-0 text-amber-400 mt-0.5 group-hover:text-amber-300 transition-colors">
                {badge.icon}
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-2">{badge.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {badge.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Service Area Banner */}
        <div className="mt-14 bg-gradient-to-r from-amber-500/10 via-amber-500/15 to-amber-500/10 border border-amber-500/20 rounded-2xl p-7 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <MapPin className="w-5 h-5 text-amber-400" />
            <h3 className="text-white font-bold text-xl">Service Area</h3>
          </div>
          <p className="text-slate-300 mb-4">
            Proudly serving the South Bay and surrounding communities
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Hermosa Beach',
              'Manhattan Beach',
              'Redondo Beach',
              'Torrance',
              'El Segundo',
              'Lawndale',
              'Gardena',
              'South Bay',
            ].map((city) => (
              <span
                key={city}
                className="bg-amber-500/10 text-amber-400 text-sm font-medium px-3 py-1.5 rounded-full border border-amber-500/15"
              >
                {city}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
