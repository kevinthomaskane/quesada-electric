'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Wire up to form backend (e.g., Resend, Formspree, or Next.js API route)
    setSubmitted(true)
  }

  return (
    <section id="contact" className="section-padding bg-[#080B14]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-amber-500 text-sm font-semibold uppercase tracking-widest mb-3">
            Get in Touch
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Request a Free Estimate
          </h2>
          <p className="max-w-xl mx-auto text-slate-400 text-lg">
            Ready to get started? Call us directly for the fastest response, or fill
            out the form and we'll get back to you promptly.
          </p>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left: Contact Info */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Phone — Primary CTA */}
            <a
              href="tel:8622027122"
              className="group flex items-center gap-4 bg-amber-500 hover:bg-amber-400 text-[#080B14] rounded-2xl p-6 transition-all duration-200 hover:shadow-2xl hover:shadow-amber-500/25"
            >
              <div className="w-12 h-12 bg-[#080B14]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="font-semibold text-sm opacity-80">Call us directly</p>
                <p className="font-black text-2xl tracking-tight">(862) 202-7122</p>
                <p className="text-sm opacity-70 mt-0.5">Available 24/7 for emergencies</p>
              </div>
            </a>

            {/* Info Cards */}
            <InfoCard
              icon={<Mail className="w-5 h-5 text-amber-400" />}
              label="Email"
              value="info@quesadaelectric.com"
              href="mailto:info@quesadaelectric.com"
              sublabel="We respond within 24 hours"
            />
            <InfoCard
              icon={<MapPin className="w-5 h-5 text-amber-400" />}
              label="Based in"
              value="Hermosa Beach, CA 90254"
              sublabel="Serving the entire South Bay"
            />
            <InfoCard
              icon={<Clock className="w-5 h-5 text-amber-400" />}
              label="Hours"
              value="Mon – Sat: 7am – 7pm"
              sublabel="24/7 emergency service available"
            />

            {/* License badge */}
            <div className="bg-[#0F1629] border border-amber-500/15 rounded-2xl p-5">
              <p className="text-amber-400 font-bold mb-1 text-sm uppercase tracking-wide">
                Licensed & Bonded
              </p>
              <p className="text-white font-bold">CA License #1132988</p>
              <p className="text-slate-500 text-xs mt-1">C-10 Electrical · Active Status</p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3 bg-[#0F1629] border border-white/5 rounded-3xl p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <div className="w-16 h-16 bg-amber-500/10 border border-amber-500/30 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-amber-400" />
                </div>
                <h3 className="text-white font-bold text-2xl mb-2">Message Sent!</h3>
                <p className="text-slate-400 max-w-sm">
                  Thanks for reaching out. We'll review your request and get back to
                  you within 24 hours. For urgent needs, call us at (862) 202-7122.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-white font-bold text-xl mb-6">Tell us about your project</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <FormField
                    label="Full Name"
                    id="name"
                    type="text"
                    placeholder="John Smith"
                    value={form.name}
                    onChange={(v) => setForm({ ...form, name: v })}
                    required
                  />
                  <FormField
                    label="Phone Number"
                    id="phone"
                    type="tel"
                    placeholder="(310) 555-0123"
                    value={form.phone}
                    onChange={(v) => setForm({ ...form, phone: v })}
                    required
                  />
                </div>

                <FormField
                  label="Email Address"
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={(v) => setForm({ ...form, email: v })}
                />

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-slate-300 mb-1.5">
                    Service Needed
                  </label>
                  <select
                    id="service"
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full bg-[#080B14] border border-white/10 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/25 transition-colors appearance-none cursor-pointer"
                  >
                    <option value="">Select a service...</option>
                    <option>Panel Upgrade</option>
                    <option>EV Charger Installation</option>
                    <option>Residential Wiring</option>
                    <option>Commercial Electrical</option>
                    <option>Underground Conduit</option>
                    <option>Emergency Service</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1.5">
                    Project Description
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Describe your project or the issue you're experiencing..."
                    className="w-full bg-[#080B14] border border-white/10 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/25 transition-colors resize-none placeholder:text-slate-600"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-[#080B14] font-bold py-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-amber-500/20 text-base"
                >
                  <Send className="w-4 h-4" />
                  Send My Request
                </button>

                <p className="text-slate-600 text-xs text-center">
                  By submitting, you agree to be contacted about your project.
                  We never share your information.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function InfoCard({
  icon,
  label,
  value,
  href,
  sublabel,
}: {
  icon: React.ReactNode
  label: string
  value: string
  href?: string
  sublabel?: string
}) {
  const inner = (
    <div className="flex items-start gap-4 bg-[#0F1629] border border-white/5 rounded-2xl p-5 hover:border-amber-500/20 transition-colors">
      <div className="flex-shrink-0 mt-0.5">{icon}</div>
      <div>
        <p className="text-slate-500 text-xs uppercase tracking-wide mb-0.5">{label}</p>
        <p className="text-white font-semibold text-sm">{value}</p>
        {sublabel && <p className="text-slate-500 text-xs mt-0.5">{sublabel}</p>}
      </div>
    </div>
  )

  return href ? <a href={href}>{inner}</a> : <div>{inner}</div>
}

function FormField({
  label,
  id,
  type,
  placeholder,
  value,
  onChange,
  required,
}: {
  label: string
  id: string
  type: string
  placeholder: string
  value: string
  onChange: (v: string) => void
  required?: boolean
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-slate-300 mb-1.5">
        {label} {required && <span className="text-amber-500">*</span>}
      </label>
      <input
        type={type}
        id={id}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-[#080B14] border border-white/10 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/25 transition-colors placeholder:text-slate-600"
      />
    </div>
  )
}
