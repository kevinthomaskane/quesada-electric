import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Quesada Electric | Licensed Electrician in Hermosa Beach, CA',
  description:
    'Licensed and bonded electrical contractor serving Hermosa Beach and the South Bay. Specializing in panel upgrades, EV charging installation, residential & commercial electrical services. CA License #1132988.',
  keywords: [
    'electrician Hermosa Beach',
    'electrical contractor South Bay',
    'panel upgrade',
    'EV charging installation',
    'licensed electrician California',
    'Quesada Electric',
  ],
  openGraph: {
    title: 'Quesada Electric | Licensed Electrician in Hermosa Beach, CA',
    description:
      'Expert electrical services for residential and commercial properties in the South Bay. Licensed, bonded, and available 24/7.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quesada Electric | Licensed Electrician in Hermosa Beach, CA',
    description:
      'Expert electrical services for residential and commercial properties in the South Bay. Licensed, bonded, and available 24/7.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#080B14] text-white antialiased">{children}</body>
    </html>
  )
}
