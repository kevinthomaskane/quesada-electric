import Image from 'next/image'
import { Phone, ChevronDown, ShieldCheck, Clock, Star } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#080B14] hero-grid"
    >
      {/* Background gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-3xl" />
      </div>

      {/* Diagonal amber accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-8">
              <ShieldCheck className="w-3.5 h-3.5" />
              CA Licensed & Bonded · License #1132988
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-none mb-6">
              <span className="text-white block">Expert Electrical</span>
              <span className="gradient-text block">Services</span>
              <span className="text-white/80 text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-bold block mt-2">
                in the South Bay
              </span>
            </h1>

            {/* Subheadline */}
            <p className="max-w-xl mx-auto lg:mx-0 text-slate-300 text-lg sm:text-xl leading-relaxed mb-10">
              From panel upgrades to EV charger installation, Quesada Electric delivers
              safe, reliable electrical work for homes and businesses across Hermosa Beach
              and the South Bay.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mb-12">
              <a
                href="tel:8622027122"
                className="group flex items-center gap-3 bg-amber-500 hover:bg-amber-400 text-[#080B14] font-bold text-lg px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-2xl hover:shadow-amber-500/30 hover:-translate-y-0.5 w-full sm:w-auto justify-center"
              >
                <Phone className="w-5 h-5 group-hover:animate-pulse" />
                Call (862) 202-7122
              </a>
              <a
                href="#gallery"
                className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-amber-500/30 text-white font-bold text-lg px-8 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 w-full sm:w-auto justify-center"
              >
                View Our Work
              </a>
            </div>

            {/* Stats Row */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 sm:gap-8">
              <Stat icon={<ShieldCheck className="w-5 h-5" />} value="Licensed & Bonded" sub="CA #1132988" />
              <div className="w-px h-12 bg-white/10 hidden sm:block" />
              <Stat icon={<Clock className="w-5 h-5" />} value="24/7" sub="Emergency Service" />
              <div className="w-px h-12 bg-white/10 hidden sm:block" />
              <Stat icon={<Star className="w-5 h-5" />} value="92 Score" sub="BuildZoom Rating" />
            </div>
          </div>

          {/* Right Column - Image Collage */}
          <div className="relative hidden lg:block">
            {/* Main hero image */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50">
              <Image
                src="/images/electrician-working.jpg"
                alt="Quesada Electric electrician performing wiring work"
                width={600}
                height={800}
                className="w-full h-[500px] object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080B14]/60 via-transparent to-transparent" />
            </div>

            {/* Floating accent image - bottom left */}
            <div className="absolute -bottom-6 -left-6 w-48 h-48 rounded-xl overflow-hidden border-2 border-amber-500/30 shadow-xl shadow-black/50">
              <Image
                src="/images/panel-closeup.jpg"
                alt="Electrical panel upgrade by Quesada Electric"
                width={200}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating accent image - top right */}
            <div className="absolute -top-4 -right-4 w-40 h-40 rounded-xl overflow-hidden border-2 border-amber-500/30 shadow-xl shadow-black/50">
              <Image
                src="/images/commercial-panel.jpg"
                alt="Commercial electrical panel installation"
                width={160}
                height={160}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Decorative amber glow behind images */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-3xl -z-10" />
          </div>

          {/* Mobile image - shown below text on small screens */}
          <div className="relative lg:hidden">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50 max-w-md mx-auto">
              <Image
                src="/images/electrician-working.jpg"
                alt="Quesada Electric electrician performing wiring work"
                width={600}
                height={400}
                className="w-full h-[350px] object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080B14]/60 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#services"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 hover:text-amber-400 transition-colors group"
      >
        <span className="text-xs tracking-widest uppercase">Explore</span>
        <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
      </a>
    </section>
  )
}

function Stat({
  icon,
  value,
  sub,
}: {
  icon: React.ReactNode
  value: string
  sub: string
}) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="flex items-center gap-1.5 text-amber-400 font-bold text-lg">
        {icon}
        {value}
      </div>
      <p className="text-slate-500 text-xs tracking-wide">{sub}</p>
    </div>
  )
}
