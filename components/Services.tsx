import {
  Zap,
  Car,
  Home,
  Building2,
  Shovel,
  AlertTriangle,
} from 'lucide-react'

const services = [
  {
    icon: <Zap className="w-7 h-7" />,
    title: 'Panel Upgrades',
    description:
      'Service panel replacements and upgrades to meet modern power demands. From 100A to 400A residential and commercial upgrades, done right.',
    tags: ['200A Upgrade', '400A Service', 'Main Panel'],
  },
  {
    icon: <Car className="w-7 h-7" />,
    title: 'EV Charger Installation',
    description:
      'Level 1 & Level 2 EV charging station installation for homes and businesses. Future-proof your property and charge your vehicle overnight.',
    tags: ['Level 2', 'Home Charging', 'Commercial EV'],
  },
  {
    icon: <Home className="w-7 h-7" />,
    title: 'Residential Wiring',
    description:
      'Complete home electrical solutions — new construction, rewiring, outlet installation, lighting, and code compliance upgrades.',
    tags: ['New Construction', 'Rewiring', 'Outlets & Lighting'],
  },
  {
    icon: <Building2 className="w-7 h-7" />,
    title: 'Commercial Electrical',
    description:
      'Electrical services for businesses, retail spaces, multi-unit properties, and gyms. We handle complex 3-phase systems and commercial loads.',
    tags: ['3-Phase Power', 'Multi-Unit', 'Commercial'],
  },
  {
    icon: <Shovel className="w-7 h-7" />,
    title: 'Underground Conduit',
    description:
      'Trenching and underground electrical conduit runs for service upgrades, sub-panels, and outdoor electrical installations.',
    tags: ['Trenching', 'Conduit Runs', 'Service Upgrade'],
  },
  {
    icon: <AlertTriangle className="w-7 h-7" />,
    title: '24/7 Emergency Service',
    description:
      'Electrical emergencies — available around the clock for urgent electrical issues that need immediate attention.',
    tags: ['24/7 Response', 'Emergency Repair', 'Same Day'],
  },
]

export default function Services() {
  return (
    <section id="services" className="section-padding bg-[#080B14]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-amber-500 text-sm font-semibold uppercase tracking-widest mb-3">
            What We Do
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Electrical Services
          </h2>
          <p className="max-w-xl mx-auto text-slate-400 text-lg leading-relaxed">
            From simple repairs to complex commercial installations, we bring
            expertise and precision to every job.
          </p>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-6 rounded-full" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="group relative bg-[#0F1629] border border-white/5 rounded-2xl p-7 card-hover cursor-default overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

              {/* Top amber line */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-14 h-14 bg-amber-500/10 border border-amber-500/20 text-amber-400 rounded-xl mb-5 group-hover:bg-amber-500/20 group-hover:border-amber-500/40 transition-all duration-300">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-white font-bold text-xl mb-3 group-hover:text-amber-100 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="text-xs font-medium text-amber-500/80 bg-amber-500/5 border border-amber-500/10 px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <p className="text-slate-400 mb-4">
            Not sure what you need? Give us a call and we'll help.
          </p>
          <a
            href="tel:8622027122"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-[#080B14] font-bold px-8 py-3.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-amber-500/20"
          >
            <Zap className="w-4 h-4" />
            Call for a Free Estimate
          </a>
        </div>
      </div>
    </section>
  )
}
