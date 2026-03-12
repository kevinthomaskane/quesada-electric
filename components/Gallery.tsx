'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X, ZoomIn } from 'lucide-react'

const galleryItems = [
  {
    src: '/images/348s-2.jpg',
    alt: 'Exterior conduit runs on residential building',
    category: 'Conduit Work',
    span: 'col-span-1 row-span-1',
  },
  {
    src: '/images/breaker-panel.jpg',
    alt: 'Residential breaker panel with labeled circuits',
    category: 'Panel Work',
    span: 'col-span-1 row-span-1',
  },
  {
    src: '/images/commercial-panel.jpg',
    alt: 'Large commercial Siemens panel installation',
    category: 'Commercial',
    span: 'col-span-1 row-span-2',
  },
  {
    src: '/images/exterior-disconnects.jpg',
    alt: 'Underground electrical disconnects installation',
    category: 'Underground',
    span: 'col-span-1 row-span-1',
  },
  {
    src: '/images/conduit-exterior.jpg',
    alt: 'Service conduit runs on building exterior',
    category: 'Conduit Work',
    span: 'col-span-1 row-span-1',
  },
  {
    src: '/images/eaton-disconnect.jpg',
    alt: 'Three-phase Eaton disconnect switch installation',
    category: 'Commercial',
    span: 'col-span-1 row-span-1',
  },
  {
    src: '/images/panel-closeup.jpg',
    alt: 'Electrical panel upgrade close-up',
    category: 'Panel Work',
    span: 'col-span-1 row-span-1',
  },
  {
    src: '/images/underground-conduit.jpg',
    alt: 'Underground conduit trench work',
    category: 'Underground',
    span: 'col-span-1 row-span-1',
  },
  {
    src: '/images/electrician-working.jpg',
    alt: 'Electrician performing wiring installation',
    category: 'Commercial',
    span: 'col-span-1 row-span-1',
  },
]

const categories = ['All', 'Panel Work', 'Conduit Work', 'Commercial', 'Underground']

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)

  const filtered =
    activeCategory === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory)

  return (
    <section id="gallery" className="section-padding bg-[#0F1629]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-amber-500 text-sm font-semibold uppercase tracking-widest mb-3">
            Portfolio
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">Our Work</h2>
          <p className="max-w-xl mx-auto text-slate-400 text-lg leading-relaxed">
            Real jobs, real results. A look at the quality and range of work we
            deliver across residential and commercial projects.
          </p>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-6 rounded-full" />
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-amber-500 text-[#080B14]'
                  : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {filtered.map((item, i) => (
            <GalleryCard
              key={item.src + i}
              item={item}
              onOpen={() => setLightboxImage(item.src)}
            />
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-slate-500 text-sm mt-8">
          All work performed by licensed electricians · CA License #1132988
        </p>
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-4 right-4 text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <div
            className="relative max-w-4xl w-full max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightboxImage}
              alt="Work detail"
              width={1200}
              height={900}
              className="rounded-2xl object-contain max-h-[85vh] w-full"
            />
          </div>
        </div>
      )}
    </section>
  )
}

function GalleryCard({
  item,
  onOpen,
}: {
  item: (typeof galleryItems)[0]
  onOpen: () => void
}) {
  return (
    <div
      className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer bg-[#080B14] border border-white/5 hover:border-amber-500/30 transition-all duration-300"
      onClick={onOpen}
    >
      <Image
        src={item.src}
        alt={item.alt}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 768px) 50vw, 33vw"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Category badge */}
      <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="bg-amber-500 text-[#080B14] text-xs font-bold px-2.5 py-1 rounded-full">
          {item.category}
        </span>
      </div>

      {/* Zoom icon */}
      <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="bg-white/20 backdrop-blur-sm text-white rounded-full p-1.5">
          <ZoomIn className="w-4 h-4" />
        </div>
      </div>

      {/* Bottom label */}
      <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
        <p className="text-white text-xs font-medium truncate">{item.alt}</p>
      </div>
    </div>
  )
}
