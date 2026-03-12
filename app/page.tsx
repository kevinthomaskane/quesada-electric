import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Gallery from '@/components/Gallery'
import About from '@/components/About'
import TrustBadges from '@/components/TrustBadges'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080B14] overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <About />
      <TrustBadges />
      <Contact />
      <Footer />
    </main>
  )
}
