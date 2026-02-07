import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { Calendar, PlayCircle } from 'lucide-react'

export default function CTASection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-asset-secondary to-asset-accent relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Property Management?
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-10">
            Join the leading property management companies already using AssetLiving.tech 
            to drive efficiency, increase revenue, and deliver exceptional resident experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-asset-secondary bg-white hover:bg-asset-gray-50 rounded-md transition-all duration-200 hover:scale-105 shadow-lg"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Schedule a Demo
            </Link>
            <button
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-white/20 backdrop-blur-sm border-2 border-white/50 hover:bg-white/30 rounded-md transition-all duration-200"
            >
              <PlayCircle className="mr-2 h-5 w-5" />
              Watch Video Tour
            </button>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">30-day</div>
              <div className="text-white/80">Free Trial</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">No</div>
              <div className="text-white/80">Setup Fees</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">24/7</div>
              <div className="text-white/80">Support</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}