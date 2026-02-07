import Hero from '@/components/home/Hero'
import ValuePropositions from '@/components/home/ValuePropositions'
import FeaturesShowcase from '@/components/home/FeaturesShowcase'
import ClientTestimonials from '@/components/home/ClientTestimonials'
import CTASection from '@/components/home/CTASection'

export default function HomePage() {
  return (
    <>
      <Hero />
      <ValuePropositions />
      <FeaturesShowcase />
      <ClientTestimonials />
      <CTASection />
    </>
  )
}