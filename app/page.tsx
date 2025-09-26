import Header from '@/components/Header'
import MobileHeader from '@/components/MobileHeader'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import MobileBottomNav from '@/components/MobileBottomNav'

export default function Home() {
  return (
    <main className="min-h-screen pb-20 md:pb-0">
      <Header />
      <MobileHeader />
      <Hero />
      <Services />
      <About />
      {/* <Contact /> */}
      <Footer />
      <WhatsAppButton />
      <MobileBottomNav />
    </main>
  )
}
